import fetchData from "./fetchData";

const suggestedMovie = async () => {
    const movies = await fetchData(
        "/trending/all/day?language=en-US"
    );

    return movies;
}

export default suggestedMovie;