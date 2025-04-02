import fetchData from "./fetchData";

const trends = async () => {
    const movies = await fetchData(
        "/trending/movie/day?language=en-US"
    );

    return movies;
}

export default trends;