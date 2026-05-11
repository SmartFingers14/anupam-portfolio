"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";
import { motion, AnimatePresence } from "framer-motion";

const jobs = [
    {
        company: "Morphiaas",
        role: "Marketing Manager",
        location: "Remote",
        period: "Mar 2026 – Present",
        current: true,
        tags: ["Performance Marketing", "Meta & Google Ads", "Shopify", "Team Leadership"],
        highlight: null,
        bullets: [
            "Performance marketing and growth strategy at a full-service digital marketing agency, managing multi-client campaigns across Meta, Google, and e-commerce platforms.",
            "Worked across Real Estate (India & Dubai), Clothing, Beauty, Car Dealerships, Wellness, Home Décor, and EdTech — 8+ clients with lower CPL and improved ROAS.",
            "Managed and built Shopify stores end-to-end for e-commerce clients covering product listing, store structure, and conversion-focused page design.",
            "Built marketing automation workflows to streamline lead follow-ups, client communication, and reporting.",
            "Led a team of 5+ marketing professionals, overseeing task allocation and cross-client collaboration.",
        ],
    },
    {
        company: "Kidzee",
        role: "Marketing Manager",
        location: "Delhi, India",
        period: "Apr 2024 – Feb 2026",
        current: false,
        tags: ["Marketing Automation", "CRM", "Lead Generation", "Event Marketing"],
        highlight: "35% increase in admissions within the first 2 months by restructuring the lead handling process.",
        bullets: [
            "Designed and implemented 50+ AI-powered automation workflows covering the full lead lifecycle — from capture and segmentation to nurturing, follow-up, and closure.",
            "Planned and managed lead generation campaigns on Meta and Google Ads targeting high-intent local audiences.",
            "Optimised Google My Business profile to improve local search visibility, map rankings, and drive walk-in traffic.",
            "Organised high-visibility events including carnivals, baby shows, open house days, and sports days.",
        ],
    },
    {
        company: "Int'l Institute of Culinary Arts",
        role: "Marketing Specialist",
        location: "South Delhi",
        period: "Apr 2023 – Mar 2024",
        current: false,
        tags: ["Content Strategy", "CRM", "Influencer Marketing", "Landing Pages"],
        highlight: "40–60% growth in engagement and 15–25% CVR uplift on landing pages. Managed 270+ leads/month.",
        bullets: [
            "Led end-to-end marketing strategy across paid media, organic growth, lead generation, automation, and conversions for multiple admissions cycles.",
            "Planned, shot, and created organic content for Instagram, Facebook, LinkedIn, and Pinterest.",
            "Designed and implemented AI-powered marketing automations, reducing manual lead handling by 50%+.",
            "Led influencer collaborations with 10+ creators, email marketing, WhatsApp workflows, and direct sales calls.",
        ],
    },
    {
        company: "Valued Epistemics (AdmitEdge)",
        role: "Digital Marketing Executive",
        location: "Chennai",
        period: "Oct 2022 – Mar 2023",
        current: false,
        tags: ["Webinar Marketing", "Funnel Strategy", "Email Marketing", "Sales Conversion"],
        highlight: null,
        bullets: [
            "Planned and hosted 15–20 live webinars, generating 300–600 registrations per cycle.",
            "Improved webinar show-up rates to 40–50% using social, email, WhatsApp, and outreach strategies.",
            "Designed and optimised webinar-focused landing pages supporting consistent lead capture.",
            "Supported sales conversions via attendee engagement and cold calling, contributing to 20–30% of enrollments.",
        ],
    },
    {
        company: "The Laws Way Pvt. Ltd.",
        role: "Marketing Specialist",
        location: "South Delhi",
        period: "Aug 2020 – Sept 2022",
        current: false,
        tags: ["SEO", "Local SEO", "Google & Meta Ads", "Content Strategy"],
        highlight: null,
        bullets: [
            "Owned the entire digital marketing function as a one-person team across 6+ channels.",
            "Generated 30–50 qualified leads/month via compliant Google & Meta campaigns.",
            "Published 40+ SEO blogs, ranking the firm in top 3–5 local search results.",
            "Improved lead response times by 40%+ via WhatsApp and email workflows.",
        ],
    },
    {
        company: "Picartzo Services Pvt. Ltd.",
        role: "Marketing Intern",
        location: "Mumbai",
        period: "Jun 2020 – Aug 2020",
        current: false,
        tags: ["Cold Calling", "Social Media Marketing", "Influencer Outreach", "Content Creation"],
        highlight: null,
        bullets: [
            "Conducted daily cold calling (20–30 prospects/day).",
            "Assisted with social media strategy, influencer onboarding (10–15 creators), and content creation.",
        ],
    },
    {
        company: "Independent Technology Blogger",
        role: "Blogger & Content Creator",
        location: "New Delhi",
        period: "Mar 2016 – Mar 2021",
        current: false,
        tags: ["SEO Content Writing", "Keyword Research", "Content Strategy", "Technical Writing"],
        highlight: null,
        bullets: [
            "Wrote 1,000+ blogs across Windows, Android, and iOS topics.",
            "Delivered 12–15 lakh+ words of SEO-optimized content.",
            "Managed 4–5 self-owned blogs, publishing 15–20 articles/month.",
        ],
    },
];

