import { ROADMAP_CARD_PROPS } from "@/types/reactRoadmap.types";

export default function RoadmapCard({ id, borderColor, bgColor, stepColor, tagColor, tag, title, description }: ROADMAP_CARD_PROPS) {
    return (
        <div className={`group relative rounded-3xl border ${borderColor} bg-gradient-to-br ${bgColor} p-8 backdrop-blur-xl transition duration-300 hover:border-cyan-400 hover:shadow-[0_20px_60px_rgba(34,211,238,15)] lg:ml-20`}>

            <div className={`absolute -left-[74px] hidden lg:flex h-14 w-14 s-center justify-center rounded-full border-4 border-slate-950 ${stepColor} text-xl font-bold text-white`}>
                {id}
            </div>

            <span className={`inline-flex rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide ${tagColor}`}>
                {tag}
            </span>

            <h3 className="mt-5 text-3xl font-bold text-white">
                {title}
            </h3>

            <p className="mt-4 text-slate-300 leading-7">{description}</p>
        </div>
    )
}