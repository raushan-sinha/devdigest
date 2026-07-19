import { ROADMAP_CARD_PROPS } from "@/types/reactRoadmap.types";

export const REACT_ROADMAP_DATA: ROADMAP_CARD_PROPS[] = [
    {
        id: 1,
        tag: "Fundamentals",
        title: "React Basics",
        description:
            "Learn JSX, Components, Props, State, Events, Conditional Rendering, Lists, Forms, Hooks, and Component Lifecycle.",
        borderColor: "border-cyan-500/20",
        bgColor: "from-cyan-500/10 to-slate-900/80",
        hoverColor: "hover:border-cyan-400 hover:shadow-[0_20px_60px_rgba(34,211,238,.15)]",
        badgeColor: "bg-cyan-500/20",
        tagColor: "text-cyan-300",
        stepColor: "bg-cyan-500",
    },
    {
        id: 2,
        tag: "Routing",
        title: "Navigation & Routing",
        description:
            "Learn React Router, Nested Routes, Dynamic Routes, Navigation Guards, and Protected Pages.",
        borderColor: "border-green-500/20",
        bgColor: "from-green-500/10 to-slate-900/80",
        hoverColor: "hover:border-green-400 hover:shadow-[0_20px_60px_rgba(74,222,128,.15)]",
        badgeColor: "bg-green-500/20",
        tagColor: "text-green-300",
        stepColor: "bg-green-500",
    },
    {
        id: 3,
        tag: "API Integration",
        title: "Working with APIs",
        description:
            "Learn Fetch API, Axios, Async/Await, Loading States, Error Handling, REST APIs, and API integration best practices.",
        borderColor: "border-orange-500/20",
        bgColor: "from-orange-500/10 to-slate-900/80",
        hoverColor: "hover:border-orange-400 hover:shadow-[0_20px_60px_rgba(251,146,60,.15)]",
        badgeColor: "bg-orange-500/20",
        tagColor: "text-orange-300",
        stepColor: "bg-orange-500",
    },
    {
        id: 4,
        tag: "State Management",
        title: "Manage Application State",
        description:
            "Understand Context API, Redux Toolkit, Zustand, and scalable global state management patterns.",
        borderColor: "border-purple-500/20",
        bgColor: "from-purple-500/10 to-slate-900/80",
        hoverColor: "hover:border-purple-400 hover:shadow-[0_20px_60px_rgba(168,85,247,.15)]",
        badgeColor: "bg-purple-500/20",
        tagColor: "text-purple-300",
        stepColor: "bg-purple-500",
    },
    {
        id: 5,
        tag: "Performance",
        title: "Performance Optimization",
        description:
            "Learn React.memo, useMemo, useCallback, Lazy Loading, Code Splitting, Suspense, and bundle optimization techniques.",
        borderColor: "border-pink-500/20",
        bgColor: "from-pink-500/10 to-slate-900/80",
        hoverColor: "hover:border-pink-400 hover:shadow-[0_20px_60px_rgba(236,72,153,.15)]",
        badgeColor: "bg-pink-500/20",
        tagColor: "text-pink-300",
        stepColor: "bg-pink-500",
    },
    {
        id: 6,
        tag: "Deployment",
        title: "Build & Deploy",
        description:
            "Deploy React applications using Vercel, Netlify, GitHub, CI/CD workflows, and production-ready deployment strategies.",
        borderColor: "border-blue-500/20",
        bgColor: "from-blue-500/10 to-slate-900/80",
        hoverColor: "hover:border-blue-400 hover:shadow-[0_20px_60px_rgba(59,130,246,.15)]",
        badgeColor: "bg-blue-500/20",
        tagColor: "text-blue-300",
        stepColor: "bg-blue-500",
    },
]