import { IoClose } from 'react-icons/io5';
import { FaQuoteLeft } from 'react-icons/fa';

export default function QuotePopupCard() {
    return (
        <div className="fixed inset-0 z-50 flex items-end justify-start bg-black/60 p-4 backdrop-blur-md sm:p-6">
            {/* Card Container */}
            <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl sm:w-auto sm:p-8">

                {/* Decorative Glowing Orbs for an attractive dynamic background */}
                <div className="absolute -top-20 -left-20 -z-10 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 -z-10 h-72 w-72 rounded-full bg-rose-500/30 blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl"></div>

                {/* Close Button */}
                <button
                    className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all hover:rotate-90 hover:scale-110 hover:bg-white/20 hover:text-white focus:outline-none cursor-pointer"
                    aria-label="Close"
                >
                    <IoClose size={22} />
                </button>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-6 text-center">
                    {/* Quote Icon */}
                    <div className="bg-gradient-to-br from-rose-400 to-orange-400 bg-clip-text text-5xl text-transparent">
                        <FaQuoteLeft size={40} color='cyan' />
                    </div>

                    {/* Quote Text */}
                    <p className="text-xl font-medium leading-relaxed tracking-wide text-gray-50 drop-shadow-sm sm:text-2xl">
                        "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle."
                    </p>

                    {/* Author Info */}
                    <div className="mt-2 flex flex-col items-center gap-1">
                        <div className="mb-4 h-1 w-12 rounded-full bg-white/20"></div>
                        <h3 className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-xl font-bold text-transparent">
                            Steve Jobs
                        </h3>
                        <span className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
                            Co-founder of Apple
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
