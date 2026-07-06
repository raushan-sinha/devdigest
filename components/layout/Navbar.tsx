"use client";

import { NavLinks } from "@/data/navbarLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navTitle: string = 'DevDigest'

export default function Navbar() {
    const pathName = usePathname();

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-slate-950/90 via-slate-900/85 to-slate-950/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl text-white font-bold font-mono font-medium tracking-tight"
                >
                    {navTitle}
                </Link>

                {/* Navigation */}
                <ul className="flex items-center gap-10 text-sm font-mono font-medium">
                    {NavLinks.map((link) => (
                        <li key={link.id}>
                            <Link
                                href={link.href}
                                className={`relative inline-block pb-1.5 text-base transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-yellow-500 after:transition-all after:duration-300 ${
                                    pathName === link.href
                                        ? "font-semibold text-yellow-500 after:w-full after:shadow-[0_0_10px_rgba(234,179,8,0.75)]"
                                        : "font-medium text-gray-100 after:w-0 hover:text-yellow-500 hover:after:w-full"
                                }`}
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}