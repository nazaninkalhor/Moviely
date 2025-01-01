import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-grey/50 backdrop-blur-lg border-b border-white/20 fixed w-full z-50 ">
      <div className="flex w-full justify-between items-center px-4 lg:px-10">
        {/* Navbar Start */}
        <div className="navbar-start flex items-center">
          {/* Mobile Dropdown */}
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
                <a>Movies</a>
              </li>
              <li>
                <a>Series</a>
              </li>
              <li>
                <a>Online Stream</a>
              </li>
              <li>
                <a>News</a>
              </li>
              <li>
                <a>Categories</a>
                <ul className="p-2">
                  <li>
                    <a>Drama</a>
                  </li>
                  <li>
                    <a>Action</a>
                  </li>
                  <li>
                    <a>Fantasy</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Brand Logo */}
          <div className="flex flex-row">
            <Link
              href="/"
              className="btn btn-ghost text-2xl sm:text-4xl text-red-700 font-extrabold"
            >
              Moviely
            </Link>
            <div className="navbar-center hidden custom:flex custom:flex-row ">
              <ul className="menu menu-horizontal px-4 text-white text-lg">
                <li>
                  <a>Movies</a>
                </li>
                <li>
                  <a>Series</a>
                </li>
                <li>
                  <a>Online Stream</a>
                </li>
                <li>
                  <a>News</a>
                </li>
                <li>
                  <details>
                    <summary>Categories</summary>
                    <ul className="p-2 bg-slate-700">
                      <h4 className="font-bold text-lg">Genres</h4>
                      <li>
                        <a>Drama</a>
                      </li>
                      <li>
                        <a>Action</a>
                      </li>
                      <li>
                        <a>Fantasy</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Navbar End */}
            <div className="flex space-x-4 absolute justify-end right-0 me-3 custom:mt-2 items-center">
              {/* Search Icon */}
              <div className="indicator text-white hidden md:block">
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

              {/* Notification Button */}
              <button className="btn btn-ghost btn-circle hidden md:block">
                <div className="indicator text-white">
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
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="badge badge-xs badge-error indicator-item"></span>
                </div>
              </button>
              <button className="btn btn-ghost hidden md:block bg-white">
                Pricing
              </button>

              {/* Profile Dropdown */}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="avatar placeholder">
                    <div className="text-neutral-content w-full p-3 rounded-full bg-red-900">
                      <span>SY</span>
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navbar Center */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
