export default function ConnectForm() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-4 py-20 sm:px-6 lg:px-8">

            {/* Background Glow */}
            <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 -left-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-6xl">

                {/* Section Header */}
                <div className="mx-auto mb-12 max-w-2xl text-center">

                    <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                        💬 Let's Connect
                    </span>

                    <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Have Something
                        <span className="ml-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            to Discuss?
                        </span>
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                        Have a question, project idea, collaboration opportunity,
                        or just want to say hello? Send me a message and let's
                        start a conversation.
                    </p>

                </div>


                {/* Form Container */}
                <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">

                    <form>

                        {/* Name + Email */}
                        <div className="grid gap-6 md:grid-cols-2">

                            {/* Full Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-semibold text-white"
                                >
                                    Full Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="on"
                                    placeholder="Enter your name"
                                    className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-500 transition duration-300 focus:border-cyan-400/50 focus:bg-slate-950/80 focus:ring-2 focus:ring-cyan-400/10"
                                />
                            </div>


                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-semibold text-white"
                                >
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="on"
                                    placeholder="you@example.com"
                                    className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-500 transition duration-300 focus:border-cyan-400/50 focus:bg-slate-950/80 focus:ring-2 focus:ring-cyan-400/10"
                                />
                            </div>

                        </div>


                        {/* Subject */}
                        <div className="mt-6">

                            <label
                                htmlFor="subject"
                                className="mb-2 block text-sm font-semibold text-white"
                            >
                                Subject
                            </label>

                            <select
                                id="subject"
                                name="subject"
                                defaultValue=""
                                className="w-full appearance-none rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-sm text-slate-400 outline-none transition duration-300 focus:border-cyan-400/50 focus:bg-slate-950/80 focus:ring-2 focus:ring-cyan-400/10"
                            >
                                <option value="" disabled>
                                    What would you like to discuss?
                                </option>

                                <option value="general">
                                    General Question
                                </option>

                                <option value="project">
                                    Project / Freelance
                                </option>

                                <option value="collaboration">
                                    Collaboration
                                </option>

                                <option value="job">
                                    Job Opportunity
                                </option>

                                <option value="feedback">
                                    Website Feedback
                                </option>

                                <option value="other">
                                    Other
                                </option>
                            </select>

                        </div>


                        {/* Website / Profile */}
                        <div className="mt-6">

                            <label
                                htmlFor="profile"
                                className="mb-2 block text-sm font-semibold text-white"
                            >
                                Website / GitHub / LinkedIn
                                <span className="ml-2 text-xs font-normal text-slate-500">
                                    Optional
                                </span>
                            </label>

                            <input
                                id="profile"
                                name="profile"
                                type="url"
                                autoComplete="off"
                                placeholder="https://github.com/yourusername"
                                className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-500 transition duration-300 focus:border-cyan-400/50 focus:bg-slate-950/80 focus:ring-2 focus:ring-cyan-400/10"
                            />

                        </div>


                        {/* Message */}
                        <div className="mt-6">

                            <label
                                htmlFor="message"
                                className="mb-2 block text-sm font-semibold text-white"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                placeholder="Tell me a little about your question, idea, project, or opportunity..."
                                className="w-full resize-none rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-sm leading-7 text-white outline-none placeholder:text-slate-500 transition duration-300 focus:border-cyan-400/50 focus:bg-slate-950/80 focus:ring-2 focus:ring-cyan-400/10"
                            />

                        </div>


                        {/* Bottom */}
                        <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

                            <p className="max-w-md text-xs leading-5 text-slate-500">
                                Please provide enough information so I can
                                understand your message and respond appropriately.
                            </p>


                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-0.5 hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/20 sm:w-auto"
                            >
                                Send Message
                                <span className="ml-2">↗</span>
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </section>
    );
}