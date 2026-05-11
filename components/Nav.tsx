"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Tools", href: "#tools" },
    { label: "Education", href: "#education" },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (href: string) => {
        setOpen(false);
        const el = document.querySelector(href);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-500 ${scrolled
                    ? "bg-[#0f0e0c]/95 backdrop-blur-md border-b border-[#c9a96e]/10"
                    : ""
                    }`}
            >
                <div className="max-w-6xl mx-auto px-8 h-full flex items-center justify-between">
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        className="font-[var(--font-serif)] text-xl font-bold tracking-tight text-[#e8e0d0] hover:text-[#c9a96e] transition-colors duration-300"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        Anupam<span className="text-[#c9a96e]">.</span>
                    </a>

                    <ul className="hidden md:flex items-center gap-8">
                        {links.map((l) => (
                            <li key={l.href}>
                                <button
                                    onClick={() => scrollTo(l.href)}
                                    className="text-[13px] font-medium tracking-[0.08em] uppercase text-[#a89880] hover:text-[#e8e0d0] transition-colors duration-200"
                                >
                                    {l.label}
                                </button>
                            </li>
                        ))}
                        <li>
                            <button
                                onClick={() => scrollTo("#contact")}
                                className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[#0f0e0c] bg-[#c9a96e] hover:bg-[#e8c98a] px-5 py-2 transition-colors duration-200"
                            >
                                Hire Me
                            </button>
                        </li>
                    </ul>

                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden flex flex-col gap-[5px] p-2"
                        aria-label="Menu"
                    >
                        <span className={`block w-5 h-px bg-[#e8e0d0] transition-all duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
                        <span className={`block w-5 h-px bg-[#e8e0d0] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
                        <span className={`block w-5 h-px bg-[#e8e0d0] transition-all duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-[72px] left-0 right-0 z-40 bg-[#0f0e0c]/98 backdrop-blur-md border-b border-[#c9a96e]/10 md:hidden"
                    >
                        <div className="flex flex-col px-8 py-6 gap-4">
                            {links.map((l) => (
                                <button
                                    key={l.href}
                                    onClick={() => scrollTo(l.href)}
                                    className="text-left text-sm tracking-[0.1em] uppercase font-medium text-[#a89880] hover:text-[#e8e0d0] transition-colors py-1"
                                >
                                    {l.label}
                                </button>
                            ))}
                            <button
                                onClick={() => scrollTo("#contact")}
                                className="mt-2 text-sm font-semibold tracking-[0.1em] uppercase text-[#0f0e0c] bg-[#c9a96e] px-5 py-3 text-center"
                            >
                                Hire Me
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
