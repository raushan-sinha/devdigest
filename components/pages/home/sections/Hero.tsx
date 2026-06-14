export default function Hero() {
    return (
        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-20">
            <div className="bg-[#ff9f1c] mx-auto max-w-4xl rounded-2xl p-8 text-center shadow-xl">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                    Stay Ahead in Tech, AI, and Developer Trends
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
                    Discover the latest technology news, AI breakthroughs, developer tools, software engineering insights, startup updates, and career opportunities—all in one place.
                </p>

                <div className="mt-8">
                    <button
                        className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                    >
                        Explore Latest News
                    </button>
                </div>
            </div>
        </section>
    )
}