import fetchData from "./fetchData";

const popularMovie = async () => {
    const movies = await fetchData(
        "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
    );

    return movies;
}

export default popularMovie;