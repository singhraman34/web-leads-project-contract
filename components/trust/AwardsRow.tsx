"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Award } from "lucide-react";

const AWARDS = [
    { 
        title: "Best Interior Firm", 
        organization: "Mumbai Builders Association", 
        icon: Trophy 
    },
    { 
        title: "Construction Excellence Award", 
        organization: "2023 National Summit", 
        icon: Star 
    },
    { 
        title: "Top Commercial Contractor", 
        organization: "Western India Business Council", 
        icon: Award 
    }
];

export default function AwardsRow() {
    return (
        <div className="space-y-8">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-4"
            >
                 <span className="w-12 h-[1px] bg-[#C9A96A]/30"></span>
                 <h3 className="section-heading text-2xl md:text-3xl text-slate-900 leading-none">
                     Industry Recognition
                 </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {AWARDS.map((award, i) => {
                    const Icon = award.icon || Trophy;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="flex items-center gap-6 bg-white border border-slate-100 p-8 rounded-[14px] shadow-sm hover:border-[#C9A96A]/20 hover:shadow-xl transition-all h-full"
                        >
                            <Icon className="text-[#C9A96A] shrink-0" size={32} aria-hidden="true" />
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-900 leading-tight mb-1">
                                    {award.title}
                                </h4>
                                <p className="body-text text-sm text-[#C9A96A]">
                                    {award.organization}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
