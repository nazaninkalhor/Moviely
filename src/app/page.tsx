import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PopularMovies from "./components/PopularMovies";
import PopularSeries from "./components/PopularSeries";
import Trends from "./components/Trends";
// heros
// popularMovies
//

export default function Home() {
  return (
    <div className="min-w-screen ">
      <div className="z-20 relative">
        <Navbar />
      </div>

      <div className="flex-col flex overflow-hidden">
        <Hero />
      </div>
      <PopularMovies />
      <PopularSeries />

      <Trends />
    </div>
  );
}
