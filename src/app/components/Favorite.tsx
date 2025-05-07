"use client";
import React, { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { toast } from "react-toastify";
import { useUser } from "../context/UserContext";

type FavoriteProps = {
  itemId: string;
  type: "movie" | "series";
};

const Favorite = ({ itemId, type }: FavoriteProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { user } = useUser();
  console.log("this is user", user);
  const handleLike = async () => {
    if (!user || !user.id) {
      toast.error("Please login first!");
      return;
    }

    try {
      const res = await fetch("/api/users/like", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          itemId,
          type,
        }),
      });

      if (res.ok) {
        setIsFavorite(true);
        toast.success("Added to favorites");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error");
    }
  };

  return (
    <button
      onClick={handleLike}
      className="ms-2 p-2 rounded-xl border-none bg-white"
    >
      {isFavorite ? (
        <IoMdHeart className="text-red-600 text-2xl" />
      ) : (
        <IoMdHeartEmpty className="text-red-600 text-2xl" />
      )}
    </button>
  );
};

export default Favorite;
