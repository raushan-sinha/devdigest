"use client";
import { getGitHubRepoData } from "@/services/gitHubRepo.services";
import { GitHubRepoProps } from "@/types/githubRepos.types";
import { useEffect, useState } from "react";

export default function GitHubRepo() {
    const [gitHubRepoData, setGitHubRepoData] = useState<GitHubRepoProps[]>([]);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const loadGitHubRepoData = async () => {
        try {
            setLoading(true);
            setError("");
            const response = await getGitHubRepoData();
            setGitHubRepoData(response);
        } catch (error) {
            console.error("Error", error);
            setError("Something went wrong while fetching GitHub repository data. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadGitHubRepoData();
    }, []);

    return (
        <>
            {error && gitHubRepoData.length === 0 && (
                <p className="text-red-500 p-10 font-mono font-bold text-xl">{error}</p>
            )}

            <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    {/* Section Header */}
                    <div className="mb-12 text-center">
                        <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                            🚀 Open Source Projects
                        </span>

                        <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
                            Explore My{" "}
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                GitHub Repositories
                            </span>
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                            Discover projects, experiments, and developer tools built with
                            modern technologies and best coding practices.
                        </p>
                    </div>

                    {loading ? (
                        <p className="text-center p-10 font-mono font-bold text-xl text-white min-h-screen">Fetching GitHub Repos....</p>
                    ) : (
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {/* Card */}
                            {gitHubRepoData.map((item) => (
                                <article
                                    key={item.id}
                                    className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]">
                                    {/* Icon */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl">
                                            💻
                                        </div>

                                        <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-300">
                                            Open Source
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-6 text-2xl font-bold text-white group-hover:text-cyan-300">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-3 text-sm leading-7 text-slate-300">
                                        {item.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="mt-6">
                                        <h4 className="mb-3 text-sm font-semibold text-white">
                                            Tech Stack
                                        </h4>

                                        <div className="flex flex-wrap gap-2">
                                            {item.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                        <a
                                            href={item.githubUrl}
                                            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10">
                                            GitHub ↗
                                        </a>

                                        <a
                                            href={item.codeUrl}
                                            className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:scale-[1.02]">
                                            View Code
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}

                </div>
            </section >
        </>
    );
}
