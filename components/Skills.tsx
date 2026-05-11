"use client";
import FadeIn from "./FadeIn";

const skills = [
    "Marketing Strategy & Growth",
    "Performance Marketing (Google & Meta Ads)",
    "Funnel Strategy & Conversion Optimization",
    "Marketing Automation & AI Workflows",
    "CRM Management & Lead Nurturing",
    "Email & WhatsApp Marketing",
    "SEO, SEM & Local SEO",
    "Content & Organic Growth Strategy",
    "Marketing Analytics & Reporting",
    "Team Leadership & Sales Alignment",
    "Shopify & E-commerce Marketing",
    "Cross-border & Multi-industry Campaigns",
];

export default function Skills() {
    return (
        <section id="skills" className="relative py-20 sm:py-32 bg-[#0d0c0a]">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-px bg-[#c9a96e]/50" />
                        <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#6b5e4e]">Skills</span>
                    </div>
                    <h2
                        className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-[1.05] tracking-[-0.02em] text-[#e8e0d0] mb-16"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        What I{" "}
                        <em className="not-italic text-[#c9a96e]">Bring</em>
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#c9a96e]/8">
                    {skills.map((s, i) => (
                        <FadeIn key={s} delay={i * 0.03}>
                            <div className="group bg-[#0d0c0a] hover:bg-[#1a1714] px-6 py-5 transition-colors duration-300 cursor-default">
                                <div className="flex items-center gap-3">
                                    <span className="w-1 h-1 rounded-full bg-[#c9a96e]/40 group-hover:bg-[#c9a96e] transition-colors duration-200 flex-shrink-0" />
                                    <span className="text-[13px] font-medium text-[#a89880] group-hover:text-[#e8e0d0] transition-colors duration-200 leading-snug">
                                        {s}
                                    </span>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
