"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import ClientLogoGrid from "@/components/trust/ClientLogoGrid";
import CertificationCard from "@/components/trust/CertificationCard";

export default function TrustSection() {
    return (
        <section className="section-vertical-spacing-small bg-gradient-to-b from-[#faf7f2] via-white to-white">
            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center mb-16"
                >
                    <span className="text-[#C9A96A] font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                        Authority & Reliability
                    </span>
                    <div className="inline-flex flex-col items-center gap-3">
                        <h2 className="section-heading text-slate-900 mb-0">
                            Trusted by Leading Companies
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0, opacity: 0 }}
                            whileInView={{ scaleX: 1, opacity: 0.35 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                            className="w-28 h-[3px] bg-[#C9A96A] rounded-full origin-center"
                        />
                    </div>
                </motion.div>

                {/* 1. Client Logos Grid */}
                <ClientLogoGrid />

                {/* 2. Certifications Strip */}
                <CertificationCard />
            </Container>
        </section>
    );
}
