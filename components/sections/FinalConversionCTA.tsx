"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export default function FinalConversionCTA() {
    return (
        <section className="section-vertical-spacing bg-slate-950 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A96A]/10 rounded-full -mr-64 -mt-64 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C9A96A]/5 rounded-full -ml-48 -mb-48 blur-[80px]" />
            
            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#C9A96A] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">
                            Take the Next Step
                        </span>
                        <h2 className="section-heading text-white mb-8 text-4xl md:text-5xl lg:text-7xl leading-[1.1]">
                            Ready to Start <br /> 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A96A] via-[#EAD0A8] to-[#C9A96A]">Your Project?</span>
                        </h2>
                        <p className="body-text text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 text-lg md:text-xl">
                            Schedule a high-level consultation with our senior engineering team to discuss your project scale and feasibility.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/get-quote" className="w-full sm:w-auto">
                                <Button className="w-full h-16 px-12 text-lg font-bold uppercase tracking-widest shadow-2xl shadow-[#C9A96A]/20 flex items-center gap-3">
                                    <Calendar size={20} />
                                    Book Consultation
                                </Button>
                            </Link>
                            <Link href="/get-quote" className="w-full sm:w-auto">
                                <Button variant="outline" className="w-full h-16 px-12 text-white border-white/20 hover:bg-white hover:text-slate-950 text-lg font-bold uppercase tracking-widest flex items-center gap-3 bg-transparent">
                                    <MapPin size={20} />
                                    Request Site Visit
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
