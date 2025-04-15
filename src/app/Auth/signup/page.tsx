"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Registration failed");

      setMessage("✅ User created successfully!");
      setUserName("");
      setEmail("");
      setPassword("");
      router.push("/Auth/Dashboard");
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
          Register
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-white text-sm mb-1">Username</label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              required
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="nickname"
            />
          </div>
          <div>
            <label className="block text-white text-sm mb-1">Email</label>
            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-white text-sm mb-1">Password</label>
            <input
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="12345678"
            />
          </div>
          <button
            disabled={loading}
            type="submit"
            className="w-full bg-white text-black font-semibold py-2 rounded-lg hover:bg-white/30 transition mt-4"
          >
            {loading ? "Registering..." : "Register"}
          </button>
          {message && <p className="text-sm text-center">{message}</p>}
          <p>
            Do you have an account ?{" "}
            <Link href="/Auth/login" className="underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page;
