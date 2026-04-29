"use client";

import { motion } from "framer-motion";
import { CircleDollarSign, CalendarDays, MapPin } from "lucide-react";

interface ProjectMetaBlockProps {
    budget: string;
    duration: string;
    location: string;
}

export default function ProjectMetaBlock({ budget, duration, location }: ProjectMetaBlockProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
            <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-[14px] p-6 hover:border-[#C9A96A]/50 transition-colors">
                <div className="p-3 bg-white rounded-full border border-slate-200">
                    <MapPin className="w-6 h-6 text-[#C9A96A]" />
                </div>
                <div>
                    <p className="text-xs uppercase tracking-widest text-[#C9A96A]/60 font-bold mb-1">Location</p>
                    <p className="text-lg font-bold text-slate-900">{location}</p>
                </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-[14px] p-6 hover:border-[#C9A96A]/50 transition-colors">
                <div className="p-3 bg-white rounded-full border border-slate-200">
                    <CircleDollarSign className="w-6 h-6 text-[#C9A96A]" />
                </div>
                <div>
                    <p className="text-xs uppercase tracking-widest text-[#C9A96A]/60 font-bold mb-1">Budget</p>
                    <p className="text-lg font-bold text-slate-900">{budget}</p>
                </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-[14px] p-6 hover:border-[#C9A96A]/50 transition-colors">
                <div className="p-3 bg-white rounded-full border border-slate-200">
                    <CalendarDays className="w-6 h-6 text-[#C9A96A]" />
                </div>
                <div>
                    <p className="text-xs uppercase tracking-widest text-[#C9A96A]/60 font-bold mb-1">Duration</p>
                    <p className="text-lg font-bold text-slate-900">{duration}</p>
                </div>
            </div>
        </motion.div>
    );
}
