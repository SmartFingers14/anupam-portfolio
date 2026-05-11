"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
                    const step = target / (1600 / 16);
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
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <section
            ref={containerRef}
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden pt-[72px]"
        >
            {/* Subtle warm glow — very restrained */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#c9a96e]/4 blur-[180px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#d4a574]/3 blur-[150px]" />
            </div>

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 max-w-6xl mx-auto px-8 w-full"
            >
                <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-end">
                    {/* Left — main content */}
                    <div>
                        {/* Eyebrow */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center gap-3 mb-10"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
                            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#a89880]">
                                Marketing Manager · Delhi, India
                            </span>
                        </motion.div>

                        {/* Name — serif, editorial */}
                        <div className="overflow-hidden mb-2">
                            <motion.h1
                                initial={{ y: "110%" }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[clamp(4rem,11vw,9rem)] font-black leading-[0.9] tracking-[-0.03em] text-[#e8e0d0]"
                                style={{ fontFamily: "var(--font-serif)" }}
                            >
                                Anupam
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden mb-10">
                            <motion.h1
                                initial={{ y: "110%" }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[clamp(4rem,11vw,9rem)] font-black leading-[0.9] tracking-[-0.03em] text-[#c9a96e]"
                                style={{ fontFamily: "var(--font-serif)" }}
                            >
                                Bakshi
                            </motion.h1>
                        </div>

                        {/* Descriptor line */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55, duration: 0.7 }}
                            className="text-[15px] text-[#a89880] leading-relaxed max-w-lg mb-10 font-light"
                        >
                            Growth Strategist with 6+ years building full-funnel marketing systems across paid, organic, and automation-led channels. ISB Certified.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.7 }}
                            className="flex flex-wrap items-center gap-4"
                        >
                            <a
                                href="#contact"
                                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                                className="inline-flex items-center gap-2.5 bg-[#c9a96e] hover:bg-[#e8c98a] text-[#0f0e0c] text-sm font-semibold tracking-[0.06em] uppercase px-7 py-3.5 transition-colors duration-200"
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

                    {/* Right — stats, vertical */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.85, duration: 0.8 }}
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.7 }}
                    className="lg:hidden flex gap-8 mt-14 pt-8 border-t border-[#c9a96e]/10"
                >
                    {stats.map((s) => (
                        <div key={s.label}>
                            <div className="text-2xl font-black text-[#c9a96e] leading-none mb-1 tabular-nums" style={{ fontFamily: "var(--font-serif)" }}>
                                <Counter target={s.num} suffix={s.suffix} />
                            </div>
                            <div className="text-[10px] tracking-[0.15em] uppercase text-[#6b5e4e] font-medium">{s.label}</div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-8 flex items-center gap-3 text-[#6b5e4e]"
            >
                <div className="w-px h-12 bg-gradient-to-b from-[#c9a96e]/40 to-transparent" />
                <span className="text-[10px] tracking-[0.2em] uppercase font-medium rotate-0">Scroll</span>
            </motion.div>
        </section>
    );
}
