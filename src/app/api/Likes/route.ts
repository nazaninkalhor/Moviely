
import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/lib/mongoose";
import User from "@/models/User";
import { parseQueryParams } from './../../../../lib/helpers';

export async function POST(req: NextRequest) {
    try {
        await connectToDB();

        const { userId, postId, typeId } = await req.json();

        if (!userId || !postId || !typeId) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }

        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        const alreadyLiked = user.likedItems.some(
            (item) => item.postId === postId && item.typeId === typeId
        );

        if (alreadyLiked) {
            await User.updateOne(
                { _id: userId },
                { $pull: { likedItems: { postId, typeId } } }
            );
            return NextResponse.json({ liked: false });
        } else {
            await User.updateOne(
                { _id: userId },
                { $push: { likedItems: { postId, typeId } } }
            );
            return NextResponse.json({ liked: true });
        }

    } catch (err) {
        console.error("Like toggle error:", err);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}


export async function GET(req: Request) {
    await connectToDB();
    const { searchParams } = parseQueryParams(req.url);
    const userId = searchParams["userId"];
    const postId = searchParams["postId"];
    const typeId = searchParams["typeId"];

    if (!userId || !postId || !typeId) {
        return NextResponse.json({ message: "Missing params" }, { status: 400 });
    }

    try {
        const user = await User.findById(userId);
        if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

        const liked = user.likedItems.some(
            (item) => item.postId === postId && item.typeId === typeId
        );
        console.log(liked)
        return NextResponse.json({ liked });
    } catch (err) {
        console.log("Check like error:", err);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}


