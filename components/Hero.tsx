"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Counter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    let start = 0;
                    const step = target / (1200 / 16);
                    const timer = setInterval(() => {
                        start += step;
                        if (start >= target) { setCount(target); clearInterval(timer); }
                        else setCount(Math.floor(start));
                    }, 16);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
    { num: 6, suffix: "+", label: "Years" },
    { num: 8, suffix: "+", label: "Clients" },
    { num: 50, suffix: "+", label: "AI Workflows" },
    { num: 35, suffix: "%", label: "Growth" },
];

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden pt-[72px]"
        >
            {/* Very subtle warm glow — no heavy blur on mobile */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
                <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#c9a96e]/3 blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full py-16 sm:py-0">
                <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-end">
                    {/* Left — main content */}
                    <div>
                        {/* Eyebrow */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="flex items-center gap-3 mb-8 sm:mb-10"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
                            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#a89880]">
                                Marketing Manager · Delhi, India
                            </span>
                        </motion.div>

                        {/* Name */}
                        <div className="overflow-hidden mb-1 pb-3">
                            <motion.h1
                                initial={{ y: "110%" }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[clamp(3.5rem,13vw,9rem)] font-black leading-[1.05] tracking-[-0.03em] text-[#e8e0d0]"
                                style={{ fontFamily: "var(--font-serif)" }}
                            >
                                Anupam
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden mb-8 sm:mb-10 pb-3">
                            <motion.h1
                                initial={{ y: "110%" }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[clamp(3.5rem,13vw,9rem)] font-black leading-[1.05] tracking-[-0.03em] text-[#c9a96e]"
                                style={{ fontFamily: "var(--font-serif)" }}
                            >
                                Bakshi
                            </motion.h1>
                        </div>

                        {/* Descriptor */}
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45, duration: 0.6 }}
                            className="text-[14px] sm:text-[15px] text-[#a89880] leading-relaxed max-w-lg mb-8 sm:mb-10 font-light"
                        >
                            Growth Strategist with 6+ years building full-funnel marketing systems across paid, organic, and automation-led channels. ISB Certified.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-wrap items-center gap-4"
                        >
                            <a
                                href="#contact"
                                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                                className="inline-flex items-center gap-2.5 bg-[#c9a96e] hover:bg-[#e8c98a] active:bg-[#b8944f] text-[#0f0e0c] text-sm font-semibold tracking-[0.06em] uppercase px-6 sm:px-7 py-3 sm:py-3.5 transition-colors duration-200"
                            >
                                Let&apos;s Work Together
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14">
                                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a
                                href="#experience"
                                onClick={(e) => { e.preventDefault(); document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" }); }}
                                className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.06em] uppercase text-[#a89880] hover:text-[#e8e0d0] transition-colors duration-200 border-b border-[#a89880]/30 hover:border-[#e8e0d0]/50 pb-0.5"
                            >
                                View Work
                            </a>
                        </motion.div>
                    </div>

                    {/* Right — stats, vertical (desktop only) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="hidden lg:flex flex-col gap-8 pb-4"
                    >
                        {stats.map((s) => (
                            <div key={s.label} className="text-right">
                                <div className="text-3xl font-black text-[#c9a96e] leading-none mb-1 tabular-nums" style={{ fontFamily: "var(--font-serif)" }}>
                                    <Counter target={s.num} suffix={s.suffix} />
                                </div>
                                <div className="text-[11px] tracking-[0.15em] uppercase text-[#6b5e4e] font-medium">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Mobile stats row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.75, duration: 0.6 }}
                    className="lg:hidden grid grid-cols-4 gap-4 mt-12 pt-8 border-t border-[#c9a96e]/10"
                >
                    {stats.map((s) => (
                        <div key={s.label} className="text-center">
                            <div className="text-xl sm:text-2xl font-black text-[#c9a96e] leading-none mb-1 tabular-nums" style={{ fontFamily: "var(--font-serif)" }}>
                                <Counter target={s.num} suffix={s.suffix} />
                            </div>
                            <div className="text-[9px] sm:text-[10px] tracking-[0.1em] uppercase text-[#6b5e4e] font-medium">{s.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll hint — hidden on mobile */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-10 left-8 hidden sm:flex items-center gap-3 text-[#6b5e4e]"
            >
                <div className="w-px h-12 bg-gradient-to-b from-[#c9a96e]/40 to-transparent" />
                <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
            </motion.div>
        </section>
    );
}
