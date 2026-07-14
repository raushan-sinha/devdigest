import { TechNewsProps } from "@/types/techNews.types";
import axios from "axios"

const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_TECH_NEWS_BACKEND_URL
});

export const getTechNews = async (): Promise<TechNewsProps[]> => {
    const response = await API.get<TechNewsProps[]>('');
    return response.data;
}