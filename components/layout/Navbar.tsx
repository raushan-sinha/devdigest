"use client";

import { NavLinks } from "@/data/navbarLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navTitle: string = 'DevDigest'

export default function Navbar() {
    const pathName = usePathname();

    return (
        <header className="border-b bg-[#101923]">
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
                            <Link href={link.href} className={`${pathName === link.href ? "text-xl text-blue-600 font-extrabold" : "text-white text-xl font-extrabold"} hover:text-blue-600`}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}