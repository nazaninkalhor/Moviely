import Link from "next/link";
import React from "react";
import popularMovie from "@/src/hooks/usePopular";
import { MdStarRate } from "react-icons/md";
const Hero = async () => {
  const topMovies = (await popularMovie()).results.slice(0, 5);
  function truncateToFirstDecimal(number) {
    return Math.trunc(number * 10) / 10;
  }
  return (
    <>
      <div className="hero min-h-screen w-screen ">
        <div className="carousel min-w-full">
          {topMovies.map((movie, index) => (
            <div
              key={index}
              id={`slide${index}`}
              className="carousel-item relative w-full"
            >
              {/* Background Image */}
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-40"></div>

              {/* Navigation Arrows */}
              <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 transform justify-between z-10 hidden  sm:flex">
                <a
                  href={`#slide${
                    (index - 1 + topMovies.length) % topMovies.length
                  }`}
                  className="btn btn-circle"
                >
                  ❮
                </a>
                <a
                  href={`#slide${(index + 1) % topMovies.length}`}
                  className="btn btn-circle"
                >
                  ❯
                </a>
              </div>

              {/* Text Content */}
              <div className="absolute bottom-10 left-10 z-10 text-white">
                <div className="w-full ps-1 md:px-16 ">
                  <div className="flex flex-row items-center">
                    <h1 className="mb-5 text-3xl md:text-start md:text-5xl font-bold text-white">
                      {movie.original_title}
                    </h1>

                    <span className="badge badge-lg bg-orange-600 border-0 py-2  ms-4 text-white px-2 rounded-lg flex flex-row items-center text-lg">
                      <MdStarRate className="me-1 text-xl" />
                      {truncateToFirstDecimal(movie.vote_average)}
                    </span>
                  </div>
                  <p className="mb-5 text-white max-w-md font-semibold text-md hidden md:block">
                    {movie.overview}
                  </p>
                  <button className="btn bg-red-800 border-none text-white">
                    <Link href="/">Watch Online</Link>
                  </button>

                  <button className="btn btn-outline border-white border-2 text-white ms-3 ">
                    <Link href="/">More</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;

{
}
