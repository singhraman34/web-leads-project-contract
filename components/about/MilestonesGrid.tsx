"use client";

import { motion } from "framer-motion";
import { Milestone } from "@/types/about";
import { Container } from "@/components/ui/Container";

export default function MilestonesGrid({ milestones }: { milestones: Milestone[] }) {
    return (
        <section className="section-vertical-spacing bg-white">
            <Container>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                            className="enterprise-card border border-slate-200 flex flex-col items-center justify-center text-center group"
                        >
                            <h3 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                                {milestone.metric}
                            </h3>
                            <div className="w-12 h-1 bg-[#C9A96A] mb-6" />
                            <p className="text-base md:text-xl font-bold text-[#C9A96A] uppercase tracking-widest max-w-[150px]">
                                {milestone.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
