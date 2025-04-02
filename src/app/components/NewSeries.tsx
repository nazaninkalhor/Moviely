import React from "react";
import Card from "./Card";
import AutoCarousel from "./AutoCarousel";
import newSeries from "@/src/hooks/useNewSeries";
import { AiOutlineFolder } from "react-icons/ai";
const PopularSeries = async () => {
  const topMovies = (await newSeries()).results.slice(0, 18);

  const topMoviesCardItems = topMovies.map((o) => ({
    id: o.id,
    BackgroundImage: "https://image.tmdb.org/t/p/w500" + o.poster_path,
    title: o.name,
    popularity: o.vote_average,
    overview: o.overview,
    link: `/detail/series/${o.id}`,
  }));

  const topMoviesCards = topMoviesCardItems.map((cardItem, index) => (
    <Card key={index} cardItem={cardItem} />
  ));

  return (
    <>
      <div className="flex flex-row items-center ms-5 mb-8 mt-16">
        <AiOutlineFolder className="text-3xl text-white" />
        <h2 className="text-white font-semibold  text-3xl ms-2 ">New Series</h2>
      </div>
      <div className=" md:ms-4">
        <AutoCarousel items={topMoviesCards} />
      </div>
    </>
  );
};

export default PopularSeries;
