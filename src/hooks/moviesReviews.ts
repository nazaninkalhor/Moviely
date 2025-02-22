import tmdbApiClient from "../app/service/tmdb-api-client";

const moviesReviews = async (id: string) => {
    try {
        const response = await tmdbApiClient.get(`/movie/${id}/reviews`);
        return response.data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        throw error;
    }
};

export default moviesReviews;
