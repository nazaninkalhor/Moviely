"use client";
import { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";

export default function ProfilePage() {
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

      setLikes(dataLike.likes);
      console.log("like", dataLike.likes);
    };

    const fetchComments = async () => {
      if (!user?.username) return;
      const resComment = await fetch("/api/user/comments", {
        credentials: "include",
      });
      const dataComment = await resComment.json();
      console.log("comments", dataComment.comments);
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
        style={{ backgroundImage: `url('/images/cover.jpg')` }}
      >
        {/* Profile Avatar */}
        <div className="absolute bottom-[-40px] left-6 w-24 h-24 rounded-full border-4 border-red-800 overflow-hidden">
          <img
            loading="lazy"
            src="/profile.jpg"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* User Info */}
      <div className="mt-16 px-6">
        <h1 className="text-3xl font-bold"> {user.username} </h1>
        <p className="text-sm text-red-300">Movie & Series Enthusiast</p>
      </div>
      {/* Tabs */}
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
      {/* Tab Content */}
      <div className="px-6 mt-3">
        {activeTab === "account" && (
          <div>
            <ul className="md:flex md:flex-row">
              <li>
                <h2 className="text-xl font-semibold">Account Info </h2>
                <form>
                  <div className="mt-4">
                    <label className="block text-white text-sm mb-1">
                      Username
                    </label>
                    <input
                      disabled
                      value={user.username}
                      className=" px-4 py-2 rounded-lg bg-white/10 text-white/60 placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                  </div>
                  <div className="mt-8">
                    <label className="block text-white text-sm mb-1">
                      Email
                    </label>
                    <input
                      disabled
                      value={user.email}
                      className=" px-4 py-2 rounded-lg bg-white/10 text-white/60 placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                  </div>
                  <div className="mt-8">
                    <label className="block text-white text-sm mb-1">
                      About me
                    </label>
                    <textarea
                      disabled
                      value="Movie & Series Enthusiast"
                      className="textarea-xl ps-4 pe-11 pt-2 pb-10 rounded-lg bg-white/10 text-white/60 placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                  </div>
                </form>
              </li>
              <li className="md:ms-10 mt-8 md:mt-0">
                <h2 className="text-xl font-semibold mb-4">Security Info </h2>
                <form>
                  <div>
                    <label className="block text-white text-sm mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      disabled
                      value="AliRezaei"
                      className=" px-4 py-2 rounded-lg bg-white/10 text-white/60 placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                  </div>
                  <div className="mt-8">
                    <label className="block text-white text-sm mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      disabled
                      value="AliRezaei"
                      className=" px-4 py-2 rounded-lg bg-white/10 text-white/60 placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                  </div>
                  <div className="mt-8">
                    <label className="block text-white text-sm mb-1">
                      New Password
                    </label>
                    <input
                      value=""
                      className=" px-4 py-2 rounded-lg bg-white/10 text-white/60 placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                  </div>
                  <div className="mt-14 ">
                    <button className="btn bg-white text-black px-12">
                      Change Password
                    </button>
                  </div>
                </form>
              </li>
              <li className="md:ms-10 mt-8 md:mt-0">
                <h2 className="text-xl font-semibold mb-4">
                  Subscription Plan
                </h2>
                <form>
                  <div>
                    <label className="block text-white text-sm mb-1">
                      Your Plan
                    </label>
                    <input
                      disabled
                      value="6 Months"
                      className=" px-4 py-2 rounded-lg bg-white/10 text-white/60 placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                  </div>
                  <div className="mt-8">
                    <label className="block text-white text-sm mb-1">
                      To Use:
                    </label>
                    <input
                      disabled
                      value="4 Months"
                      className=" px-4 py-2 rounded-lg bg-white/10 text-white/60 placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                  </div>
                  <div className="mt-8">
                    <label className="block text-white text-sm mb-1">
                      Expire Date
                    </label>
                    <input
                      disabled
                      value="8/10/2025"
                      className=" px-4 py-2 rounded-lg bg-white/10 text-white/60 placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                  </div>
                  <div className="mt-14 ">
                    <button className="btn bg-red-800 text-white px-20">
                      Subscribe
                    </button>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        )}

        {activeTab === "favorites" && (
          <>
            <div>
              <h2 className="text-xl font-semibold mb-4">🎬 Your Favorites</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
                <div className="bg-white/10 rounded-xl overflow-hidden">
                  {likes.map((like, index) => (
                    <div key={index} className="text-sm text-white">
                      Liked Item ID: {like.postId}
                    </div>
                  ))}
                  <div className="p-2">
                    <h3 className="text-sm font-semibold text-center">
                      Inception
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "activities" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">📌 Activities</h2>

            <ul className="mt-4 space-y-4">
              {comments.map((comment) => (
                <li key={comment._id} className="bg-white/5 p-4 rounded-lg">
                  <p className="text-sm text-white">{comment.text}</p>
                  <p className="text-xs text-red-300 mt-1">
                    On: {comment.postId}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
