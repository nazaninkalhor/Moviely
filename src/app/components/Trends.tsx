import React from "react";
import Card from "./Card";
import AutoCarousel from "./AutoCarousel";
import { AiOutlineStar } from "react-icons/ai";
import trends from "@/src/hooks/useTrend";
const Trends = async () => {
  const topMovies = (await trends()).results
    .filter((o) => o.overview != "")
    .slice(0, 18);

  const topMoviesCardItems = topMovies.map((o) => ({
    id: o.id,
    BackgroundImage: "https://image.tmdb.org/t/p/w500" + o.poster_path,
    title: o.name != undefined ? o.name : o.title,
    description: o.overview,
    popularity: o.vote_average,
    overview: o.overview,
    link: `/detail/movies/${o.id}`,
  }));

  const topMoviesCards = topMoviesCardItems.map((cardItem, index) => (
    <Card key={index} cardItem={cardItem} />
  ));

  return (
    <>
      <div className="flex flex-row items-center ms-5 mb-8 mt-16">
        <AiOutlineStar className="text-3xl text-white" />
        <h2 className="text-white font-semibold  text-3xl ms-2">Trending</h2>
      </div>
      <div className=" md:ms-4 mb-10">
        <AutoCarousel items={topMoviesCards} />
      </div>
    </>
  );
};

export default Trends;
