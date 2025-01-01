import React from "react";
import Card from "./Card";
import AutoCarousel from "./AutoCarousel";
import { AiOutlineStar } from "react-icons/ai";
import suggestedMovie from "@/src/hooks/useSuggest";
const Trends = async () => {
  const topMovies = (await suggestedMovie()).results.slice(0, 12);

  const topMoviesCardItems = topMovies.map((o) => ({
    BackgroundImage: "https://image.tmdb.org/t/p/w500" + o.poster_path,
    title: o.name,
    description: o.overview,
    popularity: o.vote_average,

    button: [],
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
      <div className=" md:ms-4">
        <AutoCarousel items={topMoviesCards} />;
      </div>
    </>
  );
};

export default Trends;
