import fetchData from "./fetchData";

const fetchTrendingMovies = async () => {
    const movies = await fetchData(
        "/trending/movie/day?language=en-US"
    );

    return movies;
}

export default fetchTrendingMovies;