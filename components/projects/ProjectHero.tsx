"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

interface ProjectHeroProps {
    title: string;
    category: string;
    location: string;
}

export default function ProjectHero({ title, category, location }: ProjectHeroProps) {
    return (
        <section className="relative w-full section-vertical-spacing flex items-center overflow-hidden border-b border-slate-200 bg-white">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge.jpg"
                    alt={title}
                    fill
                    priority
                    className="object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/30" />
            </div>

            <Container className="relative z-20">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex items-center justify-center gap-4 mb-6"
                    >
                        <span className="text-[#C9A96A] font-bold uppercase tracking-widest text-sm bg-[#C9A96A]/10 px-4 py-1.5 rounded-full border border-[#C9A96A]/20">
                            {category}
                        </span>
                        <span className="text-slate-500 font-medium text-sm">|</span>
                        <span className="text-slate-500 font-medium uppercase tracking-widest text-sm">
                            {location}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="hero-heading tracking-tight text-slate-900 drop-shadow-[0_2px_6px_rgba(0,0,0,0.15)]"
                    >
                        {title}
                    </motion.h1>
                </div>
            </Container>
        </section>
    );
}
