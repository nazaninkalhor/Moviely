import User from '@/models/User';
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectToDB from '@/lib/mongoose';
import { generateToken } from './../../../../lib/auth/generateToken';

export async function POST(req: NextRequest) {
    try {
        await connectToDB();
        const { username, email, password } = await req.json();
        const userByEmail = await User.findOne({ email });
        const userByUsername = await User.findOne({ username });
        if (userByEmail) {
            return NextResponse.json({ message: "User already exists" }, { status: 409 });
        }
        if (userByUsername) {
            return NextResponse.json({ message: "Username already exists" }, { status: 409 });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword, likedItems: [] });
        if (!password || !email || !username) {
            return NextResponse.json({ message: "Missing fields" }, { status: 400 });
        }
        await newUser.save();
        const token = generateToken({
            userId: newUser._id.toString(),
            email: newUser.email,
        })
        const response = NextResponse.json({ message: "User Created", user: { email: newUser.email, username: newUser.username } }, { status: 201 })

        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
        }
        );
        return response;
    } catch (error) {
        console.error("Register API Error:", error);
        return NextResponse.json({ message: "Server Error", error }, { status: 500 });
    }
}