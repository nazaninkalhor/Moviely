import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectToDB from "@/lib/mongoose";
import Post from "@/models/Post";

export async function GET(req: NextRequest) {
    try {
        await connectToDB();

        const token = req.cookies.get("token")?.value;
        if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };

        const posts = await Post.find({
            "comment.userId": decoded.userId,
        });

        const userComments = posts.flatMap((post) =>
            post.comment
                .filter((c: any) => c.username === decoded.userId)
                .map((c: any) => ({
                    postId: post.postId,
                    typeId: post.typeId,
                    content: c.content,
                    createdAt: c.createdAt,
                }))
        );

        return NextResponse.json({ comments: userComments }, { status: 200 });
    } catch (err) {
        console.error("Error fetching user comments:", err);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
