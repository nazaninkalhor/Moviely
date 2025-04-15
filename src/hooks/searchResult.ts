import tmdbApiClient from "../app/service/tmdb-api-client";


const searchResult = async (query: string) => {

    try {
        const response = await tmdbApiClient.get(`/search/multi?query=${query}&include_adult=false&language=en-US&page=1`);
        return response.data;

    } catch (error) {
        console.error("Error fetching movie details:", error);
        throw error;
    }
};

export default searchResult;
