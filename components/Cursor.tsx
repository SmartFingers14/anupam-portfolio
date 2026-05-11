"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const mouse = useRef({ x: 0, y: 0 });
    const ring = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (window.innerWidth < 768) return;

        const onMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
            if (dotRef.current) {
                dotRef.current.style.left = e.clientX + "px";
                dotRef.current.style.top = e.clientY + "px";
            }
        };

        const animate = () => {
            ring.current.x += (mouse.current.x - ring.current.x) * 0.08;
            ring.current.y += (mouse.current.y - ring.current.y) * 0.08;
            if (ringRef.current) {
                ringRef.current.style.left = ring.current.x + "px";
                ringRef.current.style.top = ring.current.y + "px";
            }
            requestAnimationFrame(animate);
        };

        document.addEventListener("mousemove", onMove);
        animate();

        const links = document.querySelectorAll("a, button");
        links.forEach((el) => {
            el.addEventListener("mouseenter", () => {
                ringRef.current?.classList.add("!w-12", "!h-12", "!border-[#c9a96e]");
                dotRef.current?.classList.add("!opacity-0");
            });
            el.addEventListener("mouseleave", () => {
                ringRef.current?.classList.remove("!w-12", "!h-12", "!border-[#c9a96e]");
                dotRef.current?.classList.remove("!opacity-0");
            });
        });

        return () => document.removeEventListener("mousemove", onMove);
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                className="fixed z-[9999] w-1.5 h-1.5 bg-[#c9a96e] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 hidden md:block"
            />
            <div
                ref={ringRef}
                className="fixed z-[9998] w-8 h-8 border border-[#c9a96e]/40 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-300 hidden md:block"
            />
        </>
    );
}
