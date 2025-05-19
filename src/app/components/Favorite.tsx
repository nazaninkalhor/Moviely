"use client";
import React, { useState, useEffect } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { toast } from "react-toastify";
import { useUser } from "../context/UserContext";

const Favorite = ({ itemId, typeId, postName, postPosterPath }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { user } = useUser();
  const checkIfLiked = async () => {
    if (!user) return;
    try {
      const res = await fetch(
        `/api/Likes?userId=${user._id}&postId=${itemId}&typeId=${typeId}&postName=${postName}&postPosterPath=${postPosterPath}`
      );
      console.log(
        "this is it",
        user._id,
        itemId,
        typeId,
        postName,
        postPosterPath
      );
      const data = await res.json();
      setIsFavorite(data.liked);
    } catch (error) {
      console.error("Error checking like status:", error);
    }
  };

  useEffect(() => {
    checkIfLiked();
  }, [user, itemId]);

  const handleLike = async () => {
    if (!user) {
      toast.error("Please login first!");
      return;
    }

    try {
      const res = await fetch("/api/Likes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user._id,
          postId: itemId,
          typeId,
          postName,
          postPosterPath,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setIsFavorite(data.liked);
        toast.success(
          data.liked ? "Added to favorites" : "Removed from favorites"
        );
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log("Like toggle error:", error);
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
