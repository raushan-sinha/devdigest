'use client';
import { getJobsPostingData } from "@/services/jobsPosting.service";
import { JobsDataProps } from "@/types/jobsPosting.types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Jobs() {
    const [jobsData, setJobsData] = useState<JobsDataProps[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    // Fetch Jobs Posting API -
    const jobsFetching = async () => {
        try {
            setLoading(true);
            setError('');
            const data = await getJobsPostingData();
            setJobsData(data);
        } catch (error: unknown) {
            console.error(error)
            setError('Something went wrong! Check your Network connection.');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        jobsFetching();
    }, []);

    // Search Job Title, Category & Company name -
    


    return (
        <>
            {/* Error Message */}
            {error && jobsData.length === 0 && (
                <p className="text-red-500 p-10 font-mono font-bold text-xl">{error}</p>
            )}

            {loading ? (
                <p className="text-center p-10 font-mono font-bold text-xl">Fetching Jobs....</p>
            ) : (
                <div className="mx-auto max-w-7xl px-4 py-8">
                    <div className="mb-6 flex justify-end">
                        <label htmlFor="jobs-search" className="sr-only">
                            Search jobs
                        </label>
                        <div className="relative w-full sm:w-72 md:w-80 lg:w-96">
                            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            <input
                                id="jobs-search"
                                type="search"
                                placeholder="Search Jobs by title, company..."
                                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-900 shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                            />
                        </div>
                    </div>

                    <section aria-label="Latest Technology News" className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {jobsData.map((job) => (
                        <article key={job.id.toString()} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <span className="inline-flex w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                Job Role
                            </span>

                            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                                {job.title}
                            </h2>

                            <div className="mt-6 flex-1 space-y-3 text-sm">
                                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                                    <span className="font-medium text-slate-500">Company</span>
                                    <span className="font-semibold text-slate-900">{job.company_name}</span>
                                </div>

                                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                                    <span className="font-medium text-slate-500">Job Type</span>
                                    <span className="font-semibold text-emerald-600">{job.job_type}</span>
                                </div>

                                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                                    <span className="font-medium text-slate-500">Location</span>
                                    <span className="font-semibold text-slate-900">{job.candidate_required_location}</span>
                                </div>

                                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                                    <span className="font-medium text-slate-500">Salary</span>
                                    <span className="font-bold text-indigo-600">{job.salary.trim() ? job.salary : 'NA'}</span>
                                </div>
                            </div>

                            <footer className="mt-6 border-t border-slate-100 pt-6">
                                <Link
                                    className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3.5 font-semibold text-white shadow-md transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg"
                                    href={job.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Apply Now
                                </Link>
                            </footer>
                        </article>
                    ))}
                    </section>
                </div>
            )}
        </>
    );
}