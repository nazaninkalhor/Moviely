"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../../context/UserContext";
import { setUserContext } from "@/lib/helpers";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const login = async (email: string, password: string) => {
    const res = await fetch("/api/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error("Login failed");
    await setUserContext(setLoading);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("Loading...");

    try {
      await login(email, password);
      setMessage("✅ Login was successful!");
      setEmail("");
      setPassword("");
      router.push("/dashboard");
    } catch (err: any) {
      setMessage(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="justify-self-stretch items-center mt-20 mx-3 md:mt-40">
      <div className="backdrop-blur-md bg-gradient-to-bl from-red-900 to-transparent rounded-xl p-8 w-full max-w-sm shadow-2xl justify-self-center ">
        <h2 className="text-white text-3xl font-bold mb-6 text-center">
          Login
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-white text-sm mb-1">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-white text-sm mb-1">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-2 rounded-lg hover:bg-white/30 transition mt-4"
          >
            Sign In
          </button>
          {message && <p className="text-sm text-center">{message}</p>}
          <p>
            Don't have an account ?
            <Link href="/Auth/signup" className="underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Page;
