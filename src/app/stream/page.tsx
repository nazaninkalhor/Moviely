import React from "react";
import PopularMovies from "../components/PopularMovies";
import PopularSeries from "../components/NewSeries";
import StreamVideo from "../components/StreamVideo";
const page = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-[80vh] md:h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90 brightness-75"
          style={{
            backgroundImage: `url("/images/image.png")`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>

        <div className="relative z-10  flex md:items-start md:mt-48 justify-center h-full px-4 items-center">
          <h1 className="text-white font-bold text-3xl md:text-4xl text-center max-w-2xl">
            Stream
          </h1>
        </div>
      </div>
      <p className="mb-2 font-semibold text-xl text-center mt-5">
        Watch your favorite movies or series on Moviely now!
      </p>
      <StreamVideo />
      <div className="mt-12 px-4 space-y-10">
        <PopularMovies />
        <PopularSeries />
      </div>
    </div>
  );
};

export default page;
