'use client'
import { getTechNews } from "@/services/techNews.service";
import { TechNewsProps } from "@/types/techNews.types"
import Link from "next/link";
import { useEffect, useState } from "react"

export default function TechNews() {
    const [techNewsData, setTechNewsData] = useState<TechNewsProps[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const loadTechNews = async () => {
            try {
                setLoading(true);
                setError('');
                const data = await getTechNews();
                setTechNewsData(data);
            } catch (error) {
                console.error(error);
                setError("Something went wrong! Check your Network connection.");
            } finally {
                setLoading(false);
            }
        }

        loadTechNews();
    }, []);


    return (
        <>
            {error && techNewsData.length === 0 && (
                <p className="text-red-500 p-10 font-mono font-bold text-xl">{error}</p>
            )}

            {loading ? (
                <p className="text-center p-10 font-mono font-bold text-xl min-h-screen">Fetching Tech News....</p>
            ) : (
                <section
                    aria-label="Latest Technology News"
                    className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 xl:grid-cols-3"
                >
                    {techNewsData.map((item) => (
                        <article
                            key={item.id}
                            className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            {/* Category */}
                            <span className="inline-flex w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                Technology
                            </span>

                            {/* Title */}
                            <h2 className="mt-4 line-clamp-2 text-2xl font-bold leading-tight tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
                                {item.title}
                            </h2>

                            {/* Description */}
                            <p className="mt-4 line-clamp-3 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                                {item.description}
                            </p>

                            {/* Content */}
                            <div className="mt-4 flex-1 rounded-xl bg-slate-50 p-4">
                                <p className="line-clamp-4 text-sm leading-7 text-slate-700">
                                    {item.content}
                                </p>
                            </div>

                            {/* Footer */}
                            <footer className="mt-8">
                                <Link
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg"
                                >
                                    Read Full Article
                                </Link>
                            </footer>
                        </article>
                    ))}
                </section>
            )}
        </>
    )
}