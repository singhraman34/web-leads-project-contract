"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ParallaxImageProps {
    src: string;
    alt: string;
    height: string;
    className?: string;
    strength?: number;
    priority?: boolean;
}

export default function ParallaxImage({
    src,
    alt,
    height,
    className = "",
    strength = 0.2,
    priority = false
}: ParallaxImageProps) {
    const ref = useRef(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Subtly move the image in the opposite direction or slightly slower
    const y = useTransform(scrollYProgress, [0, 1], ["0%", `${strength * 100}%`]);

    if (shouldReduceMotion) {
        return (
            <div className={`relative overflow-hidden ${height} ${className}`}>
                <Image src={src} alt={alt} fill className="object-cover" priority={priority} />
            </div>
        );
    }

    return (
        <div ref={ref} className={`relative overflow-hidden ${height} ${className} bg-slate-100`}>
            {/* Shimmer Effect */}
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] w-[300px] z-10 pointer-events-none"
            />

            <motion.div
                style={{ y, height: "120%", top: "-10%" }}
                className="absolute inset-0 w-full"
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    quality={100}
                    sizes="100vw"
                    className="object-cover"
                    priority={priority}
                />
            </motion.div>
        </div>
    );
}
