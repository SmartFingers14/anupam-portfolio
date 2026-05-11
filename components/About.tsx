"use client";
import FadeIn from "./FadeIn";

export default function About() {
    return (
        <section id="about" className="relative py-32">
            <div className="max-w-6xl mx-auto px-8">
                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
                    {/* Left — label + heading */}
                    <FadeIn direction="left">
                        <div className="lg:sticky lg:top-28">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-8 h-px bg-[#c9a96e]/50" />
                                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#6b5e4e]">About</span>
                            </div>
                            <h2
                                className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-[1.05] tracking-[-0.02em] text-[#e8e0d0] mb-8"
                                style={{ fontFamily: "var(--font-serif)" }}
                            >
                                I build systems that{" "}
                                <em className="not-italic text-[#c9a96e]">actually</em>{" "}
                                scale.
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                <a href="tel:+919873355316" className="inline-flex items-center gap-2 text-[12px] tracking-[0.08em] uppercase font-medium text-[#a89880] hover:text-[#c9a96e] transition-colors duration-200 border-b border-[#a89880]/20 hover:border-[#c9a96e]/40 pb-0.5">
                                    +91 9873355316
                                </a>
                                <span className="text-[#6b5e4e]">·</span>
                                <a href="mailto:anupambakshi.professional@gmail.com" className="inline-flex items-center gap-2 text-[12px] tracking-[0.08em] uppercase font-medium text-[#a89880] hover:text-[#c9a96e] transition-colors duration-200 border-b border-[#a89880]/20 hover:border-[#c9a96e]/40 pb-0.5">
                                    Email
                                </a>
                                <span className="text-[#6b5e4e]">·</span>
                                <a href="https://linkedin.com/in/anupambakshimarketing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[12px] tracking-[0.08em] uppercase font-medium text-[#a89880] hover:text-[#c9a96e] transition-colors duration-200 border-b border-[#a89880]/20 hover:border-[#c9a96e]/40 pb-0.5">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right — text + cards */}
                    <FadeIn direction="right">
                        <div className="space-y-6 text-[15px] text-[#a89880] leading-[1.8] font-light mb-14">
                            <p>
                                Marketing Manager and Growth Strategist with 6+ years of hands-on experience building and scaling full-funnel marketing systems across paid, organic, and automation-led channels.
                            </p>
                            <p>
                                Proven track record in growth strategy, lead generation, CRM management, AI-powered workflows, and conversion optimization. Experienced across corporate setups, founder-led businesses, and digital agencies — managing teams, owning campaigns across multiple industries, and delivering measurable outcomes.
                            </p>
                            <p>
                                ISB-certified with an execution-first mindset focused on scalable growth and systems.
                            </p>
                        </div>

                        {/* Four pillars — clean, no glow */}
                        <div className="grid grid-cols-2 gap-px bg-[#c9a96e]/8">
                            {[
                                { label: "Performance Marketing", desc: "Google & Meta Ads with proven CPL reduction across 8+ clients." },
                                { label: "AI Automation", desc: "50+ workflows built, reducing manual effort by 50%+." },
                                { label: "Growth Strategy", desc: "35% admissions growth in 2 months through funnel restructuring." },
                                { label: "Multi-Industry", desc: "Real Estate, EdTech, Beauty, Wellness, E-commerce." },
                            ].map((c) => (
                                <div key={c.label} className="bg-[#0f0e0c] p-6 group hover:bg-[#1a1714] transition-colors duration-300">
                                    <h4 className="text-[13px] font-semibold text-[#e8e0d0] mb-2 group-hover:text-[#c9a96e] transition-colors duration-200">{c.label}</h4>
                                    <p className="text-[12px] text-[#6b5e4e] leading-relaxed">{c.desc}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
