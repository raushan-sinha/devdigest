import axios from "axios"

const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_TECH_NEWS_BACKEND_URL
});

export const getTechNews = async () => {
    const response = await API.get('');
    return response.data;
}