import User from "@/models/User";
import connectToDB from './../../../../lib/mongoose';

export async function POST(req: Request) {
    await connectToDB();
    const { userId, itemId, type, text } = await req.json();

    try {
        const user = await User.findById(userId);
        if (!user) return new Response("User not found", { status: 404 });

        user.comments.push({ itemId, type, text });
        await user.save();

        return new Response("Comment added", { status: 200 });
    } catch (err) {
        return new Response("Server error", { status: 500 });
    }
}
