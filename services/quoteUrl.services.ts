import { QuoteData } from "@/types/quoteCardProps.types";
import axios from "axios";

const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_PROGRAMMING_QUOTE_URL
});

export const getQuoteUrlData = async (): Promise<QuoteData[]> => {
    const response = await API.get<QuoteData[]>('');
    return response.data
}