"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

export default function TestimonialsHero() {
    return (
        <section className="relative w-full section-vertical-spacing flex items-center overflow-hidden border-b border-slate-200 bg-white">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/3d-room-interior-with-classic-design-furniture.jpg"
                    alt="Client Testimonials"
                    fill
                    priority
                    className="object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/30" />
            </div>

            <Container className="relative z-20">
                <div className="max-w-4xl text-center mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex items-center justify-center gap-4 mb-8"
                    >
                        <span className="w-12 h-[2px] bg-[#C9A96A]"></span>
                        <span className="text-[#C9A96A] font-black uppercase tracking-[0.2em] text-[10px]">
                            Client Trust
                        </span>
                        <span className="w-12 h-[2px] bg-[#C9A96A]"></span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="hero-heading text-slate-900 mb-8"
                    >
                        Real Stories. <span className="text-[#C9A96A]">Proven Excellence.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="body-text text-slate-600 max-w-2xl mx-auto leading-relaxed"
                    >
                        Hear directly from our corporate partners and luxury homeowners across Mumbai. We don&apos;t just build properties; we build lifelong relationships.
                    </motion.p>
                </div>
            </Container>
        </section>
    );
}
