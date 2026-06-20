'use client'

import { TechNewsProps } from "@/types/techNews.types"
import Link from "next/link";
import { useEffect, useState } from "react"

export default function TechNews() {
    const [techNewsData, setTechNewsData] = useState<TechNewsProps[]>([]);

    useEffect(() => {
        const fetchTechNewsResponse = async () => {
            try {
                const response = await fetch('http://localhost:5000/tech-news/api');
                if (!response.ok) throw new Error("Failed to fetch API");

                const responseData = await response.json();
                setTechNewsData(responseData);
            } catch (error) {
                console.error('Error', error);
            }
        }

        fetchTechNewsResponse();
    }, []);

    return (
        <section aria-label="Latest Technology News" className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 xl:grid-cols-3">
            {techNewsData.map((item) => (
                <article key={item.id} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
                    <header>
                        <h2 className="mb-3 text-xl font-bold text-zinc-900">
                            {item.title}
                        </h2>

                        <p className="mb-4 text-sm text-zinc-500">
                            {item.description}
                        </p>
                    </header>

                    <p className="mb-6 text-sm leading-7 text-zinc-600">
                        {item.content}
                    </p>

                    <footer>
                        <Link
                            href={item.url}
                            target="_blank"
                             rel="noopener noreferrer"
                            className="inline-flex items-center font-medium text-blue-600 hover:underline"
                        >
                            Read Full Article →
                        </Link>
                    </footer>
                </article>
            ))}

            {/* <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
                <header>
                    <h2 className="mb-3 text-xl font-bold text-zinc-900">
                        AI Revolution in Healthcare
                    </h2>

                    <p className="mb-4 text-sm text-zinc-500">
                        Artificial Intelligence is transforming patient care worldwide.
                    </p>
                </header>

                <p className="mb-6 text-sm leading-7 text-zinc-600">
                    Advanced machine learning models are helping healthcare
                    professionals diagnose diseases faster and improve treatment
                    outcomes.
                </p>

                <footer>
                    <a
                        href="#"
                        className="inline-flex items-center font-medium text-blue-600 hover:underline"
                    >
                        Read Full Article →
                    </a>
                </footer>
            </article> */}
        </section>
    )
}