import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MobileNavbar, Navbar } from "@/components/layout";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "DevDigest",
    description: "DevDigest is a modern developer-focused news platform that helps users stay updated with the latest trends in technology, AI, web development, startups, cybersecurity, cloud computing, and software.",
    icons: {
        icon: "/favicon.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col bg-gradient-to-br from-indigo-50 via-white to-cyan-100">
                <header>
                    <div className="hidden md:block">
                        <Navbar />
                    </div>

                    <div className="md:hidden">
                        <MobileNavbar />
                    </div>
                </header>

                {/* Main Pages */}
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
