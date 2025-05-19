"use client";
import React from "react";
import { RiBaseStationLine, Ri24HoursFill } from "react-icons/ri";
import { MdLocalMovies } from "react-icons/md";
import Link from "next/link";

const PriceSection = () => {
  return (
    <div className="relative w-full h-[500px]">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat z-0"
        style={{
          backgroundImage:
            "url('https://thechoice.escp.eu/wp-content/uploads/james-bond-daniel-craig-aston-martin-db5-01-1728x1080.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <Link
          href="/"
          className="text-4xl sm:text-6xl font-extrabold text-red-700"
        >
          Moviely
        </Link>

        <ul className="mt-8 mx-auto flex flex-col md:flex-row gap-4 md:gap-x-10 text-sm md:text-lg font-semibold items-center">
          <li className="flex items-center gap-2">
            <Ri24HoursFill className="text-xl" /> 24/7 Support
          </li>
          <li className="flex items-center gap-2">
            <MdLocalMovies className="text-xl" /> +3000 Titles
          </li>
          <li className="flex items-center gap-2">
            <RiBaseStationLine className="text-xl" /> Online Watch
          </li>
        </ul>

        <Link href="/pricing">
          <button className="mt-8 bg-red-800 text-white py-2 px-6 rounded-md text-lg hover:bg-red-700 transition">
            See Subscriptions
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PriceSection;
