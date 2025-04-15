import OnTheAirSeries from "@/src/hooks/onTheAirSeries";
import Card from "../components/Card";
import PaginatedSearch from "../components/PaginatedSeries";

const Page = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const currentPage = parseInt(searchParams.page || "1");
  const playingSeries = await OnTheAirSeries(currentPage);
  const newPlayingSeries = playingSeries.results;

  const airSeries = newPlayingSeries.map((o) => ({
    id: o.id,
    overview: o.overview || " ",
    BackgroundImage: `https://image.tmdb.org/t/p/w500${o.poster_path}`,
    title: o.title || o.name,
    popularity: o.vote_average,
    type: o.media_type || "movies",
    link: `/detail/series/${o.id}`,
  }));

  return (
    <div className="mt-20">
      <h1 className="font-bold text-5xl text-center mb-10">Series</h1>
      <div className="grid grid-cols-1 mx-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {airSeries.map((series, id) => (
          <Card key={id} cardItem={series} />
        ))}
      </div>

      <PaginatedSearch
        currentPage={currentPage}
        totalPages={playingSeries.total_pages}
      />
    </div>
  );
};

export default Page;
