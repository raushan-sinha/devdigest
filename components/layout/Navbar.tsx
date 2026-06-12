import Link from "next/link";

export default function Navbar() {
    return (
        <header className="border-b">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight"
                >
                    DevDigest
                </Link>

                {/* Navigation */}
                <ul className="flex items-center gap-8 text-sm font-medium">
                    <li>
                        <Link href="/" className="hover:text-blue-600">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link href="/tech-news" className="hover:text-blue-600">
                            Tech News
                        </Link>
                    </li>

                    <li>
                        <Link href="/ai" className="hover:text-blue-600">
                            AI
                        </Link>
                    </li>

                    <li>
                        <Link href="/jobs" className="hover:text-blue-600">
                            Jobs
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}