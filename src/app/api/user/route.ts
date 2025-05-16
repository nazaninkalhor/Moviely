import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import connectToDB from "@/lib/mongoose";
import User from "@/models/User";
type TokenPayload = {
    userId: string;
    email: string;
};
export async function GET(req: NextRequest) {
    try {
        await connectToDB();

        const token = req.cookies.get("token")?.value;
        if (!token) {
            return NextResponse.json({ message: "Unauthorized " }, { status: 401 })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as TokenPayload
        const user = await User.findById(decoded.userId).select("email username")

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 })
        }

        return NextResponse.json({user}, { status: 200 })
    } catch (error) {
        console.error("User Fetch Error:", error);
        return NextResponse.json({ message: "Internal Error" }, { status: 500 });
    }
}