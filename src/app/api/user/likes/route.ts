import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectToDB from "@/lib/mongoose";
import User from "@/models/User";

export async function GET(req: NextRequest) {
    try {
        await connectToDB();

        const token = req.cookies.get("token")?.value;
        if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };

        const user = await User.findById(decoded.userId).select("likedItems");

        if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

        return NextResponse.json({ likedItems: user.likedItems }, { status: 200 });
    } catch (err) {
        console.error("Error fetching likes:", err);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
