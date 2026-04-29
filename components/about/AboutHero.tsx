"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative w-full section-vertical-spacing flex items-center overflow-hidden border-b border-white/5 bg-slate-950">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/modern-styled-entryway.jpg"
                    alt="About Elite Contractors"
                    fill
                    priority
                    quality={100}
                    sizes="100vw"
                    className="object-cover opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>

            <motion.div
                animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#C9A96A]/5 rounded-full blur-[100px] z-0 pointer-events-none"
            />

            <Container className="relative z-20">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <span className="w-12 h-[2px] bg-[#C9A96A]"></span>
                        <span className="text-white font-bold uppercase tracking-widest text-sm">
                            Our Legacy
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="hero-heading tracking-tight mb-8 text-white drop-shadow-[0_2px_6_rgba(0,0,0,0.3)]"
                    >
                        25+ Years of <span className="text-[#C9A96A]">Uncompromising</span> Standards.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="body-text md:text-2xl text-slate-200 max-w-2xl leading-relaxed"
                    >
                        From premium residential renovations to massive industrial complexes, our history is built on precision, safety, and delivering unmatched value in Mumbai.
                    </motion.p>
                </div>
            </Container>
        </section>
    );
}
