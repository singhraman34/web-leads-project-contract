"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    y?: number;
    x?: number;
    scale?: number;
}

export default function Reveal({ 
    children, 
    width = "fit-content", 
    delay = 0, 
    duration = 0.5,
    y = 30,
    x = 0,
    scale = 1
}: RevealProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div style={{ width }}>{children}</div>;
    }

    return (
        <div style={{ position: "relative", width, overflow: "visible" }}>
            <motion.div
                initial={{ opacity: 0, y, x, scale }}
                whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ 
                    duration, 
                    delay, 
                    ease: [0.25, 1, 0.5, 1] 
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
