"use client";

import { motion } from "framer-motion";
import { TimelineEvent } from "@/types/about";
import { Container } from "@/components/ui/Container";

export default function Timeline({ events }: { events: TimelineEvent[] }) {
    return (
        <section className="section-vertical-spacing bg-slate-50 border-y border-slate-200">
            <Container>
                <div className="text-center mb-20">
                    <h2 className="section-heading mb-6 text-slate-900">Our Journey</h2>
                    <p className="text-[#C9A96A] max-w-2xl mx-auto uppercase tracking-widest text-sm font-bold">From foundation to enterprise leadership</p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2" />

                    {events.map((event, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
                            >
                                {/* Circle Marker */}
                                <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-[#C9A96A] rounded-full transform -translate-x-1/2 flex items-center justify-center border-4 border-slate-50 shadow-md shadow-[#C9A96A]/20 z-10" />

                                {/* Content Box */}
                                <div className={`w-full md:w-5/12 pl-20 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                                    <h3 className="text-3xl font-bold text-[#C9A96A] mb-2 tracking-tighter">
                                        {event.year}
                                    </h3>
                                    <h4 className="sub-heading text-slate-900 mb-4 uppercase tracking-wider">
                                        {event.title}
                                    </h4>
                                    <p className="body-text text-slate-600 leading-relaxed bg-white p-6 rounded-[14px] border border-slate-200 shadow-sm">
                                        {event.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
