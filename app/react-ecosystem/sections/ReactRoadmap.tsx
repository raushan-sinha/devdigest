import { REACT_ROADMAP_DATA } from "@/data/reactRoadmap.data";

export default function ReactRoadmap() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-20 sm:px-6 lg:px-8">

            {/* Background Glow */}
            <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[150px]" />

            <div className="relative mx-auto max-w-7xl">

                {/* Header */}
                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                        ⚛️ React Developer Roadmap
                    </span>

                    <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
                        Master the{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            React Ecosystem
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                        A complete roadmap to become a professional React Developer,
                        covering fundamentals, modern tooling, state management,
                        performance optimization, and deployment.
                    </p>

                </div>

                {/* Timeline */}
                <div className="relative">

                    {/* Vertical Line */}
                    <div className="absolute left-6 top-0 hidden h-full w-1 rounded-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 lg:block" />

                    <div className="space-y-10">
                        {REACT_ROADMAP_DATA.map((item) => (
                            <div key={item.id} className={`group relative rounded-3xl border ${item.borderColor} bg-gradient-to-br ${item.bgColor} p-8 backdrop-blur-xl transition duration-300 hover:border-cyan-400 hover:shadow-[0_20px_60px_rgba(34,211,238,.15)] lg:ml-20`}>

                                <div className={`absolute -left-[74px] hidden lg:flex h-14 w-14 items-center justify-center rounded-full border-4 border-slate-950 ${item.stepColor} text-xl font-bold text-white`}>
                                    {item.id}
                                </div>

                                <span className={`inline-flex rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide ${item.tagColor}`}>
                                    {item.tag}
                                </span>

                                <h3 className="mt-5 text-3xl font-bold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-slate-300 leading-7">{item.description}</p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    )
}