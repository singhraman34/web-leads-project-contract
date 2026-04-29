"use client";

import { motion } from "framer-motion";
import { Testimonial } from "@/types/testimonial";
import { Container } from "@/components/ui/Container";
import { Play } from "lucide-react";
import Image from "next/image";

export default function VideoTestimonialSection({ testimonials }: { testimonials: Testimonial[] }) {
    const videoTestimonials = testimonials.filter(t => t.videoUrl);

    if (videoTestimonials.length === 0) return null;

    return (
        <section className="section-vertical-spacing bg-white border-t border-slate-200">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="section-heading mb-4 text-slate-900">Video Case Studies</h2>
                    <p className="body-text text-[#C9A96A] uppercase tracking-[0.2em] text-[10px] font-black">Watch our corporate and luxury clients speak</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {videoTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative rounded-[14px] overflow-hidden border border-slate-200 bg-white aspect-video cursor-pointer"
                        >
                            {/* Background image for video placeholder */}
                            <div className="absolute inset-0">
                                <Image
                                    src={index === 0 ? "/images/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge.jpg" : "/images/ai-generated-modern-styled-entryway.jpg"}
                                    alt={testimonial.clientName}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="w-20 h-20 bg-[#C9A96A] rounded-full flex items-center justify-center pl-1 shadow-2xl transition-transform group-hover:scale-110">
                                    <Play className="w-10 h-10 text-white fill-current" />
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent z-10 transition-transform group-hover:translate-y-2">
                                <h3 className="text-2xl font-bold text-white mb-2 shadow-black/50">{testimonial.clientName}</h3>
                                {testimonial.company && (
                                    <p className="text-[#C9A96A] font-black uppercase tracking-[0.2em] text-[10px] mb-2">{testimonial.company}</p>
                                )}
                                <p className="text-slate-300 italic text-sm line-clamp-2">&quot;{testimonial.quote}&quot;</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
