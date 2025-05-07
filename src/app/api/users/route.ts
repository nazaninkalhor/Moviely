import { NextResponse, NextRequest } from "next/server";
import connectToDB from "@/lib/mongoose";
import User from "@/models/User";

export async function Get() {
  try {
    await connectToDB();
    const users = await User.find({}, "username email password");
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Server Error", error }, { status: 500 })
  }
}

export async function Post(req: NextRequest) {
  try {
    await connectToDB();
    const { username, email, password } = await req.json();
    const newUser = new User({ username, email, password });
    await newUser.save();
    return NextResponse.json(newUser, { status: 201 });
  }

  catch (error) {
    return NextResponse.json({ message: "Server Error", error }, { status: 500 })
  }
}