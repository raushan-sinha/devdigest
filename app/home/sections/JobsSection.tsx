import Link from "next/link";

export default function JobsSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-4 py-20 sm:px-6 lg:px-8">
            <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-16 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300">
                        💼 Career Opportunities
                    </span>

                    <h2 className="mt-6 text-4xl font-black text-white sm:text-5xl">
                        Accelerate Your{" "}
                        <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                            Tech Career
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                        Discover carefully curated software engineering opportunities,
                        connect with innovative companies, and explore roles that match
                        your skills across the modern technology ecosystem.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl">
                            🚀
                        </div>

                        <h3 className="text-xl font-bold text-white">
                            Curated Opportunities
                        </h3>

                        <p className="mt-3 leading-7 text-slate-300">
                            Browse hand-picked jobs from startups, unicorns, and leading
                            technology companies across multiple domains.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-400/30">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-3xl">
                            🌍
                        </div>

                        <h3 className="text-xl font-bold text-white">
                            Remote & Global Roles
                        </h3>

                        <p className="mt-3 leading-7 text-slate-300">
                            Explore remote, hybrid, and on-site opportunities from
                            companies hiring developers worldwide.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/30">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-3xl">
                            💡
                        </div>

                        <h3 className="text-xl font-bold text-white">
                            Multiple Tech Domains
                        </h3>

                        <p className="mt-3 leading-7 text-slate-300">
                            Find opportunities in Frontend, Backend, AI, DevOps,
                            Cybersecurity, Cloud Computing, Data Engineering, and more.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/30">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10 text-3xl">
                            📈
                        </div>

                        <h3 className="text-xl font-bold text-white">
                            Grow Your Career
                        </h3>

                        <p className="mt-3 leading-7 text-slate-300">
                            Whether you're a student, junior developer, or experienced
                            engineer, discover opportunities to take the next step.
                        </p>
                    </div>

                </div>

                {/* Bottom CTA */}
                <div className="mt-16 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-green-500/10 p-10 text-center backdrop-blur-xl">

                    <h3 className="text-3xl font-bold text-white">
                        Ready to Find Your Next Opportunity?
                    </h3>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                        Explore the latest software engineering opportunities, discover
                        companies hiring today, and take the next step in your
                        professional journey with DevDigest.
                    </p>

                    <Link href='/jobs' className="mt-8 rounded-2xl bg-gradient-to-r from-green-500 via-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                        Explore All Jobs →
                    </Link>

                </div>

            </div>
        </section>
    )
}