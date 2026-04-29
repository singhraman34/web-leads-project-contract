"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface StarBreakdownProps {
    star: number;
    count: number;
    total: number;
}

export default function StarBreakdown({ star, count, total }: StarBreakdownProps) {
    const percentage = total === 0 ? 0 : Math.round((count / total) * 100);

    return (
        <div className="flex items-center gap-4 w-full">
            <div className="flex items-center gap-1 w-16 shrink-0">
                <span className="font-bold text-slate-900">{star}</span>
                <Star className="w-4 h-4 text-sky-500 fill-sky-500" />
            </div>

            <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="h-full bg-sky-500 rounded-full relative"
                >
                    <div className="absolute inset-0 bg-white/20 w-full h-full" />
                </motion.div>
            </div>

            <div className="w-12 text-right shrink-0">
                <span className="text-slate-600 text-sm font-medium">{percentage}%</span>
            </div>
        </div>
    );
}
