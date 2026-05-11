"use client";

export default function Footer() {
    return (
        <footer className="border-t border-[#c9a96e]/10 py-8">
            <div className="max-w-6xl mx-auto px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        className="text-lg font-black tracking-tight text-[#e8e0d0] hover:text-[#c9a96e] transition-colors duration-200"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        Anupam<span className="text-[#c9a96e]">.</span>
                    </a>
                    <p className="text-[11px] tracking-[0.1em] text-[#6b5e4e] text-center">
                        © 2026 Anupam Bakshi · Marketing Manager &amp; Growth Strategist
                    </p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="w-8 h-8 border border-[#c9a96e]/20 hover:border-[#c9a96e]/50 flex items-center justify-center text-[#6b5e4e] hover:text-[#c9a96e] transition-all duration-200"
                        aria-label="Back to top"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
}
