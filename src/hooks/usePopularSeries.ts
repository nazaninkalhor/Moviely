import fetchData from "./fetchData";

const popularSeries = async () => {
    const movies = await fetchData(
        "/tv/top_rated"
    );

    return movies;
}

export default popularSeries;