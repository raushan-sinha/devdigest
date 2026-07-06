'use client';
import { getTechNews } from "@/services/techNews.service";
import { TrendingTechNewsProps } from "@/types/trendingNews.types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TrendingNews() {
    const [trendingTechNews, setTrendingTechNews] = useState<TrendingTechNewsProps[]>([]);

    //todo: Trending Tech News logic for showing only 3 news -
    const loadTrendingTechNews = async () => {
        try {
            const techNewsData = await getTechNews();
            setTrendingTechNews(techNewsData);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadTrendingTechNews();
    }, []);


    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-4 py-20 sm:px-6 lg:px-8">
            <div className="absolute -top-32 left-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">

                <div className="mb-14 text-center">

                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                        🔥 Trending Right Now
                    </span>

                    <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
                        Latest
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            {" "}Technology News
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                        Stay informed with the latest breakthroughs in AI, software engineering,
                        cybersecurity, cloud computing, startups, and developer tools curated
                        from trusted technology sources.
                    </p>

                </div>

                <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

                    {trendingTechNews.slice(0, 3).map((news) => (

                        <article
                            key={news.id}
                            className="group flex flex-col rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/30 hover:shadow-[0_25px_80px_rgba(34,211,238,0.15)]"
                        >

                            <div className="flex items-center justify-between">

                                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
                                    Tech News
                                </span>

                                <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

                            </div>

                            <h3 className="mt-6 line-clamp-2 text-2xl font-bold leading-tight text-white transition-colors group-hover:text-cyan-300">
                                {news.title}
                            </h3>

                            <p className="mt-5 line-clamp-4 flex-grow text-sm leading-7 text-slate-300">
                                {news.description}
                            </p>

                            <Link
                                href={news.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex w-fit items-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                Read Article →
                            </Link>

                        </article>

                    ))}

                </div>

                <div className="mt-16 flex justify-center">

                    <Link
                        href="/tech-news"
                        className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >
                        Explore All News →
                    </Link>

                </div>

            </div>
        </section>
    )
}