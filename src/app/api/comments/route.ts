import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/lib/mongoose";
import Post from "@/models/Post";
import { parseQueryParams } from "@/lib/helpers";

export async function GET(req: NextRequest) {
    try {
        await connectToDB();

        const searchParams = parseQueryParams(req.url);
        const postId = searchParams["postId"];
        const typeId = searchParams["typeId"];

        if (!postId) {
            return NextResponse.json({ message: "Missing postId" }, { status: 400 });
        }

        const query: any = { postId };
        if (typeId) query.typeId = typeId;

        const post = await Post.findOne(query).select("comment postId typeId");

        if (!post) {
            return NextResponse.json({ message: "Post not found", comments: [] }, { status: 404 });
        }

        return NextResponse.json({ comments: post.comment }, { status: 200 });

    } catch (error: any) {
        console.error("❌ Error fetching comments:", error);
        return NextResponse.json({ message: "Server error", error: error.message }, { status: 500 });
    }
}


export async function POST(req: NextRequest) {
    try {
        await connectToDB();
        const { userId, username, postId, typeId, content } = await req.json();
        const post = await Post.findOne({ postId, typeId });

        if (post) {
            post.comment.push({
                userId,
                username,
                postId,
                content,
                createdAt: new Date().toISOString(),
            });

            await post.save();

            return NextResponse.json({ comment: post.comment }, { status: 201 });
        }

        const newPost = new Post({
            postId,
            typeId,
            comment: [{
                userId,
                username,
                postId,
                content,
                createdAt: new Date().toISOString(),
            }],
        });
        await newPost.save();

        return NextResponse.json({ comment: newPost.comment }, { status: 201 });

    } catch (err) {
        console.error("Error:", err);
        return NextResponse.json({ message: "Server error", err }, { status: 500 });
    }
}

