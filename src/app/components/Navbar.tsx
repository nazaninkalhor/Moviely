"use client";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoLogInOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { useUser } from "../context/UserContext";
import { setUserContext } from "@/lib/helpers";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState("");
  const { user, setUser, loading } = useUser();
  useEffect(() => {
    if (user) {
    }
  }, [user]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const closeSearchBar = () => {
    setOpenSearch(false);
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", { method: "GET", credentials: "include" });
      await setUserContext(setUser);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  const handleSubmit = () => {
    const newQuery = encodeURIComponent(query);
    router.push(`/searchResult/${newQuery}`);
  };
  if (loading) return null;

  return (
    <div
      className={`navbar fixed w-full z-50  transition-all duration-200 ease-in-out  ${
        isScrolled
          ? "bg-grey/50 backdrop-blur-lg border-b border-white/20 shadow-md"
          : "bg-gradient-to-b from-black border-none"
      }`}
    >
      {openSearch && (
        <div className="top-14 w-full absolute customizedMd:top-1 customizedMd:w-1/2 customizedMd:right-12  md:right-20 md:w-7/12 lg:w-8/12 lg:right-28  xl:right-60 customizedXl:right-64 customizedXl:w-1/4  bg-transparent p-2 right-1">
          <IoIosClose
            className="text-5xl text-gray-700 sm:display"
            onClick={closeSearchBar}
          />

          <input
            value={query}
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full border border-gray-300 p-2 mx-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg text-white"
          />
          <button
            className="btn btn-primary bg-red-800 border-none text-white "
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      )}
      <div className="flex w-full justify-between items-center px-4 lg:px-10">
        <div className="navbar-start flex items-center">
          <div className="dropdown text-white m-0 p-0 lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow navbar-center text-black"
            >
              <li>
                <Link
                  href="/"
                  className="text-white focus:text-red-500 focus:ring-0  "
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  href="/series"
                  className="text-white focus:text-red-500 focus:ring-0  "
                >
                  Series
                </Link>
              </li>
              <li>
                <Link
                  href="/stream"
                  className="text-white focus:text-red-500 focus:ring-0 "
                >
                  Stream
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-white focus:text-red-500 focus:ring-0  "
                >
                  Pricing
                </Link>
              </li>

              <li className="">
                <Link
                  href="/contactUs"
                  className="text-white focus:text-red-500 focus:ring-0 "
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-row">
            <Link
              href="/"
              className="btn btn-ghost text-2xl sm:text-4xl text-red-700 font-extrabold"
            >
              Moviely
            </Link>
            <div className="navbar-center hidden custom:flex custom:flex-row ">
              <ul
                className={`menu menu-horizontal px-4 text-white text-lg ${
                  openSearch &&
                  "custom:hidden customizedXl:flex customizedXl:flex-row"
                }`}
              >
                <li>
                  <Link
                    href="/"
                    className="text-white focus:text-red-500 focus:ring-0 "
                  >
                    Movies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/series"
                    className="text-white focus:text-red-500 focus:ring-0  "
                  >
                    Series
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stream"
                    className="text-white focus:text-red-500 focus:ring-0  "
                  >
                    Stream
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-white focus:text-red-500 focus:ring-0   "
                  >
                    Pricing
                  </Link>
                </li>

                <li className="">
                  <Link
                    href="/contactUs"
                    className="text-white focus:text-red-500 focus:ring-0  "
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex space-x-2 absolute justify-end right-0 me-3  items-center">
              <div
                className={`indicator text-white  mt-3 md:mt-0 cursor-pointer ${
                  openSearch ? " customizedMd:hidden" : ""
                }`}
                onClick={() => setOpenSearch(!openSearch)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {!user ? (
                <Link href="/Auth/login">
                  <button className="btn btn-ghost border-none  text-white hidden md:block">
                    Login
                  </button>
                  <IoLogInOutline className="sm:block md:hidden text-3xl mt-3 sm:mt-3" />
                </Link>
              ) : (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="avatar placeholder">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-red-900">
                        <img
                          loading="lazy"
                          src="/images/Profile.jpg"
                          alt="profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <Link href="/dashboard" className="justify-between">
                        Profile
                      </Link>
                    </li>

                    <li>
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
