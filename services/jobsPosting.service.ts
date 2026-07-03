import { JobsDataProps } from "@/types/jobsPosting.types";
import axios from "axios";

const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_JOBS_POSTING_BACKEND_URL
});

export const getJobsPostingData = async (): Promise<JobsDataProps[]> => {
    const response = await API.get<JobsDataProps[]>('');
    return response.data;
}