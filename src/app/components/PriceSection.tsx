import React from "react";
import { RiBaseStationLine } from "react-icons/ri";
import { MdLocalMovies } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
import Link from "next/link";
const PriceSection = () => {
  return (
    <div className=" w-full relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "url(https://cdn.luxe.digital/media/20231130000834/best-james-bond-cars-luxe-digital.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-40"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center text-white w-full">
        <Link
          href="/"
          className="text-4xl sm:text-6xl font-extrabold text-red-700"
        >
          Moviely
        </Link>
        <ul className=" mx-4 max-w-md text-sm md:text-lg font-semibold flex gap-x-10 mt-10 md:max-w-lg  md:items-center items-start">
          <li className="flex  md:items-center items-start ">
            <Ri24HoursFill className=" md:me-1 font-bold text-xl " /> 24/7
            Support
          </li>
          <li className="flex  md:items-center items-start">
            <MdLocalMovies className="md:me-1 font-bold text-xl" /> +3000 Titles
          </li>
          <li className="flex  md:items-center items-start">
            <RiBaseStationLine className="  font-bold text-xl md:me-1" /> Online
            Watch
          </li>
        </ul>
        <Link href="/pricing">
          <button className="bg-red-800 btn border-none text-white mt-10 md:text-xl">
            See Subscriptions
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PriceSection;
