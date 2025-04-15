import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="justify-self-stretch items-center mt-20 mx-3 md:mt-40">
      <div className="backdrop-blur-md bg-gradient-to-bl from-red-900 to-transparent rounded-xl p-8 w-full max-w-sm shadow-2xl justify-self-center ">
        <h2 className="text-white text-3xl font-bold mb-6 text-center">
          Login
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-white text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-white text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="••••••••"
            />
          </div>
          <Link href="/dashboard">
            <button
              type="submit"
              className="w-full bg-white text-black font-semibold py-2 rounded-lg hover:bg-white/30 transition mt-4"
            >
              Sign In
            </button>
          </Link>
          <p>
            Don't have an account ?{" "}
            <Link href="/Auth/signup" className="underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default page;
