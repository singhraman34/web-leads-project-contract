"use client";

import { motion } from "framer-motion";
import { Testimonial } from "@/types/testimonial";
import { Star, Quote, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TestimonialCard({ testimonial, index }: { testimonial: Testimonial, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
            className="group bg-white rounded-[14px] p-8 flex flex-col justify-between transition-all duration-300 border border-slate-100 hover:border-[#C9A96A]/50 relative overflow-hidden h-full shadow-sm hover:shadow-xl"
        >
            <div className="absolute -top-6 -right-6 text-[#C9A96A] opacity-10">
                <Quote size={120} />
            </div>

            <div className="relative z-10 w-full mb-8 flex-grow">
                <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            fill={i < testimonial.rating ? "currentColor" : "none"}
                            className={`w-5 h-5 ${i < testimonial.rating ? "text-[#C9A96A]" : "text-slate-200"}`}
                        />
                    ))}
                </div>

                <p className="body-text text-slate-700 italic line-clamp-6">
                    &quot;{testimonial.quote}&quot;
                </p>
            </div>

            <div className="relative z-10 w-full pt-6 border-t border-slate-200/30 mt-auto">
                <h4 className="font-bold text-slate-900 text-xl mb-1 group-hover:text-[#C9A96A] transition-colors">{testimonial.clientName}</h4>
                {testimonial.company && (
                    <p className="text-[#C9A96A] text-[10px] font-black uppercase tracking-widest mb-3">
                        {testimonial.company}
                    </p>
                )}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
                    <div className="flex items-center gap-4 text-slate-900/50 text-xs font-medium">
                        {testimonial.area && (
                            <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200">
                                <MapPin size={12} className="text-[#C9A96A]" /> {testimonial.area}
                            </span>
                        )}
                        <span>{testimonial.date}</span>
                    </div>

                    {testimonial.projectSlug && (
                        <Link href={`/projects/${testimonial.projectSlug}`}>
                            <Button variant="ghost" className="text-[#C9A96A] hover:text-[#B5966B] p-0 h-auto font-bold uppercase tracking-widest text-[10px]">
                                View Build →
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
