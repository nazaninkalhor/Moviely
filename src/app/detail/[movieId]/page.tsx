import Link from "next/link";
import detailPages from "../../../hooks/detailPages";
import { MdStarRate } from "react-icons/md";

function truncateToFirstDecimal(number) {
  return Math.trunc(number * 10) / 10;
}

const MovieDetailPage = async ({
  params: { movieId },
}: {
  params: { movieId: string };
}) => {
  if (!movieId) {
    return (
      <div className="text-white bg-red">
        <h1 className="text-white">This Movie Has not any Details!</h1>
      </div>
    );
  }

  try {
    const result = await detailPages(movieId);
    if (!result) {
      return (
        <div className="text-white bg-red">
          <h1 className="text-white">This Movie Has not any Details!</h1>
        </div>
      );
    }
    return (
      <div className="relative h-screen w-full overflow-hidden">
        <div
          className="relative w-screen h-screen"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/w1280${result.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-40"></div>

        <div className="absolute bottom-10 left-10 z-10 text-white">
          <div className="w-full ps-1 md:px-16">
            <div className="flex flex-row items-center">
              <h1 className="mb-5 text-3xl md:text-start md:text-5xl font-bold text-white">
                {result.title}
              </h1>

              <div className="badge bg-yellow-600 border-0 py-4 ms-4 text-white px-2 rounded-lg flex flex-row items-center text-2xl">
                <MdStarRate className="me-1 text-xl" />
                {truncateToFirstDecimal(result.vote_average)}
              </div>
            </div>
            <p className="mb-2 text-gray-200 max-w-md font-medium text-md hidden md:block">
              Release Date: {result.release_date}
            </p>
            <p className="mb-5 text-white max-w-md font-semibold text-md hidden md:block">
              {result.overview}
            </p>
            <button className="btn bg-red-800 border-none text-white">
              <Link href="/">Watch Online</Link>
            </button>

            <button className="btn btn-outline border-white border-2 text-white ms-3">
              <Link href="/">More</Link>
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return (
      <div className="text-white bg-red">
        <h1 className="text-white">Error loading movie details</h1>
      </div>
    );
  }
};

export default MovieDetailPage;
