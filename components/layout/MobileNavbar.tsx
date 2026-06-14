"use client";

import { NavLinks } from "@/data/navbarLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

export default function MobileNavbar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const pathName = usePathname();

    return (
        <header className="border-b bg-[#101923]">
            <nav className="mx-auto flex items-center justify-between px-4 py-4 sm:px-6">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold font-mono font-medium tracking-tight sm:text-2xl text-white"
                >
                    DevDigest
                </Link>

                {/* Menu Button */}
                <button
                    type="button"
                    aria-label="Open Menu"
                    className="relative z-50 flex h-10 w-10 items-center justify-center border-2 rounded-xl text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <RxCross2 size={30} />
                    ) : (
                        <BiMenu size={30} />
                    )}
                </button>
            </nav>

            {/* Menu Links */}
            {menuOpen && (
                <div className="absolute left-4 right-4 top-20 rounded-2xl border bg-[#101923] p-3 shadow-lg">
                    <ul className="flex flex-col gap-2">
                        {NavLinks.map((link) => (
                            <li key={link.id}>
                                <Link
                                    href={link.href}
                                    className={`${pathName === link.href ? "text-blue-600 font-semibold font-mono" : "text-gray-300 font-mono font-medium"} block rounded-xl bg-slate-800/60 px-4 py-3 text-sm font-mediu transition-all duration-200 hover:bg-slate-700`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    )
}