import { NavLinks } from "@/data/navbarLinks";
import Link from "next/link";

const navTitle: string = 'DevDigest'

export default function Navbar() {
    return (
        <header className="border-b">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold font-mono font-medium tracking-tight"
                >
                    {navTitle}
                </Link>

                {/* Navigation */}
                <ul className="flex items-center gap-10 text-sm font-mono font-medium">
                    {NavLinks.map((link) => (
                        <li key={link.id}>
                            <Link href={link.href} className="hover:text-blue-600">
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}