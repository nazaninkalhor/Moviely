"use client";
import React, { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
const Favorite = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };
  return (
    <div>
      <button
        onClick={toggleFavorite}
        className="ms-2 p-2 rounded-xl border-none bg-white"
      >
        {isFavorite ? (
          <IoMdHeart className=" text-red-600 text-2xl" />
        ) : (
          <IoMdHeartEmpty className=" text-red-600 text-2xl" />
        )}
      </button>
    </div>
  );
};

export default Favorite;
