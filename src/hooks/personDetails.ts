import tmdbApiClient from "../app/service/tmdb-api-client";

const usePersonDetail = async (id: string) => {
    try {
        const response = await tmdbApiClient.get(`/person/${id}?language=en-US`);
        return response.data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        throw error;
    }
};

export default usePersonDetail;
