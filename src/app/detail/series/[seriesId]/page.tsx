import seriesCredits from "@/src/hooks/seriesCredits";
import seriesDetails from "../../../../hooks/seriesDetails";
import { MdStarRate } from "react-icons/md";
import seriesReviews from "@/src/hooks/seriesReviews";
import Image from "next/image";
import CastList from "@/src/app/components/CastList";
import Favorite from "@/src/app/components/Favorite";
import Comments from "@/src/app/components/Comments";
import StreamVideo from "../../../components/StreamVideo";

function truncateToFirstDecimal(number) {
  return Math.trunc(number * 10) / 10;
}

const SeriesDetailPage = async ({
  params: { seriesId },
}: {
  params: { seriesId: string };
}) => {
  if (!seriesId) {
    return (
      <div className="text-white bg-red">
        <h1 className="text-white">This series Has not any Details!</h1>
      </div>
    );
  }

  try {
    const result = await seriesDetails(seriesId);
    const credits = await seriesCredits(seriesId);
    const cast = credits.cast;
    const reviews = await seriesReviews(seriesId);
    const reviewResult = reviews.results;
    const firstEpisodeAir = result.first_air_date.split("-");
    const firstEpisodeYear = firstEpisodeAir[0];
    const lastEpisodeAir = result.last_air_date.split("-");
    const lastEpisodeYear = lastEpisodeAir[0];
    if (!result) {
      return (
        <div className="text-white bg-red">
          <h1 className="text-white">This series Has not any Details!</h1>
        </div>
      );
    }
    const genreNames = result.genres.map((genre) => genre.name + " • ");
    return (
      <>
        <div className=" h-screen w-full overflow-hidden ">
          {result.backdrop_path != null && (
            <div
              className="relative w-screen h-screen xs:pt-10"
              style={{
                backgroundImage: result.backdrop_path
                  ? `url("https://image.tmdb.org/t/p/w780${result.backdrop_path}")`
                  : "#000",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent bg-opacity-40"></div>

          <div className="absolute inset-0 flex items-end pb-10">
            <div className="w-full text-white pt-20 px-10">
              <div className="mt-40">
                <ul className="flex flex-row  gap-4">
                  <li className="hidden md:flex">
                    <figure>
                      {result.poster_path != null ? (
                        <Image
                          className=" card border-neutral border-2 bg-base-100 max-w-full shadow-xl group overflow-hidden w-full h-full"
                          src={
                            result.poster_path
                              ? `https://image.tmdb.org/t/p/w1280${result.poster_path}`
                              : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
                          }
                          width={200}
                          height={100}
                          alt="movie Image"
                        />
                      ) : null}
                    </figure>
                  </li>
                  <li>
                    <div className=" max-w-md lg:max-w-3xl">
                      <div className="flex flex-row">
                        <h1 className="mb-2 text-3xl md:text-3xl font-bold text-white md:flex md:flex-row gap-2">
                          {result.name}
                        </h1>
                        <div className="font-medium text-md flex items-center ml-2">
                          {firstEpisodeYear == lastEpisodeYear ? (
                            <span>({firstEpisodeYear})</span>
                          ) : (
                            <span className="flex items-center gap-1">
                              ({firstEpisodeYear} - {lastEpisodeYear})
                              <Favorite itemId={seriesId} typeId="series" />
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="xs:flex badge bg-yellow-600 border-0 py-4  text-white px-2 rounded-lg mb-2 flex-row items-center text-2xl hidden">
                        <MdStarRate className="me-1 text-xl" />
                        {truncateToFirstDecimal(result.vote_average)}
                      </div>
                      <p className="mb-2 text-white font-semibold text-md">
                        {genreNames}
                      </p>

                      <p className="mb-2 text-gray-200 max-w-md font-medium text-md">
                        {result.status} {result.release_date}
                      </p>
                      <p className="mb-5 text-white  font-semibold text-md">
                        {result.overview}
                      </p>
                      <p className="mb-2 text-white max-w-md font-semibold text-md">
                        {result.number_of_seasons} Seasons -{" "}
                        {result.number_of_episodes} Episodes
                      </p>
                      <p className="mb-2 text-white max-w-md font-semibold text-md">
                        Country: {result.origin_country}
                      </p>
                    </div>
                    <p className="md:flex text-gray-800 w-full font-semibold text-3xl text-center hidden lg:pt-10 ">
                      {result.tagline}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-white font-semibold text-4xl mb-4 mt-10 ms-5">
            Stream
          </h2>
          <div className="ms-10">
            <StreamVideo />
          </div>
        </div>
        <div>
          <div className="mt-10">
            <h2 className="text-white font-semibold text-4xl mb-4 ms-5">
              Cast
            </h2>
            <div className="grid grid-cols-1 mx-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              <CastList cast={cast} />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-white font-semibold text-4xl mb-4 ms-5">
            Reviews
          </h2>

          <div className="mt-3">
            <Comments
              postId={seriesId}
              typeId={"series"}
              tmdbReviews={reviewResult}
            />
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return (
      <div className="text-white bg-red">
        <h1 className="text-white">Error loading series details</h1>
      </div>
    );
  }
};

export default SeriesDetailPage;
