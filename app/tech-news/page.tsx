'use client'

import { TechNewsProps } from "@/types/techNews.types"
import Link from "next/link";
import { useEffect, useState } from "react"
import { CgDanger } from "react-icons/cg";

export default function TechNews() {
    const [techNewsData, setTechNewsData] = useState<TechNewsProps[]>([]);
    // const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchTechNewsResponse = async () => {
            try {
                const apiResponse = await fetch('http://localhost:5000/tech-news/api');

                const responseData = await apiResponse.json();

                if(!apiResponse.ok) throw new Error(responseData.message);
                setTechNewsData(responseData);
            } catch (error) {
                console.error(error);
            }
        }

        fetchTechNewsResponse();
    }, []);

    return (
        <>
            {/* {error && (
                <p>{error}</p>
            )} */}

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
            </section >
        </>
    )
}