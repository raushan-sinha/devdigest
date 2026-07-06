import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-4 py-10 sm:px-6 lg:px-8">
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />

            <div className="relative mx-auto max-w-6xl">

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl sm:p-12 lg:p-16">

                    <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-300">
                        🚀 Trusted by Developers & Tech Enthusiasts
                    </span>

                    <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl lg:whitespace-nowrap">
                        Stay Ahead in
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            {" "}Technology & AI
                        </span>
                    </h1>

                    <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg lg:text-xl">
                        Discover breaking technology news, AI innovations, software engineering
                        insights, developer tools, startup updates, cybersecurity trends, cloud
                        computing, and career opportunities—all curated in one fast, modern,
                        and developer-first platform.
                    </p>

                    <div className="mt-14 grid grid-cols-2 gap-4 text-center sm:grid-cols-4">

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <h2 className="text-xl lg:text-2xl font-bold text-cyan-400">AI</h2>
                            <p className="mt-2 text-sm text-slate-300">
                                Latest breakthroughs
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <h2 className="text-xl lg:text-2xl font-bold text-blue-400 whitespace-nowrap">Tech News</h2>
                            <p className="mt-2 text-sm text-slate-300">
                                Daily updates
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <h2 className="text-xl lg:text-2xl font-bold text-green-400">Jobs</h2>
                            <p className="mt-2 text-sm text-slate-300">
                                Career opportunities
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <h2 className="text-xl lg:text-2xl font-bold text-purple-400">Tools</h2>
                            <p className="mt-2 text-sm text-slate-300">
                                Developer resources
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}