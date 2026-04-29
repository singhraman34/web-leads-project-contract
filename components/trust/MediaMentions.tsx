"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const MEDIA_PARTNERS = [
    { name: "Economic Times", logo: "ECONOMIC TIMES" },
    { name: "Business Standard", logo: "BUSINESS STANDARD" },
    { name: "Construction Week", logo: "CONSTRUCTION WEEK" },
    { name: "Architect & Interiors India", logo: "ARCHITECT & INTERIORS" },
    { name: "Forbes India", logo: "FORBES INDIA" },
];

export default function MediaMentions() {
    return (
        <section className="py-20 bg-white border-y border-slate-100">
            <Container>
                <div className="flex flex-col items-center">
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-12"
                    >
                        As Featured In
                    </motion.p>
                    
                    <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
                        {MEDIA_PARTNERS.map((partner, i) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative"
                            >
                                <span className="text-xl md:text-2xl font-black text-slate-300 grayscale group-hover:grayscale-0 group-hover:text-[#C9A96A] transition-all duration-300 tracking-tighter cursor-default">
                                    {partner.logo}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
