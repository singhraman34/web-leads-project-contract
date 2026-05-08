"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowRight, Calculator } from "lucide-react";

export default function QuickEstimateSection() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/get-quote");
    };

    return (
        <section className="section-vertical-spacing bg-white border-t border-slate-100">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#faf7f2] rounded-full text-[#C9A96A] mb-6 border border-[#C9A96A]/20">
                            <Calculator size={18} />
                            <span className="text-xs font-black uppercase tracking-widest">Pricing Tool</span>
                        </div>
                        <h2 className="section-heading text-slate-900 mb-8 leading-tight">
                            Get a Project Estimate <br /> 
                            <span className="text-[#C9A96A]">in 60 Seconds</span>
                        </h2>
                        <p className="body-text text-slate-600 max-w-xl leading-relaxed mb-8">
                            Provide your project details and area size to receive a preliminary budget estimate and engineering feasibility report from our specialists.
                        </p>
                    </motion.div>

                    {/* Right Side: Quick Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white border border-slate-100 rounded-[24px] p-8 lg:p-12 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A96A]/5 -mr-16 -mt-16 rounded-full" />
                        
                        <form autoComplete="off" onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest px-1">Project Type</label>
                                    <select className="w-full h-14 bg-slate-50 border border-slate-200 rounded-xl px-4 text-slate-900 focus:outline-none focus:border-[#C9A96A] transition-colors appearance-none cursor-pointer">
                                        <option>Commercial Construction</option>
                                        <option>Luxury Residential</option>
                                        <option>Industrial Facility</option>
                                        <option>Interior Architecture</option>
                                        <option>Renovation</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest px-1">Area Size (sq ft)</label>
                                    <input 
                                        type="number" 
                                        name="lead_area_size_field"
                                        autoComplete="new-password"
                                        placeholder="e.g. 5000"
                                        className="w-full h-14 bg-slate-50 border border-slate-200 rounded-xl px-4 text-slate-900 focus:outline-none focus:border-[#C9A96A] transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest px-1">Location</label>
                                    <input 
                                        type="text" 
                                        name="lead_location_field"
                                        autoComplete="new-password"
                                        placeholder="e.g. South Mumbai"
                                        className="w-full h-14 bg-slate-50 border border-slate-200 rounded-xl px-4 text-slate-900 focus:outline-none focus:border-[#C9A96A] transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest px-1">Budget Range</label>
                                    <select className="w-full h-14 bg-slate-50 border border-slate-200 rounded-xl px-4 text-slate-900 focus:outline-none focus:border-[#C9A96A] transition-colors appearance-none cursor-pointer">
                                        <option>₹50L - ₹1Cr</option>
                                        <option>₹1Cr - ₹5Cr</option>
                                        <option>₹5Cr - ₹25Cr</option>
                                        <option>₹25Cr+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase text-slate-400 tracking-widest px-1">Timeline Goals</label>
                                <select className="w-full h-14 bg-slate-50 border border-slate-200 rounded-xl px-4 text-slate-900 focus:outline-none focus:border-[#C9A96A] transition-colors appearance-none cursor-pointer">
                                    <option>Immediate (1-3 Months)</option>
                                    <option>Planned (3-6 Months)</option>
                                    <option>Strategic (6-12+ Months)</option>
                                </select>
                            </div>

                            <Button type="submit" className="w-full h-16 text-lg font-bold uppercase tracking-widest shadow-xl shadow-[#C9A96A]/20 mt-4 group">
                                Calculate Initial Estimate <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
