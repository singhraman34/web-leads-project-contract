"use client";

import { motion } from "framer-motion";
import { Certification } from "@/types/about";
import { Container } from "@/components/ui/Container";
import { Award } from "lucide-react";

export default function CertificationsSection({ certifications }: { certifications: Certification[] }) {
    return (
        <section className="section-vertical-spacing bg-slate-50">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="section-heading mb-4 text-slate-900">Global Certifications</h2>
                    <p className="text-[#C9A96A] uppercase tracking-widest text-sm font-bold">Verified Excellence</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="enterprise-card border border-slate-200 flex flex-col items-center text-center"
                        >
                            <div className="p-4 bg-[#C9A96A]/10 rounded-full mb-8">
                                <Award className="w-12 h-12 text-[#C9A96A]" />
                            </div>
                            <h3 className="sub-heading text-slate-900 mb-4 leading-tight">{cert.title}</h3>
                            <p className="body-text text-slate-600 leading-relaxed">
                                {cert.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
