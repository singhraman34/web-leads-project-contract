"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Testimonial } from "@/types/testimonial";
import StarBreakdown from "./StarBreakdown";
import { Star, Users } from "lucide-react";

export default function RatingSummary({ testimonials }: { testimonials: Testimonial[] }) {
    const total = testimonials.length;

    // Calculate average rating strictly
    const avgRating = total > 0
        ? testimonials.reduce((acc, t) => acc + t.rating, 0) / total
        : 0;

    // Calculate star distribution specifically
    const breakdown = [5, 4, 3, 2, 1].map(starValue => {
        return {
            star: starValue,
            count: testimonials.filter(t => t.rating === starValue).length
        };
    });

    return (
        <section className="section-vertical-spacing bg-white border-b border-slate-200">
            <Container>
                <div className="bg-white max-w-5xl mx-auto rounded-[14px] border border-slate-100 p-8 md:p-16 flex flex-col md:flex-row items-center gap-16 md:gap-24 shadow-xl">

                    {/* Left side metrics */}
                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-[#C9A96A]/10 px-6 py-2 border border-[#C9A96A]/20 text-[#C9A96A] text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-8 flex items-center gap-3"
                        >
                            <Users className="w-4 h-4" />
                            <span>Real Client Feedback</span>
                        </motion.div>

                        <div className="flex items-end gap-4 mb-4">
                            <h2 className="text-7xl md:text-8xl font-black text-slate-900 leading-none">{avgRating.toFixed(1)}</h2>
                            <span className="text-2xl md:text-3xl font-bold text-slate-900/40 mb-2">/ 5</span>
                        </div>

                        <div className="flex gap-1 mb-6 text-[#C9A96A]">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    fill={i < Math.round(avgRating) ? 'currentColor' : 'none'}
                                    className={`w-8 h-8 ${i < Math.round(avgRating) ? 'text-[#C9A96A]' : 'text-slate-200'}`}
                                />
                            ))}
                        </div>

                        <p className="body-text text-slate-600 uppercase tracking-widest text-xs font-bold">Based on <span className="text-[#C9A96A]">{total}</span> VERIFIED Reviews</p>
                    </div>

                    {/* Right side breakdown */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full space-y-4"
                    >
                        {breakdown.map((b) => (
                            <StarBreakdown
                                key={b.star}
                                star={b.star}
                                count={b.count}
                                total={total}
                            />
                        ))}
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
