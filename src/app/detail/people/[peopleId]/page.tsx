import Image from "next/image";
import personDetails from "@/src/hooks/personDetails";
import combinedCredit from "../../../../hooks/combinedCredit";
import Card from "@/src/app/components/Card";

const PeopleDetailPage = async ({
  params: { peopleId },
}: {
  params: { peopleId: string };
}) => {
  if (!peopleId) {
    return (
      <div className="text-white bg-red">
        <h1 className="text-white">This person has no details!</h1>
      </div>
    );
  }

  try {
    const result = await personDetails(peopleId);
    const personCredits = await combinedCredit(peopleId);
    const newPersonCredits = personCredits.cast || [];

    if (!result) {
      return (
        <div className="text-white bg-red">
          <h1 className="text-white">This person has no details!</h1>
        </div>
      );
    }
    const backdrops = newPersonCredits
      .map((credit) => credit.backdrop_path)
      .filter((path) => path !== null)
      .slice(0, 3);

    while (backdrops.length < 3) {
      backdrops.push("https://via.placeholder.com/1280x720");
    }
    const credits = newPersonCredits.map((o) => ({
      id: o.id,
      overview: o.overview || " ",
      BackgroundImage: `https://image.tmdb.org/t/p/w500${o.poster_path}`,
      title: o.title || o.name,
      popularity: o.vote_average,
      type: o.media_type || "movies",
      link:
        o.media_type === "tv"
          ? `/detail/series/${o.id}`
          : `/detail/movies/${o.id}`,
    }));

    return (
      <>
        <div className="relative w-full h-screen flex">
          {backdrops.map((backdrop, index) => (
            <div
              key={index}
              className="relative w-1/3 h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280${backdrop})`,
                clipPath:
                  index === 0
                    ? "polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)"
                    : index === 1
                    ? "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)"
                    : "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            ></div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent bg-opacity-40"></div>

        <div className="absolute inset-0 flex items-end pb-10">
          <div className="flex flex-col md:flex-row items-start  gap-6 p-6">
            {result.profile_path && (
              <Image
                className="w-52 md:w-56 lg:w-64 h-auto object-cover rounded-lg border border-neutral shadow-lg "
                src={`https://image.tmdb.org/t/p/w1280${result.profile_path}`}
                width={200}
                height={100}
                alt="Profile Image"
              />
            )}
            <div className="flex-1 max-w-2xl">
              <h1 className="text-xl md:text-3xl font-bold text-white">
                {result.name}
              </h1>
              <p className="text-white font-semibold text-sm md:text-base">
                Career: {result.known_for_department}
              </p>
              <p className="text-gray-200 text-sm md:text-base">
                Birth: {result.birthday} - {result.place_of_birth}
              </p>
              <p className="text-white font-semibold text-sm md:text-base">
                Death: {result.deathday || "-"}
              </p>
              <p className="text-white text-sm md:text-base mt-2 line-clamp-4 md:line-clamp-6 overflow-hidden">
                {result.biography}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-white font-semibold text-4xl mb-10 ms-5 mt-10">
            Filmography
          </h2>
          <div className="grid grid-cols-1 mx-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {credits.map((credit, id) => (
              <Card key={id} cardItem={credit} />
            ))}
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching person details:", error);
    return (
      <div className="text-white bg-red">
        <h1 className="text-white">Error loading person details</h1>
      </div>
    );
  }
};

export default PeopleDetailPage;
