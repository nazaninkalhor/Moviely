import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectToDB from '@/lib/mongoose';
import User from "@/models/User";
import { generateToken } from '@/lib/auth/generateToken';

export async function POST(req: Request) {
    try {
        await connectToDB();
        const { email, password } = await req.json();
        if (!email || !password) {
            return NextResponse.json({ message: "Email and password required" }, { status: 400 });
        }

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }

        const token = generateToken({
            userId: existingUser._id.toString(),
            email: existingUser.email,
        });

        const response = NextResponse.json({
            message: "Login was successful",
            user: {
                email: existingUser.email,
                username: existingUser.username
            }
        }, { status: 200 });

        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
        });

        return response;

    } catch (error) {
        console.error("Login Error:", error);
        return NextResponse.json({ message: error }, { status: 500 });
    }
}
