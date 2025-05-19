import tmdbApiClient from "../app/service/tmdb-api-client";

const seriesDetails = async (id: string) => {
    try {
        const response = await tmdbApiClient.get(`/tv/${id}`);

        return response.data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        throw error;
    }
};

export default seriesDetails;
