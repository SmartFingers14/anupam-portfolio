"use client";
import { motion } from "framer-motion";

const items = [
    "Google Ads", "Meta Ads", "Marketing Automation", "CRM Management",
    "SEO & SEM", "Shopify", "Funnel Strategy", "Lead Generation",
    "Email Marketing", "WhatsApp Marketing", "Growth Strategy", "Analytics",
];

export default function Marquee() {
    const doubled = [...items, ...items];
    return (
        <div className="relative overflow-hidden border-y border-[#c9a96e]/8 py-4">
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 32, ease: "linear", repeat: Infinity }}
                className="flex items-center whitespace-nowrap w-max"
            >
                {doubled.map((item, i) => (
                    <span key={i} className="flex items-center">
                        <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6b5e4e] px-7 hover:text-[#c9a96e] transition-colors duration-200 cursor-default">
                            {item}
                        </span>
                        <span className="text-[#c9a96e]/20 text-[8px]">◆</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
