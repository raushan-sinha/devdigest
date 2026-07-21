import { REACT_PROJECTS_DATA } from "@/data/reactProjectsData.data";

export default function ReactProjects() {
    return (
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-20 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                        🚀 React Project Ideas
                    </span>

                    <h2 className="mt-6 text-4xl font-black text-white sm:text-5xl">
                        Build Real-World{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            React Projects
                        </span>
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-300">
                        Practice React by building projects from beginner to advanced
                        level and strengthen your frontend development skills.
                    </p>

                </div>

                {/* Beginner */}

                <div className="mb-20">

                    <div className="mb-8 flex items-center gap-4">

                        <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-300">
                            🟢 Beginner
                        </span>

                        <div className="h-px flex-1 bg-gradient-to-r from-green-500/30 to-transparent" />

                    </div>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                        {REACT_PROJECTS_DATA.beginner.map((item) => (
                            <article key={item.id} className="rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-slate-900/80 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-green-400 hover:shadow-[0_20px_60px_rgba(74,222,128,.15)]">

                                <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-300">
                                    {item.tag}
                                </span>

                                <h3 className="mt-5 text-2xl font-bold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-300">
                                    {item.description}
                                </p>
                            </article>
                        ))}

                    </div>

                </div>

                {/* Intermediate */}

                <div className="mb-20">

                    <div className="mb-8 flex items-center gap-4">

                        <span className="rounded-full bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-300">
                            🟡 Intermediate
                        </span>

                        <div className="h-px flex-1 bg-gradient-to-r from-yellow-500/30 to-transparent" />

                    </div>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                        {REACT_PROJECTS_DATA.intermediate.map((item) => (
                            <article key={item.id} className="rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-slate-900/80 p-7 backdrop-blur-xl">

                                <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-semibold text-yellow-300">
                                    {item.tag}
                                </span>

                                <h3 className="mt-5 text-2xl font-bold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-300">
                                    {item.description}
                                </p>
                            </article>
                        ))}

                    </div>

                </div>

                {/* Advanced */}

                <div>

                    <div className="mb-8 flex items-center gap-4">

                        <span className="rounded-full bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300">
                            🔴 Advanced
                        </span>

                        <div className="h-px flex-1 bg-gradient-to-r from-red-500/30 to-transparent" />

                    </div>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                        {REACT_PROJECTS_DATA.advanced.map((item) => (
                            <article key={item.id} className="rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-slate-900/80 p-7 backdrop-blur-xl">

                                <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-300">
                                    {item.tag}
                                </span>

                                <h3 className="mt-5 text-2xl font-bold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-300">
                                    {item.description}
                                </p>

                            </article>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    )
}