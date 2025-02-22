import tmdbApiClient from "../app/service/tmdb-api-client";

const useMovieDetail = async (id: string) => {
    //add tv series fetch data too to show the detail pages for new series 
    try {
        const response = await tmdbApiClient.get(`/movie/${id}?language=en-US`);
        return response.data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        throw error;
    }
};

export default useMovieDetail;
