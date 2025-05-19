import Card from "../../components/Card";
import searchResult from "@/src/hooks/searchResult";
const SearchResultPage = async ({
  params: { queryName },
}: {
  params: { queryName: string };
}) => {
  const result = await searchResult(queryName);

  const newResult = result.results;
  
  const searchedItem = newResult.map((o) => ({
    id: o.id,
    overview: o.overview || " ",
    BackgroundImage: `https://image.tmdb.org/t/p/w500${
      o.poster_path || o.profile_path
    }`,
    title: o.title || o.name,
    popularity: o.vote_average,
    type: o.media_type || "movies",
    link:
      o.media_type === "tv"
        ? `/detail/series/${o.id}`
        : o.media_type === "person"
        ? `/detail/people/${o.id}`
        : `/detail/movies/${o.id}`,
  }));
  const searchedQueryName = decodeURIComponent(queryName);

  return (
    <>
      <div className="mt-20">
        <h1 className="text-bold ms-2 text-xl text-center">
          Search Result for: {searchedQueryName}
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 md:grid-cols-3  lg:grid-cols-6  mt-3 px-3">
          {searchedItem.map((item, index) => (
            <li key={index} className=" my-1 ">
              <Card cardItem={item} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchResultPage;
