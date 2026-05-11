"use client";
import FadeIn from "./FadeIn";

const categories = [
    { name: "Marketing Automation", tools: ["Pabbly Connect", "Zapier"] },
    { name: "Email Marketing", tools: ["Zoho Campaigns", "SendGrid", "Mailchimp"] },
    { name: "WhatsApp Marketing", tools: ["Wati", "AiSensy"] },
    { name: "CRM & Sales", tools: ["Zoho CRM", "Zoho SalesIQ", "Salesforce"] },
    { name: "E-commerce", tools: ["Shopify"] },
    { name: "Project Management", tools: ["Asana", "Notion"] },
    { name: "Design & Creativity", tools: ["Canva", "Figma", "Photoshop", "After Effects"] },
    { name: "Analytics", tools: ["Mixpanel", "Google Analytics", "Balsamiq", "SQL"] },
    { name: "Advertising", tools: ["Facebook Ads", "Google Ads", "LinkedIn Ads"] },
    {
        name: "AI Tools",
        tools: ["Claude", "Claude Code", "ChatGPT", "Manus AI", "Shopify AI", "Kimi", "HeyGen", "Higgsfield", "Emergent Labs AI", "Holo AI", "Stitch", "Pomelli by Google"],
    },
];

export default function Tools() {
    return (
        <section id="tools" className="relative py-32">
            <div className="max-w-6xl mx-auto px-8">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-px bg-[#c9a96e]/50" />
                        <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#6b5e4e]">Tools & Tech</span>
                    </div>
                    <h2
                        className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-[1.05] tracking-[-0.02em] text-[#e8e0d0] mb-16"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        My{" "}
                        <em className="not-italic text-[#c9a96e]">Tech Stack</em>
                    </h2>
                </FadeIn>

                <div className="space-y-0 border border-[#c9a96e]/10">
                    {categories.map((cat, i) => (
                        <FadeIn key={cat.name} delay={i * 0.04}>
                            <div className="group grid sm:grid-cols-[220px_1fr] border-b border-[#c9a96e]/10 last:border-b-0 hover:bg-[#1a1714] transition-colors duration-200">
                                <div className="px-6 py-5 border-r border-[#c9a96e]/10">
                                    <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[#6b5e4e] group-hover:text-[#c9a96e] transition-colors duration-200">
                                        {cat.name}
                                    </span>
                                </div>
                                <div className="px-6 py-5 flex flex-wrap gap-2 items-center">
                                    {cat.tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="text-[12px] font-medium text-[#a89880] bg-[#c9a96e]/6 border border-[#c9a96e]/12 px-3 py-1 hover:text-[#e8e0d0] hover:border-[#c9a96e]/30 transition-all duration-150"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
