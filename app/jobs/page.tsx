'use client';
import { JobsDataProps } from "@/types/jobsPosting.types";
import { useEffect, useState } from "react";

export default function Jobs() {
    const [jobsData, setJobsData] = useState<JobsDataProps[]>([]);

    // Fetch Jobs Posting API -
    const jobsFetching = async () => {
        try {
            const response = await fetch('http://localhost:5000/jobs/api');
            if (!response.ok) throw new Error('Failed to fetch API');
            const data = await response.json();
            console.log(data);
            setJobsData(data);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        jobsFetching();
    }, []);

    return (
        <section aria-label="Latest Technology News" className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 xl:grid-cols-3">
            {/* Card 1 */}
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    Frontend Development
                </span>

                <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                    Senior React Developer
                </h2>

                <div className="mt-6 space-y-3 text-sm">
                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                        <span className="font-medium text-slate-500">Company</span>
                        <span className="font-semibold text-slate-900">Google</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                        <span className="font-medium text-slate-500">Category</span>
                        <span className="font-semibold text-slate-900">Frontend</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                        <span className="font-medium text-slate-500">Job Type</span>
                        <span className="font-semibold text-emerald-600">Full Time</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                        <span className="font-medium text-slate-500">Location</span>
                        <span className="font-semibold text-slate-900">Remote</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                        <span className="font-medium text-slate-500">Salary</span>
                        <span className="font-bold text-indigo-600">$120k - $150k</span>
                    </div>
                </div>

                <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg">
                    Apply Now
                </button>
            </article>

            {/* Card 2 */}
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                    Artificial Intelligence
                </span>

                <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                    AI Software Engineer
                </h2>

                <div className="mt-6 space-y-3 text-sm">
                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                        <span className="font-medium text-slate-500">Company</span>
                        <span className="font-semibold text-slate-900">OpenAI</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                        <span className="font-medium text-slate-500">Category</span>
                        <span className="font-semibold text-slate-900">AI / ML</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                        <span className="font-medium text-slate-500">Job Type</span>
                        <span className="font-semibold text-emerald-600">Hybrid</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                        <span className="font-medium text-slate-500">Location</span>
                        <span className="font-semibold text-slate-900">San Francisco</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                        <span className="font-medium text-slate-500">Salary</span>
                        <span className="font-bold text-indigo-600">$140k - $180k</span>
                    </div>
                </div>

                <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg">
                    Apply Now
                </button>
            </article>

            {/* Card 3 */}
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Full Stack Development
                </span>

                <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                    Full Stack Engineer
                </h2>

                <div className="mt-6 space-y-3 text-sm">
                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                        <span className="font-medium text-slate-500">Company</span>
                        <span className="font-semibold text-slate-900">Stripe</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                        <span className="font-medium text-slate-500">Category</span>
                        <span className="font-semibold text-slate-900">Full Stack</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                        <span className="font-medium text-slate-500">Job Type</span>
                        <span className="font-semibold text-emerald-600">Remote</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                        <span className="font-medium text-slate-500">Location</span>
                        <span className="font-semibold text-slate-900">London, UK</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                        <span className="font-medium text-slate-500">Salary</span>
                        <span className="font-bold text-indigo-600">$110k - $145k</span>
                    </div>
                </div>

                <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg">
                    Apply Now
                </button>
            </article>
        </section>
    );
}