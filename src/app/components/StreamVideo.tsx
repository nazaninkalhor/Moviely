"use client";
import React from "react";
import { useUser } from "../context/UserContext";
const StreamVideo = () => {
  const { user, loading } = useUser();
  if (loading) return null;
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      {user ? (
        <>
          <div className="absolute inset-0 blur-2xl rounded-2xl bg-gradient-to-br from-red-500/20 via-white/10 to-blue-500/20 z-0 scale-110"></div>

          <div className="relative z-10 overflow-hidden rounded-xl shadow-2xl border-4 shadow-white/55 border-white/10">
            <video
              preload="true"
              src="/videos/JohnWick.mp4"
              controls
              className="w-full h-full object-cover"
              poster="/images/john-wick-thumb.jpg"
            />
          </div>
        </>
      ) : (
        <p className="font-medium text-xl text-red-400">
          Please Signup or Login to Stream This Movie!
        </p>
      )}
    </div>
  );
};

export default StreamVideo;
