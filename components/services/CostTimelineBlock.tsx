"use client";

import { motion } from "framer-motion";
import { DollarSign, Clock } from "lucide-react";

interface CostTimelineBlockProps {
    costRange: string;
    timeline: string;
}

export default function CostTimelineBlock({ costRange, timeline }: CostTimelineBlockProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-slate-50 border border-slate-200 rounded-xl p-8 flex items-start gap-6 hover:border-sky-500/50 transition-colors group"
            >
                <div className="p-4 bg-white rounded-full border border-slate-200 group-hover:scale-110 transition-transform">
                    <DollarSign className="w-8 h-8 text-sky-500" />
                </div>
                <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-sky-500 mb-2">Estimated Cost</h4>
                    <p className="text-2xl md:text-3xl font-extrabold text-slate-900">{costRange}</p>
                    <p className="text-sm text-slate-900/50 mt-2">*Varies based on scope</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-slate-50 border border-slate-200 rounded-xl p-8 flex items-start gap-6 hover:border-sky-500/50 transition-colors group"
            >
                <div className="p-4 bg-white rounded-full border border-slate-200 group-hover:scale-110 transition-transform">
                    <Clock className="w-8 h-8 text-sky-500" />
                </div>
                <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-sky-500 mb-2">Project Timeline</h4>
                    <p className="text-2xl md:text-3xl font-extrabold text-slate-900">{timeline}</p>
                    <p className="text-sm text-slate-900/50 mt-2">*Subject to permits</p>
                </div>
            </motion.div>
        </div>
    );
}
