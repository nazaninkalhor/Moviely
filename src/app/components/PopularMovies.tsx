import React from "react";
import Card from "./Card";
import AutoCarousel from "./AutoCarousel";
import popularMovie from "@/src/hooks/usePopular";
import { AiOutlineFire } from "react-icons/ai";
const PopularMovies = async () => {
  const topMovies = (await popularMovie()).results.slice(0, 12);

  const topMoviesCardItems = topMovies.map((o) => ({
    BackgroundImage: "https://image.tmdb.org/t/p/w500" + o.poster_path,
    title: o.original_title,
    description: o.overview,
    popularity: o.vote_average,
    button: [],
  }));

  const topMoviesCards = topMoviesCardItems.map((cardItem, index) => (
    <Card key={index} cardItem={cardItem} />
  ));

  return (
    <>
      <div className="flex flex-row items-center ms-5 mb-8 mt-10">
        <AiOutlineFire className="text-3xl text-white" />
        <h2 className="text-white font-semibold  text-3xl ms-2 ">
          Popular Movies
        </h2>
      </div>
      <div className=" md:ms-4">
        <AutoCarousel items={topMoviesCards} />;
      </div>
    </>
  );
};

export default PopularMovies;
