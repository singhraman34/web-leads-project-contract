"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Award, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

const AWARDS = [
    { 
        title: "Best Interior Firm", 
        organization: "Mumbai Builders Association", 
        year: "2023",
        icon: Trophy 
    },
    { 
        title: "Construction Excellence Award", 
        organization: "Western India Real Estate Summit", 
        year: "2022",
        icon: Star 
    },
    { 
        title: "Top Commercial Contractor", 
        organization: "National Engineering Council", 
        year: "2023",
        icon: Award 
    },
    { 
        title: "Safety Standard Gold", 
        organization: "Industrial Safety Council", 
        year: "2024",
        icon: ShieldCheck 
    }
];

export default function AwardsShowcase() {
    return (
        <section className="section-vertical-spacing bg-slate-50 relative overflow-hidden">
            <Container>
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#C9A96A] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">
                            Industry Recognition
                        </span>
                        <h2 className="section-heading text-slate-900 mb-6">
                            Award Winning <br />
                            <span className="text-[#C9A96A]">Standards.</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {AWARDS.map((award, i) => {
                        const Icon = award.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative"
                            >
                                <div className="p-4 bg-slate-50 w-max rounded-2xl text-[#C9A96A] mb-8 group-hover:bg-[#C9A96A] group-hover:text-white transition-all duration-500">
                                    <Icon size={32} />
                                </div>
                                <p className="text-[#C9A96A] font-black text-sm mb-2">{award.year}</p>
                                <h4 className="text-xl font-black text-slate-900 leading-tight mb-4 group-hover:text-[#C9A96A] transition-colors uppercase tracking-tight">
                                    {award.title}
                                </h4>
                                <div className="h-[1px] w-12 bg-slate-100 mb-4 group-hover:w-full transition-all duration-500"></div>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-loose">
                                    {award.organization}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>

            {/* Background Accent */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#C9A96A] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
}
