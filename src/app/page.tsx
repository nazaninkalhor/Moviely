import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PopularMovies from "./components/PopularMovies";
import PopularSeries from "./components/NewSeries";
import Trends from "./components/Trends";
import News from "./components/News";
import Footer from "./components/Footer";
import PriceSection from "./components/PriceSection";

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
      <PriceSection />
      <News />
      <Footer />
    </div>
  );
}
