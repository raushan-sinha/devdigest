export default function AI() {
    return (
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-4 py-20">

            {/* Background Glow */}
            <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

            <div className="relative mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-xl sm:p-12">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10 text-5xl">
                    🤖
                </div>

                <span className="mt-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                    Coming Soon
                </span>

                <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    AI Page
                </h1>

                <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
                    We're working on something exciting! 🚀
                    <br />
                    This page is currently under development.
                    <br />
                    Stay tuned for upcoming AI-powered features.
                </p>

                <div className="mt-8">
                    <span className="inline-flex rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white">
                        Be Updated ✨
                    </span>
                </div>

            </div>
        </section>
    );
}