export default function Experience() {
    const [active, setActive] = useState(0);
    const job = jobs[active];

    return (
        <section id="experience" className="relative py-20 sm:py-32">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-px bg-[#c9a96e]/50" />
                        <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#6b5e4e]">Experience</span>
                    </div>
                    <h2
                        className="text-[clamp(2rem,6vw,4rem)] font-black leading-[1.05] tracking-[-0.02em] text-[#e8e0d0] mb-10 sm:mb-16"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        Where I&apos;ve Made{" "}
                        <em className="not-italic text-[#c9a96e]">Impact</em>
                    </h2>
                </FadeIn>

                {/* Mobile: accordion-style stacked list */}
                <div className="lg:hidden space-y-0 border border-[#c9a96e]/10">
                    {jobs.map((j, i) => (
                        <div key={j.company} className="border-b border-[#c9a96e]/10 last:border-b-0">
                            <button
                                onClick={() => setActive(active === i ? -1 : i)}
                                className="w-full text-left px-5 py-4 flex items-center justify-between gap-3"
                            >
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-[13px] text-[#e8e0d0]">{j.company}</span>
                                        {j.current && <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />}
                                    </div>
                                    <div className="text-[11px] text-[#6b5e4e] mt-0.5">{j.period}</div>
                                </div>
                                <svg
                                    className={`w-4 h-4 text-[#6b5e4e] flex-shrink-0 transition-transform duration-200 ${active === i ? "rotate-180" : ""}`}
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <AnimatePresence>
                                {active === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-5">
                                            <p className="text-[12px] text-[#c9a96e] font-medium mb-3">{j.role} · {j.location}</p>
                                            <div className="flex flex-wrap gap-1.5 mb-4">
                                                {j.tags.map((t) => (
                                                    <span key={t} className="text-[10px] font-medium tracking-[0.05em] uppercase text-[#a89880] bg-[#c9a96e]/8 px-2.5 py-1">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                            {j.highlight && (
                                                <div className="border-l-2 border-[#c9a96e] pl-3 mb-4">
                                                    <p className="text-[12px] text-[#c9a96e] leading-relaxed font-medium italic">{j.highlight}</p>
                                                </div>
                                            )}
                                            <ul className="space-y-2.5">
                                                {j.bullets.map((b, bi) => (
                                                    <li key={bi} className="flex items-start gap-2.5 text-[13px] text-[#a89880] leading-relaxed font-light">
                                                        <span className="mt-2 w-1 h-1 rounded-full bg-[#c9a96e]/50 flex-shrink-0" />
                                                        {b}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Desktop: sidebar + panel */}
                <div className="hidden lg:grid lg:grid-cols-[260px_1fr] gap-12">
                    {/* Sidebar */}
                    <FadeIn direction="left" className="flex flex-col">
                        {jobs.map((j, i) => (
                            <button
                                key={j.company}
                                onClick={() => setActive(i)}
                                className={`text-left py-4 border-l-2 pl-5 transition-all duration-200 ${active === i
                                    ? "border-[#c9a96e] text-[#e8e0d0]"
                                    : "border-[#c9a96e]/10 text-[#6b5e4e] hover:text-[#a89880] hover:border-[#c9a96e]/30"
                                    }`}
                            >
                                <div className="flex items-center justify-between gap-2 mb-0.5">
                                    <span className="font-semibold text-[13px] leading-snug">{j.company}</span>
                                    {j.current && <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] flex-shrink-0" />}
                                </div>
                                <div className="text-[11px] tracking-[0.05em] opacity-60">{j.period}</div>
                            </button>
                        ))}
                    </FadeIn>

                    {/* Panel */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-[#c9a96e]/10">
                                <div>
                                    <h3 className="text-2xl font-black text-[#e8e0d0] mb-1 leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                                        {job.company}
                                    </h3>
                                    <p className="text-[13px] text-[#c9a96e] font-medium tracking-wide">{job.role} · {job.location}</p>
                                </div>
                                <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#6b5e4e] border border-[#c9a96e]/15 px-3 py-1.5 whitespace-nowrap">
                                    {job.period}
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {job.tags.map((t) => (
                                    <span key={t} className="text-[11px] font-medium tracking-[0.06em] uppercase text-[#a89880] bg-[#c9a96e]/8 px-3 py-1">{t}</span>
                                ))}
                            </div>
                            {job.highlight && (
                                <div className="border-l-2 border-[#c9a96e] pl-4 mb-6">
                                    <p className="text-[13px] text-[#c9a96e] leading-relaxed font-medium italic">{job.highlight}</p>
                                </div>
                            )}
                            <ul className="space-y-3">
                                {job.bullets.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[14px] text-[#a89880] leading-relaxed font-light">
                                        <span className="mt-2 w-1 h-1 rounded-full bg-[#c9a96e]/50 flex-shrink-0" />
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
