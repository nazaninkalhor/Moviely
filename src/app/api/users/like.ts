import connectToDB from "@/lib/mongoose";
import User from "@/models/User";

export async function POST(req: Request) {
    await connectToDB();
    const { userId, itemId, type } = await req.json();

    try {
        const user = await User.findById(userId);
        if (!user) return new Response("User not found", { status: 404 });

        const alreadyLiked = user.likedItems.some(
            (item: any) => item.itemId === itemId && item.type === type
        );
        if (!alreadyLiked) {
            user.likedItems.push({ itemId, type });
            await user.save();
        }

        return new Response("Item liked", { status: 200 });
    } catch (err) {
        return new Response("Server error", { status: 500 });
    }
}
