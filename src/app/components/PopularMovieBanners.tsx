import React from "react";
import Hero from "./Hero";
import HeroCarousel from "./HeroCarousel";
import popularMovie from "@/src/hooks/usePopular";

const PopularMovieBanners = async () => {
  const topMovies = (await popularMovie()).results.slice(0, 5);
  const topMoviesBannerItems = topMovies.map((o) => ({
    BackgroundImage: "https://image.tmdb.org/t/p/w1280" + o.backdrop_path,
    title: o.original_title,
    description: o.overview,
    popularity: o.vote_average,
    link: o.overview,
  }));

  const topMoviesBanner = topMoviesBannerItems.map((banner, index) => (
    <Hero key={index} banner={banner} />
  ));

  return <HeroCarousel items={topMoviesBanner} />;
};

export default PopularMovieBanners;
