"use client";
import FadeIn from "./FadeIn";

export default function Contact() {
    return (
        <section id="contact" className="relative py-20 sm:py-32">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
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
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="mailto:anupambakshi.professional@gmail.com"
                                className="inline-flex items-center gap-3 bg-[#c9a96e] hover:bg-[#e8c98a] text-[#0f0e0c] text-sm font-semibold tracking-[0.06em] uppercase px-8 py-4 transition-colors duration-200"
                            >
                                Send Me a Message
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14">
                                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a
                                href="https://wa.me/919873355316?text=Hi%20Anupam%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 border border-[#25D366]/40 hover:border-[#25D366] hover:bg-[#25D366]/10 text-[#25D366] text-sm font-semibold tracking-[0.06em] uppercase px-8 py-4 transition-all duration-200"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                WhatsApp Me
                            </a>
                        </div>
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
