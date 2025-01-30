import PopularMovies from "./components/PopularMovies";
import PopularSeries from "./components/NewSeries";
import Trends from "./components/Trends";
import News from "./components/News";
import PriceSection from "./components/PriceSection";
import PopularMovieBanners from "./components/PopularMovieBanners";

export default function Home() {
  return (
    <div className="min-w-screen ">
      <div className="flex-col flex overflow-hidden">
        <PopularMovieBanners />
      </div>

      <PopularMovies />
      <PopularSeries />
      <Trends />
      <PriceSection />
      <News />
    </div>
  );
}
