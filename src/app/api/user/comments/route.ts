import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/lib/mongoose";
import Post from "@/models/Post";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest) {
    try {
        await connectToDB();

        const token = req.cookies.get("token")?.value;
        if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        const { userId } = decoded as { userId: string };

        const posts = await Post.find({ "comment.userId": userId });

        const userComments = posts.flatMap((post) =>
            post.comment
                .filter((c) => c.userId === userId)
                .map((c) => ({
                    ...c.toObject(),
                    postId: post.postId,
                    typeId: post.typeId,
                }))
        );

        return NextResponse.json({ comments: userComments }, { status: 200 });
    } catch (error) {
        console.error("GET user comments error:", error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
