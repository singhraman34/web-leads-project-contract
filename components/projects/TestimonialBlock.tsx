"use client";

import { motion } from "framer-motion";
import { ProjectTestimonial } from "@/types/project";
import { Quote, Star } from "lucide-react";

export default function TestimonialBlock({ testimonial }: { testimonial: ProjectTestimonial }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 relative"
        >
            <div className="absolute -top-6 -left-6 z-0 opacity-10 text-[#C9A96A]">
                <Quote size={80} />
            </div>

            <div className="relative z-10 bg-slate-50/50 border border-slate-200 rounded-[14px] p-10 md:p-16 backdrop-blur-sm shadow-xl hover:border-[#C9A96A]/50 transition-colors">
                <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            fill={i < testimonial.rating ? "currentColor" : "none"}
                            className={`w-6 h-6 ${i < testimonial.rating ? "text-[#C9A96A]" : "text-slate-300"}`}
                        />
                    ))}
                </div>

                <h3 className="section-heading italic font-light leading-relaxed text-slate-900 mb-8">
                    &quot;{testimonial.quote}&quot;
                </h3>

                <div className="flex items-center gap-4">
                    <span className="w-12 h-[2px] bg-[#C9A96A]"></span>
                    <p className="font-bold text-lg uppercase tracking-widest text-[#C9A96A]">{testimonial.client}</p>
                </div>
            </div>
        </motion.div>
    );
}
