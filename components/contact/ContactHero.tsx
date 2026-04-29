"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

interface ContactHeroProps {
    breadcrumb?: string;
    title?: React.ReactNode;
    subtitle?: string;
    backgroundImage?: string;
}

export default function ContactHero({
    breadcrumb = "Initiate A Project",
    title = <>Request A <br /><span className="text-primary">Premium Quote.</span></>,
    subtitle = "Complete our streamlined project application and our enterprise quoting team will reach out with a comprehensive consultation within 24 hours.",
    backgroundImage = "/images/3d-room-interior-with-classic-design-furniture.jpg"
}: ContactHeroProps) {
    return (
        <section className="relative w-full section-vertical-spacing flex items-center overflow-hidden border-b border-white/5 bg-slate-950">
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="World Class Luxury Interior"
                    fill
                    priority
                    quality={100}
                    sizes="100vw"
                    className="object-cover opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
            </div>

            <Container className="relative z-20">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <span className="w-12 h-[2px] bg-[#C9A96A]"></span>
                        <span className="text-[#C9A96A] font-black uppercase tracking-[0.2em] text-[10px]">
                            {breadcrumb}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="hero-heading text-white mb-8"
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="body-text text-slate-300 max-w-2xl leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>
                </div>
            </Container>
        </section>
    );
}
