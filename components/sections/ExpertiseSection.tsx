"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Building2, PencilRuler, Factory, Construction } from "lucide-react";

const EXPERTISE_AREAS = [
    {
        title: "Commercial Construction",
        description: "Executing complex corporate infrastructures with Grade-A engineering standards and precision timelines.",
        icon: Building2,
        features: ["Corporate Hubs", "Retail Centers", "Office Complexes"]
    },
    {
        title: "Luxury Residential Interiors",
        description: "Bespoke interior architecture that blends luxury aesthetics with functional engineering excellence.",
        icon: PencilRuler,
        features: ["Premium Penthouses", "Villa Renovations", "Designer Apartments"]
    },
    {
        title: "Industrial Projects",
        description: "Specialized construction for high-scale manufacturing units, logistics hubs, and industrial warehouses.",
        icon: Factory,
        features: ["Warehousing", "Manufacturing Plants", "Cold Storage Cells"]
    },
    {
        title: "Renovation Engineering",
        description: "Transforming aging structures into modern, high-performance environments with structural integrity.",
        icon: Construction,
        features: ["Structural Retrofitting", "Retro-fit Interiors", "Modern Upgrades"]
    }
];

export default function ExpertiseSection() {
    return (
        <section className="section-vertical-spacing bg-white overflow-hidden">
            <Container>
                <div className="max-w-3xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#C9A96A] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">
                            Our Core Specialization
                        </span>
                        <h2 className="section-heading text-slate-900 mb-6">
                            Engineering Expertise <br />
                            Across <span className="text-[#C9A96A]">Scale & Scope.</span>
                        </h2>
                        <p className="body-text text-slate-600 max-w-2xl leading-relaxed">
                            With over two decades of experience, we provide integrated engineering and design solutions tailored for the most demanding technical environments.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {EXPERTISE_AREAS.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-[#C9A96A]/30 hover:bg-white hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] transition-all duration-500"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#C9A96A] mb-8 group-hover:bg-[#C9A96A] group-hover:text-white transition-all duration-500">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 block">
                                    {item.description}
                                </p>
                                <ul className="space-y-2">
                                    {item.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                            <span className="w-1 h-1 rounded-full bg-[#C9A96A]/40" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
