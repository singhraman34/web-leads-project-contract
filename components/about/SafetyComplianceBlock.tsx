"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ShieldAlert, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function SafetyComplianceBlock({ protocols }: { protocols: string[] }) {
    return (
        <section className="section-vertical-spacing bg-white">
            <Container>
                <div className="enterprise-card p-0 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-2 relative"
                    >
                        <div className="p-10 lg:p-20 relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <ShieldAlert className="w-10 h-10 text-[#C9A96A]" />
                                <h2 className="section-heading text-slate-900 uppercase tracking-wider">Safety First, Always.</h2>
                            </div>
                            <p className="body-text text-slate-600 mb-10 leading-relaxed">
                                There is no compromise when it comes to human life and structural security. Our enterprise operations strictly adhere to international safety conventions.
                            </p>

                            <ul className="space-y-6">
                                {protocols.map((protocol, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-[#C9A96A] shrink-0 mt-0.5" />
                                        <span className="text-slate-900 font-medium body-text">{protocol}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative aspect-[4/3] lg:aspect-auto min-h-full w-full">
                            <Image
                                src="/images/construction-site-interior.jpg"
                                alt="Construction Safety and Compliance"
                                fill
                                className="object-cover"
                                loading="lazy"
                            />
                            {/* Elegant overlay to blend with the white theme */}
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/40 to-transparent z-10" />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
