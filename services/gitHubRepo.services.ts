import { GitHubRepoProps } from "@/types/githubRepos.types";
import axios from "axios";

const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_GITHUB_REPO_URL
});

export const getGitHubRepoData = async (): Promise<GitHubRepoProps[]> => {
    const response = await API.get<GitHubRepoProps[]>('');
    return response.data;
}