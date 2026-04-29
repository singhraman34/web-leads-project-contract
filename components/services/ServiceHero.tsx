"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

interface ServiceHeroProps {
    title: string;
    description: string;
    category: string;
}

export default function ServiceHero({ title, description, category }: ServiceHeroProps) {
    return (
        <section className="relative w-full section-vertical-spacing flex items-center overflow-hidden border-b border-slate-200 bg-white">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/beautiful-kitchen-interior-design.jpg"
                    alt={title}
                    fill
                    priority
                    className="object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>

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
                            {category}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="hero-heading tracking-tight mb-8 text-white drop-shadow-[0_2px_6_rgba(0,0,0,0.3)]"
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="body-text md:text-2xl text-slate-200 max-w-2xl leading-relaxed"
                    >
                        {description}
                    </motion.p>
                </div>
            </Container>
        </section>
    );
}
