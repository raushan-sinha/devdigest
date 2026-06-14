import { trendingNewsData } from "@/data/trendingNews";
import Link from "next/link";

export default function TrendingNews() {
    return (
        <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-b from-[#cbf4df] to-[#f0fcf5]">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Trending News
                        </h2>

                        <p className="mt-2 text-slate-600">
                            Stay updated with the latest stories shaping technology, AI, and developer careers.
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {trendingNewsData.map((news) => (
                        <article key={news.id} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                {news.category}
                            </span>

                            <h3 className="mt-4 text-xl font-semibold leading-snug text-slate-900">
                                {news.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                {news.description}
                            </p>

                            <Link
                                href="/tech-news"
                                className="mt-6 inline-flex items-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800"
                            >
                                Show News
                            </Link>
                        </article>
                    ))}
                </div>
                <div className="mt-10 flex justify-center">
                    <Link
                        href="/tech-news"
                        className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        Explore More News
                    </Link>
                </div>
            </div>
        </section>
    )
}