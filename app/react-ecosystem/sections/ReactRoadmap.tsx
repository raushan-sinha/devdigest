import RoadmapCard from "@/components/ui/RoadmapCard";
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
                            <RoadmapCard key={item.id} {...item} />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    )
}