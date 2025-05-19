"use client";
import { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";
import dayjs from "dayjs";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("account");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const { user, loading } = useUser();

  const tabs = [
    { id: "account", label: "👤 Account " },
    { id: "favorites", label: "❤️ Favorites" },
    { id: "activities", label: "📌 Activities" },
  ];

  useEffect(() => {
    const fetchLikes = async () => {
      if (!user?._id) return;
      const resLike = await fetch("/api/user/likes", {
        credentials: "include",
      });
      const dataLike = await resLike.json();
      const userLikedItems = dataLike.likedItems;

      setLikes(userLikedItems);
    };

    const fetchComments = async () => {
      if (!user?.username) return;
      const resComment = await fetch("/api/user/comments", {
        credentials: "include",
      });
      const dataComment = await resComment.json();
      setComments(dataComment.comments);
    };

    if (user) {
      fetchLikes();
      fetchComments();
    }
  }, [user]);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You are not logged in</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-800 to-transparent text-white">
      <div
        className="relative h-60 w-full bg-cover bg-center"
        style={{ backgroundImage: `url('/images/userBanner.png')` }}
      >
        <div className="absolute bottom-[-40px] left-6 w-24 h-24 rounded-full border-4 border-red-800 overflow-hidden">
          <img
            loading="lazy"
            src="/images/Profile.jpg"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mt-16 px-6">
        <h1 className="text-3xl font-bold"> {user.username} </h1>
        <p className="text-sm text-red-300">Movie & Series Enthusiast</p>
      </div>

      <div className="px-6 mt-8">
        <div className="flex gap-4 border-b border-red-300 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-1 font-medium ${
                activeTab === tab.id
                  ? "border-b-2 border-white text-white"
                  : "text-red-300 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 mt-3">
        {activeTab === "account" && (
          <div>
            <ul className="md:flex md:flex-row gap-8">
              {/* Account Info */}
              <li className="bg-white/5 p-6 rounded-2xl w-full md:w-1/2 shadow-md">
                <h2 className="text-2xl font-bold text-white mb-6">
                  👤 Account Info
                </h2>

                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-1">Username</p>
                  <p className="bg-white/10 text-white/80 py-2 px-4 rounded-lg">
                    {user.username}
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <p className="bg-white/10 text-white/80 py-2 px-4 rounded-lg">
                    {user.email}
                  </p>
                </div>

                <div className="mb-10">
                  <p className="text-sm text-gray-400 mb-1">Password</p>
                  <p className="bg-white/10 text-white/80 py-2 px-4 rounded-lg">
                    xxxxxxxx
                  </p>
                </div>
                <button className="w-full bg-white hover:bg-red-200 transition-all text-black py-3 rounded-xl font-semibold">
                  Edit
                </button>
              </li>

              {/* Subscription Plan */}
              <li className="bg-white/5 p-6 rounded-2xl w-full md:w-1/2 shadow-md mt-10 md:mt-0">
                <h2 className="text-2xl font-bold text-white mb-6">
                  📅 Subscription Plan
                </h2>

                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-1">Your Plan</p>
                  <p className="bg-white/10 text-white/80 py-2 px-4 rounded-lg">
                    6 Months
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-1">To Use</p>
                  <p className="bg-white/10 text-white/80 py-2 px-4 rounded-lg">
                    4 Months
                  </p>
                </div>

                <div className="mb-10">
                  <p className="text-sm text-gray-400 mb-1">Expire Date</p>
                  <p className="bg-white/10 text-white/80 py-2 px-4 rounded-lg">
                    8/10/2025
                  </p>
                </div>

                <button className="w-full bg-red-800 hover:bg-red-700 transition-all text-white py-3 rounded-xl font-semibold">
                  Subscribe
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {activeTab === "favorites" && (
        <div>
          <h2 className="text-xl font-semibold mb-4 ms-5 ">
            🎬 Your Favorites
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ps-6 pe-6">
            {likes.map((like, index) => (
              <div
                key={index}
                className="bg-white/5 p-4 rounded-xl flex flex-col gap-4"
              >
                <img
                  loading="lazy"
                  src={`https://image.tmdb.org/t/p/w500${like.postPosterPath}`}
                  alt={like.postName}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div>
                  <p className="text-md text-gray-300">You've liked:</p>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {like.postName || "Unknown Title"}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "activities" && (
        <div>
          <h2 className="text-xl font-semibold mb-4 ms-5">📌 Activities</h2>
          <ul className="mt-6 space-y-4 ps-6 pe-6">
            {comments.map((comment) => (
              <li
                key={comment._id}
                className="bg-white/5 p-4 rounded-xl flex flex-col sm:flex-row gap-4"
              >
                <img
                  loading="lazy"
                  src={`https://image.tmdb.org/t/p/w500${comment.postPosterPath}`}
                  alt={comment.postName}
                  className="w-full sm:w-48 h-64 sm:h-48 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <div className="flex-col customizedMd:flex customizedMd:flex-row customizedMd:items-baseline customizedMd:justify-between">
                    <div className="customizedMd:flex customizedMd:flex-row customizedMd:items-start">
                      <p className="text-md text-gray-300">Your comment on:</p>
                      <h3 className="text-lg font-semibold text-white mb-2 customizedMd:ms-2">
                        {comment.postName || "Unknown Title"}
                      </h3>
                    </div>

                    <p className="text-xs text-gray-400">
                      {dayjs(comment.createdAt).format("YYYY/MM/DD - HH:mm")}
                    </p>
                  </div>

                  <p className="text-sm text-gray-200 italic mb-1">
                    {comment.content}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default ProfilePage;
