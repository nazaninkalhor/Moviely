import axios from "axios";
const api_base_url = process.env.VITE_TMDB_API_BASE_URL;
const tmdb_api_token = process.env.VITE_TMDB_ACCESS_TOKEN;

export default axios.create({
    baseURL: api_base_url,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${tmdb_api_token}`
    },
})
