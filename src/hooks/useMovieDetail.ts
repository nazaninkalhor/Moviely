import { useState, useEffect } from 'react';
import tmdbApiClient from "../app/service/tmdb-api-client";

const useMovieDetail = (id: string) => {
    const [movieData, setMovieData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                setLoading(true);
                const response = await tmdbApiClient.get(`/movie/${id}?language=en-US`);
                setMovieData(response.data);
                setError(null);
            } catch (error) {
                console.error("Error fetching movie details:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchMovieDetails();
        }
    }, [id]);

    return { movieData, error, loading };
};

export default useMovieDetail;