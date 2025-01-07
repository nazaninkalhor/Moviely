import fetchData from "./fetchData";

const newSeries = async () => {
    const movies = await fetchData(
        "/tv/top_rated"
    );

    return movies;
}

export default newSeries;