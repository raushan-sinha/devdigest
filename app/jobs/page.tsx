'use client';
import { getJobsPostingData } from "@/services/jobsPosting.service";
import { JobsDataProps } from "@/types/jobsPosting.types";
import { useEffect, useState } from "react";

export default function Jobs() {
    const [jobsData, setJobsData] = useState<JobsDataProps[]>([]);

    // Fetch Jobs Posting API -
    const jobsFetching = async () => {
        try {
            const data = await getJobsPostingData();
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
            {jobsData.map((job) => (
                <article key={job.id.toString()} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    Job Role
                </span>

                <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                    {job.title}
                </h2>

                <div className="mt-6 space-y-3 text-sm">
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
                        <span className="font-bold text-indigo-600">{job.salary}</span>
                    </div>
                </div>

                <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg" onClick={() => window.open(job.url, '_blank')}>
                    Apply Now
                </button>
            </article>
            ))}
        </section>
    );
}