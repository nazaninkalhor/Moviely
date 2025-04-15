import React from "react";
import { MdStarRate } from "react-icons/md";
import Link from "next/link";

export interface Banner {
  id: number;
  BackgroundImage: string;
  title: string;
  description: string;
  popularity: number;
  link: string;
}
function truncateToFirstDecimal(number) {
  return Math.trunc(number * 10) / 10;
}

const Hero = (banner: Banner) => {
  banner = banner.banner;
  return (
    <>
      <div className="hero min-h-screen w-screen ">
        <div className="carousel-item relative w-full">
          <img
            loading="lazy"
            className="w-screen min-h-screen"
            src={banner.BackgroundImage}
            alt="Banner"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-40"></div>

          {/* Text Content */}
          <div className="absolute bottom-10 left-10 z-10 text-white">
            <div className="w-full ps-1 md:px-16 ">
              <div className="flex flex-row items-center">
                <h1 className="mb-5 text-3xl md:text-start md:text-5xl font-bold text-white sm:max-w-sm md:max-w-full">
                  {banner.title}
                </h1>

                <div className="badge hidden   bg-yellow-600 border-0 py-4 ms-4 text-white px-2 rounded-lg md:flex flex-row items-center text-2xl ">
                  <MdStarRate className="me-1 text-xl" />
                  {truncateToFirstDecimal(banner.popularity)}
                </div>
              </div>
              <p className="mb-5 text-white md:max-w-md font-semibold text-md hidden sm:block sm:max-w-sm">
                {banner.description}
              </p>
              <button className="btn bg-red-800 border-none text-white">
                <Link href="/">Stream</Link>
              </button>

              <button className="btn btn-outline border-white border-2 text-white ms-3 ">
                <Link href={banner.link}>More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

{
}
