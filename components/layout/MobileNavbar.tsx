"use client";

import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

export default function MobileNavbar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <header className="border-b">
            <nav className="mx-auto flex items-center justify-between px-4 py-4 sm:px-6">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight sm:text-2xl"
                >
                    DevDigest
                </Link>

                {/* Menu Button */}
                <button
                    type="button"
                    aria-label="Open Menu"
                    className="relative z-50 flex h-10 w-10 items-center justify-center border-2 rounded-xl"
                    onClick={() => {
                        console.log('Clicked');
                        setMenuOpen(!menuOpen)
                    }}
                >
                    {menuOpen ? (
                        <RxCross2 size={30} />
                    ) : (
                        <BiMenu size={30} />
                    )}
                </button>
            </nav>
        </header>
    )
}