"use client";
import FadeIn from "./FadeIn";

const items = [
    { title: "Bachelor of Business Administration", institution: "Amity University", year: "2023 – 2026", badge: null },
    { title: "Diploma in Computer Engineering", institution: "Haryana State Board of Technical Education", year: "2019 – 2021", badge: null },
    { title: "Certification in Product Management", institution: "Indian School of Business (ISB)", year: null, badge: "ISB Certified" },
    { title: "Analytics Professional Certification", institution: "Google", year: null, badge: "Google Certified" },
    { title: "Ads Measurement Professional", institution: "Google", year: null, badge: "Google Certified" },
    { title: "Certification in Advanced Excel", institution: "Amity University", year: null, badge: "Certified" },
];

export default function Education() {
    return (
        <section id="education" className="relative py-32 bg-[#0d0c0a]">
            <div className="max-w-6xl mx-auto px-8">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-px bg-[#c9a96e]/50" />
                        <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#6b5e4e]">Education & Certifications</span>
                    </div>
                    <h2
                        className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-[1.05] tracking-[-0.02em] text-[#e8e0d0] mb-16"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        Credentials &amp;{" "}
                        <em className="not-italic text-[#c9a96e]">Qualifications</em>
                    </h2>
                </FadeIn>

                <div className="space-y-0 border border-[#c9a96e]/10">
                    {items.map((item, i) => (
                        <FadeIn key={item.title} delay={i * 0.06}>
                            <div className="group grid sm:grid-cols-[1fr_auto] items-center gap-4 px-6 py-5 border-b border-[#c9a96e]/10 last:border-b-0 hover:bg-[#1a1714] transition-colors duration-200">
                                <div>
                                    <h4 className="text-[14px] font-semibold text-[#e8e0d0] mb-1 group-hover:text-[#c9a96e] transition-colors duration-200 leading-snug">
                                        {item.title}
                                    </h4>
                                    <p className="text-[12px] text-[#6b5e4e] tracking-wide">{item.institution}</p>
                                </div>
                                <div className="flex-shrink-0">
                                    {item.badge ? (
                                        <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#c9a96e] border border-[#c9a96e]/30 px-3 py-1.5">
                                            {item.badge}
                                        </span>
                                    ) : (
                                        <span className="text-[11px] text-[#6b5e4e] font-medium">{item.year}</span>
                                    )}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
