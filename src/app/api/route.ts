import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch("https://api.themoviedb.org/3/movie/popular");
    const data = await res.json();
    console.log(res)
    return NextResponse.json(data);

}
