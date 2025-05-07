"use client";
import React from "react";
import { useUser } from "../context/UserContext";
const Comments = () => {
  const { user, loading } = useUser();
  if (loading) return null;
  return (
    <div className="mt-10 ">
      {user ? (
        <form className="flex flex-col items-center">
          <textarea
            className="border p-2 rounded xs:w-4/5 w-full"
            placeholder="Write a comment..."
          />
          <button
            type="submit"
            className="mt-2 xs:w-4/5 w-full lg:w-2/5 px-4 py-2 bg-red-600 text-white rounded"
          >
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p className="text-gray-300">
            You need to <span className="underline">log in or register</span> to
            comment.
          </p>
        </div>
      )}
    </div>
  );
};

export default Comments;
