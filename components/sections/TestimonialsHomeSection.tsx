"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { TESTIMONIALS_DATA } from "@/lib/data/testimonials";
import { Container } from "@/components/ui/Container";
import { Star, Play, Quote as QuoteIcon, ChevronLeft, ChevronRight, User } from "lucide-react";
import Image from "next/image";

const TRUST_STATS = [
    { label: "Client Satisfaction", value: "98%", icon: Star },
    { label: "Repeat Clients", value: "70%", icon: User },
    { label: "On-Time Projects", value: "100%", icon: QuoteIcon },
];

export default function TestimonialsHomeSection() {
    const [currentIdx, setCurrentIdx] = useState(0);
    const visibleTestimonials = TESTIMONIALS_DATA.slice(0, 6);

    const nextIdx = useCallback(() => setCurrentIdx((prev) => (prev + 1) % visibleTestimonials.length), [visibleTestimonials.length]);
    const prevIdx = () => setCurrentIdx((prev) => (prev - 1 + visibleTestimonials.length) % visibleTestimonials.length);

    useEffect(() => {
        const timer = setInterval(nextIdx, 6000);
        return () => clearInterval(timer);
    }, [nextIdx]);

    return (
        <section className="section-vertical-spacing bg-white">
            <Container>
                {/* 1. Header */}
                <div className="flex flex-col items-center justify-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-[#C9A96A] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
                            Client Stories
                        </span>
                        <h2 className="section-heading text-slate-900 mb-6 font-bold">
                            What Our Clients Say
                        </h2>
                        <div className="w-24 h-1 bg-[#C9A96A] rounded-full opacity-30 mx-auto" />
                    </motion.div>
                </div>

                {/* 2. Featured Video Testimonial */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-slate-950 rounded-[24px] overflow-hidden mb-24 shadow-2xl relative"
                >
                    {/* Video Placeholder */}
                    <div className="relative aspect-video lg:aspect-auto group overflow-hidden cursor-pointer">
                        <Image
                            src="/images/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge.jpg"
                            alt="Video Testimonial"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-10 transition-transform group-hover:scale-110">
                            <div className="w-20 h-20 bg-[#C9A96A] rounded-full flex items-center justify-center pl-1 shadow-2xl shadow-[#C9A96A]/30">
                                <Play className="w-10 h-10 text-white fill-current" />
                            </div>
                        </div>
                    </div>

                    {/* Featured Quote Summary */}
                    <div className="p-10 lg:p-16 flex flex-col justify-center relative">
                        <QuoteIcon className="absolute top-8 right-8 text-[#C9A96A] opacity-20" size={120} />
                        <div className="flex gap-1 mb-6 text-[#C9A96A]">
                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                        <h3 className="section-heading text-2xl md:text-3xl text-white mb-6 leading-relaxed italic">
                            &quot;Elite Contractors completely transformed our 50,000 sq ft office in Andheri. The execution was flawless, exceeding our expectations at every level.&quot;
                        </h3>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-[#C9A96A]/20 flex items-center justify-center border border-[#C9A96A]/30">
                                <User className="text-[#C9A96A]" size={28} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-xl">Rahul Desai</h4>
                                <p className="text-[#C9A96A] uppercase tracking-[0.2em] text-xs font-black">Desai Holdings • Group CEO</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 3. Slider Section */}
                <div className="relative mb-24 min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIdx}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="bg-[#faf7f2]/50 border border-slate-100 p-10 md:p-16 rounded-[24px] shadow-sm relative overflow-hidden flex flex-col items-center text-center"
                        >
                            <QuoteIcon className="text-[#C9A96A] opacity-10 mb-8" size={80} />
                            
                            <div className="flex gap-1 mb-8 text-[#C9A96A]">
                                {[...Array(visibleTestimonials[currentIdx].rating)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                            </div>

                            <p className="section-heading text-xl md:text-2xl lg:text-3xl text-slate-800 italic leading-relaxed mb-12 max-w-4xl mx-auto">
                                &quot;{visibleTestimonials[currentIdx].quote}&quot;
                            </p>

                            <div className="flex flex-col items-center">
                                <h4 className="font-black text-slate-900 text-2xl mb-1 uppercase tracking-tight">{visibleTestimonials[currentIdx].clientName}</h4>
                                <span className="text-[#C9A96A] font-black uppercase tracking-[0.3em] text-[10px]">{visibleTestimonials[currentIdx].company || "Luxury Homeowner"}</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4 md:-px-12 pointer-events-none">
                        <button onClick={prevIdx} aria-label="Previous testimonial" className="w-14 h-14 bg-white shadow-xl hover:bg-[#C9A96A] hover:text-white rounded-full flex items-center justify-center border border-slate-100 transition-all pointer-events-auto hover:scale-110 active:scale-95 group">
                            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button onClick={nextIdx} aria-label="Next testimonial" className="w-14 h-14 bg-white shadow-xl hover:bg-[#C9A96A] hover:text-white rounded-full flex items-center justify-center border border-slate-100 transition-all pointer-events-auto hover:scale-110 active:scale-95 group">
                            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-3 mt-10">
                        {visibleTestimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIdx(i)}
                                aria-label={`Go to testimonial ${i + 1}`}
                                className={`h-2 rounded-full transition-all duration-300 ${currentIdx === i ? 'w-10 bg-[#C9A96A]' : 'w-2 bg-slate-200 hover:bg-slate-300'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* 4. Trust Indicator Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {TRUST_STATS.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="flex flex-col items-center justify-center p-8 bg-white border border-slate-100 rounded-[16px] shadow-sm hover:shadow-xl hover:border-[#C9A96A]/20 transition-all text-center group"
                            >
                                <div className="p-4 bg-[#faf7f2] rounded-full text-[#C9A96A] mb-4 group-hover:bg-[#C9A96A] group-hover:text-white transition-colors">
                                    <Icon size={24} />
                                </div>
                                <h5 className="text-3xl font-black text-slate-900 mb-1">{stat.value}</h5>
                                <p className="body-text text-sm uppercase tracking-[0.2em] font-black text-slate-400 group-hover:text-slate-600 transition-colors">{stat.label}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
