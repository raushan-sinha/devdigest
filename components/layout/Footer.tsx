import { DEVELOPER_PLATFORM_LINKS, PLATFORM_LINKS } from "@/data/footerLinks";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-4 pt-16 sm:px-6 lg:px-8">

            {/* Background Glow */}
            <div className="absolute -top-32 left-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">

                {/* Main Footer */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <Link href='/' className="text-3xl font-black text-white">
                            Dev<span className="text-cyan-400">Digest</span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
                            A developer-first platform delivering the latest technology
                            news, career opportunities, and AI-powered tools to help
                            developers learn, build, and grow.
                        </p>

                        <div className="mt-6 flex gap-3">

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm text-white transition hover:bg-cyan-500/20"
                            >
                                X
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm text-white transition hover:bg-cyan-500/20"
                            >
                                GH
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm text-white transition hover:bg-cyan-500/20"
                            >
                                IN
                            </a>

                        </div>
                    </div>


                    {/* Platform Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">
                            Platform
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm text-slate-300">
                            {PLATFORM_LINKS.map((link) => (
                                <li key={link.id}>
                                    <Link href={link.url} className="transition hover:text-cyan-400">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Developer Resources */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">
                            Developer Resources
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm text-slate-300">
                            {DEVELOPER_PLATFORM_LINKS.map((link) => (
                                <li key={link.id}>
                                    <Link href={link.url} className="transition hover:text-cyan-400">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">
                            Newsletter
                        </h3>

                        <p className="mt-5 text-sm leading-6 text-slate-300">
                            Get the latest tech news, AI updates, developer resources,
                            and career opportunities directly in your inbox.
                        </p>


                        <div className="mt-5 flex flex-col gap-3">

                            <input
                                type="email"
                                placeholder="Enter your email"
                                id="email"
                                name="email"
                                autoComplete="on"
                                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-400"
                            />

                            <button
                                className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
                            >
                                Subscribe
                            </button>

                        </div>

                    </div>

                </div>


                {/* Bottom Bar */}
                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center text-sm text-slate-400 sm:flex-row">

                    <p>
                        © 2026 DevDigest. All rights reserved.
                    </p>

                    <p>
                        Built for developers, engineers & technology enthusiasts 🚀
                    </p>

                </div>

            </div>

        </footer>
    );
}