"use client";
import React, { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";
import ReviewCards from "./ReviewCards";

const Comments = ({
  postPosterPath,
  postName,
  postId,
  typeId,
  tmdbReviews,
}) => {
  const { user, loading } = useUser();
  const [content, setContent] = useState("");
  const [localReviews, setLocalReviews] = useState([]);
  const userId = user?._id || "";
  const username = user?.username;

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(
          `/api/comments?postId=${postId}&typeId=${typeId}&postName=${postName}&postPosterPath=${postPosterPath}`
        );
        const data = await res.json();

        if (!res.ok) {
          console.error("Failed to fetch comments:", data.message);
          return;
        }

        setLocalReviews(data.comments);
      } catch (err) {
        console.error("Error in fetch:", err);
      }
    };

    fetchComments();
  }, [postId, typeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending comment", {
        userId,
        postId,
        postName,
        postPosterPath,
        typeId,
        content,
      });
      const res = await fetch("/api/comments", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          username,
          postId,
          content,
          typeId,
          postName,
          postPosterPath,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Failed to post comment:", data.message);
        return;
      }

      setLocalReviews((prev) => [data.comments, ...prev]);
      setContent("");
    } catch (err) {
      console.error("Error in fetch:", err);
    }
  };

  const mergedReviews = [
    ...localReviews.map((r) => ({
      author: r.username,
      content: r.content,
      author_details: { username: r.username, avatar_path: null },
    })),
    ...(Array.isArray(tmdbReviews) ? tmdbReviews : []),
  ];

  return (
    <div className="mt-10">
      {mergedReviews.map((r, i) => (
        <ReviewCards key={i} review={r} />
      ))}

      {user ? (
        <form
          className="flex flex-col items-center mt-10"
          onSubmit={handleSubmit}
        >
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
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
        <p className="text-gray-300 mt-5 text-center">
          You need to <span className="underline">log in or register</span> to
          comment.
        </p>
      )}
    </div>
  );
};

export default Comments;
