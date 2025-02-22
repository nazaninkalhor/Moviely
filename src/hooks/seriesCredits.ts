import tmdbApiClient from "../app/service/tmdb-api-client";

const seriesCredits = async (id: string) => {
    try {
        const response = await tmdbApiClient.get(`/tv/${id}/credits`);
        return response.data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        throw error;
    }
};

export default seriesCredits;
