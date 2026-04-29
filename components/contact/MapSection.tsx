"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

import Image from "next/image";

export default function MapSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background cinematic elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            
            <Container>
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full aspect-[21/9] md:aspect-[21/5] bg-slate-50 rounded-[40px] overflow-hidden border border-slate-100 relative shadow-2xl group cursor-pointer"
                >
                    {/* Cinematic Map Layer */}
                    <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
                        <Image 
                            src="/images/mumbai-hq-premium.png"
                            alt="Map Location Background"
                            fill
                            sizes="100vw"
                            className="object-cover"
                            loading="lazy"
                        />
                    </div>
                    <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="px-8 py-4 bg-white/95 backdrop-blur-xl border border-white text-slate-900 font-black tracking-[0.2em] uppercase rounded-full shadow-2xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-5 duration-1000"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                            </span>
                            Elite Contractors HQ
                        </motion.div>
                    </div>

                    {/* Bottom Info Overlay */}
                    <div className="absolute bottom-10 left-10 md:left-20 text-white z-10">
                        <p className="text-white/60 font-bold uppercase tracking-widest text-xs mb-2">Corporate Destination</p>
                        <h3 className="text-2xl md:text-3xl font-bold">BKC, Mumbai</h3>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
