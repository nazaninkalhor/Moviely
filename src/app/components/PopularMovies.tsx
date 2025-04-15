import React from "react";
import Card from "./Card";
import AutoCarousel from "./AutoCarousel";
import popularMovie from "@/src/hooks/usePopular";
import { BiCameraMovie } from "react-icons/bi";
const PopularMovies = async () => {
  const topMovies = (await popularMovie()).results.slice(0, 18);

  const topMoviesCardItems = topMovies.map((o) => ({
    id: o.id,
    overview: o.overview,
    BackgroundImage: "https://image.tmdb.org/t/p/w500" + o.poster_path,
    title: o.title,
    popularity: o.vote_average,
    link: `/detail/movies/${o.id}`,
  }));
  const topMoviesCards = topMoviesCardItems.map((cardItem, index) => (
    <Card key={index} cardItem={cardItem} />
  ));

  return (
    <>
      <div className="flex flex-row items-center ms-5 mb-8 mt-10">
        <BiCameraMovie className="text-3xl text-white" />
        <h3 className="text-white font-semibold  text-3xl ms-2 ">
          Popular Movies
        </h3>
      </div>
      <div className=" md:ms-4">
        <AutoCarousel items={topMoviesCards} />
      </div>
    </>
  );
};

export default PopularMovies;
