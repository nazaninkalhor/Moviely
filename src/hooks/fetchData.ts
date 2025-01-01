import tmdbApiClient from '../app/service/tmdb-api-client';

const fetchData = async (endpoint: string) => {
    try {
        const response = await tmdbApiClient.get(endpoint);
        return response.data
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default fetchData;