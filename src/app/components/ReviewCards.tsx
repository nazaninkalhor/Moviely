"use client";
import React from "react";

const ReviewCards = (review) => {
  const newReview = review.review;

  return (
    <div className="max-w-full mx-8 mt-10">
      <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-start justify-start">
        <div className="relative w-16 h-16 flex-shrink-0  ">
          {newReview.author_details && newReview.author_details != null ? (
            <img
              className="absolute left-2 top-2 w-full h-full object-cover object-center transition duration-50 rounded-full "
              loading="lazy"
              src={`https://image.tmdb.org/t/p/original${newReview.author_details.avatar_path}`}
              alt="profile image"
            />
          ) : (
            <img
              loading="lazy"
              className="absolute left-2 top-2 w-full h-full object-cover object-center transition duration-50 rounded-full "
              src="/Profile.jpg"
            />
          )}
        </div>

        <div className="flex flex-col gap-2 pb-4 pe-3">
          <div className="md:flex md:flex-row items-baseline gap-2">
            <h4 className="text-xl font-bold text-red-800 mt-4 ms-2">
              {(newReview.author_details &&
                newReview.author_details.username) ||
                review.username}
            </h4>
            <p className="text-red-300 text-md font-medium ms-2">
              {newReview.author || review.username}
            </p>
          </div>

          <p className="text-gray-500 w-5/6 sm:w-full">
            {newReview.content || review.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCards;
