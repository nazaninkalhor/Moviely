import fetchData from "./fetchData";

const trends = async () => {
    const movies = await fetchData(
        "/trending/all/day?language=en-US"
    );

    return movies;
}

export default trends;