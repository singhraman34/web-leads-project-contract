"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { FounderData } from "@/types/about";

export default function FounderSection({ founder }: { founder: FounderData }) {
    return (
        <section className="section-vertical-spacing bg-white overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#C9A96A] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">
                                Leadership & Vision
                            </span>
                            <h2 className="section-heading mb-8 text-slate-900">
                                Driving Excellence <br />
                                Through <span className="text-[#C9A96A]">Engineering Precision.</span>
                            </h2>
                            
                            <div className="relative mb-10">
                                <span className="absolute -left-6 top-0 text-[#C9A96A] text-6xl opacity-20 font-serif">&ldquo;</span>
                                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium italic">
                                    {founder.message}
                                </p>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="h-16 w-[2px] bg-[#C9A96A]"></div>
                                <div>
                                    <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                                        {founder.name}
                                    </h4>
                                    <p className="text-[#C9A96A] font-bold uppercase tracking-widest text-sm">
                                        {founder.title}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Portrait Image */}
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, x: 30 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]"
                        >
                            <Image
                                src={founder.image}
                                alt={founder.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            
                            {/* Experience Badge */}
                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-[#C9A96A] font-black text-3xl leading-none mb-1">{founder.yearsOfExperience}</p>
                                        <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Years of Expertise</p>
                                    </div>
                                    <div className="h-8 w-[1px] bg-slate-200"></div>
                                    <div className="text-right">
                                        <p className="text-slate-900 font-black text-xl leading-none mb-1">Elite</p>
                                        <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Leadership</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
