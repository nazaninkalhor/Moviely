import React from "react";
import PopularMovies from "../components/PopularMovies";
import PopularSeries from "../components/NewSeries";

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
      <div className="relative w-full max-w-4xl mx-auto mt-10">
        <div className="absolute inset-0 blur-2xl rounded-2xl bg-gradient-to-br from-red-500/20 via-white/10 to-blue-500/20 z-0 scale-110"></div>

        <div className="relative z-10 overflow-hidden rounded-xl shadow-2xl border-4 shadow-white/55 border-white/10">
          <video
            preload="true"
            src="/videos/JohnWick.mp4"
            controls
            className="w-full h-full object-cover"
            poster="/images/john-wick-thumb.jpg"
          />
        </div>
      </div>

      <div className="mt-12 px-4 space-y-10">
        <PopularMovies />
        <PopularSeries />
      </div>
    </div>
  );
};

export default page;
