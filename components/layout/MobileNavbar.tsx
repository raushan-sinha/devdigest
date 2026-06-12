import Link from "next/link";
import { BiMenu } from "react-icons/bi";

export default function MobileNavbar() {
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
                    className="flex h-10 w-10 items-center justify-center rounded-lg border transition-colors hover:bg-gray-100"
                >
                    <BiMenu size={22} />
                </button>
            </nav>
        </header>
    )
}