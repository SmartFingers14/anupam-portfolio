"use client";
import FadeIn from "./FadeIn";

export default function Contact() {
    return (
        <section id="contact" className="relative py-32">
            <div className="max-w-6xl mx-auto px-8">
                <div className="grid lg:grid-cols-[1fr_1fr] gap-20 items-start">
                    {/* Left */}
                    <FadeIn direction="left">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-8 h-px bg-[#c9a96e]/50" />
                            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#6b5e4e]">Let&apos;s Connect</span>
                        </div>
                        <h2
                            className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-[1.05] tracking-[-0.02em] text-[#e8e0d0] mb-6"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            Ready to{" "}
                            <em className="not-italic text-[#c9a96e]">Grow Together?</em>
                        </h2>
                        <p className="text-[15px] text-[#a89880] leading-[1.8] font-light mb-10 max-w-md">
                            I&apos;m open to full-time roles, consulting projects, and exciting growth challenges. Let&apos;s talk.
                        </p>
                        <a
                            href="mailto:anupambakshi.professional@gmail.com"
                            className="inline-flex items-center gap-3 bg-[#c9a96e] hover:bg-[#e8c98a] text-[#0f0e0c] text-sm font-semibold tracking-[0.06em] uppercase px-8 py-4 transition-colors duration-200"
                        >
                            Send Me a Message
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14">
                                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </FadeIn>

                    {/* Right — contact details */}
                    <FadeIn direction="right">
                        <div className="space-y-0 border border-[#c9a96e]/10">
                            {[
                                {
                                    label: "Email",
                                    value: "anupambakshi.professional@gmail.com",
                                    href: "mailto:anupambakshi.professional@gmail.com",
                                },
                                {
                                    label: "Phone",
                                    value: "+91 9873355316",
                                    href: "tel:+919873355316",
                                },
                                {
                                    label: "LinkedIn",
                                    value: "linkedin.com/in/anupambakshimarketing",
                                    href: "https://linkedin.com/in/anupambakshimarketing",
                                },
                                {
                                    label: "Location",
                                    value: "Delhi, India · Open to Remote",
                                    href: null,
                                },
                            ].map((item) => (
                                <div key={item.label} className="group grid grid-cols-[100px_1fr] border-b border-[#c9a96e]/10 last:border-b-0 hover:bg-[#1a1714] transition-colors duration-200">
                                    <div className="px-5 py-4 border-r border-[#c9a96e]/10">
                                        <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#6b5e4e]">{item.label}</span>
                                    </div>
                                    <div className="px-5 py-4">
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                className="text-[13px] text-[#a89880] hover:text-[#c9a96e] transition-colors duration-200 font-medium break-all"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <span className="text-[13px] text-[#a89880] font-medium">{item.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ISB badge */}
                        <div className="mt-8 flex items-center gap-4 pt-8 border-t border-[#c9a96e]/10">
                            <div className="w-px h-10 bg-[#c9a96e]/30" />
                            <div>
                                <p className="text-[11px] tracking-[0.15em] uppercase text-[#6b5e4e] mb-0.5">Certified by</p>
                                <p className="text-[13px] font-semibold text-[#c9a96e]">Indian School of Business (ISB) · Google</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
