"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "left" | "right" | "none";
    className?: string;
}

export default function FadeIn({ children, delay = 0, direction = "up", className = "" }: FadeInProps) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    const prefersReduced = useReducedMotion();

    // On mobile / reduced motion: just fade, no translate
    const dist = prefersReduced ? 0 : 24;

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? dist : 0,
            x: direction === "left" ? -dist : direction === "right" ? dist : 0,
        },
        visible: { opacity: 1, y: 0, x: 0 },
    };

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.55, delay: prefersReduced ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
