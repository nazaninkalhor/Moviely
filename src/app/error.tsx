"use client";
import Image from "next/image";
import Link from "next/link";

export default function notFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white text-center px-4 z-2">
      <div className=" max-w-full ">
        <Image
          src="/images/ErrorSnack.png"
          alt="404 on cinema screen"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-5"></div>
      </div>

      <Link href="/" passHref>
        <button className="relative z-20 justify-center mt-56  bg-red-600 hover:bg-red-700 transition-colors text-white px-6 py-2 rounded-full shadow-md">
          Go Home
        </button>
      </Link>
    </div>
  );
}
