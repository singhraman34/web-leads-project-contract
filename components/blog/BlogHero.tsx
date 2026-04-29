"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

export default function BlogHero() {
    return (
        <section className="relative w-full py-32 flex items-center overflow-hidden border-b border-slate-200 bg-white">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/ai-generated-modern-styled-entryway.jpg"
                    alt="The Executive Journal"
                    fill
                    priority
                    className="object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/30" />
            </div>

            <Container className="relative z-20">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <span className="w-12 h-[2px] bg-sky-500"></span>
                        <span className="text-sky-500 font-bold uppercase tracking-widest text-sm">
                            Insights & Strategy
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-slate-900 drop-shadow-[0_2px_6px_rgba(0,0,0,0.15)]"
                    >
                        The Executive <span className="text-sky-500">Journal</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="text-lg md:text-2xl text-slate-600 max-w-2xl leading-relaxed"
                    >
                        Expert analysis on commercial construction, luxury structural renovations, and enterprise development inside Mumbai.
                    </motion.p>
                </div>
            </Container>
        </section>
    );
}
