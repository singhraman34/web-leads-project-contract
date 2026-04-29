"use client";

import { motion } from "framer-motion";

export default function ProcessStepper({ steps }: { steps: string[] }) {
    return (
        <div className="relative mt-12 mb-16">
            <h3 className="sub-heading text-slate-900 mb-8">Our Execution Process</h3>

            <div className="relative">
                {/* Horizontal line for desktop, vertical for mobile */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 md:left-0 md:right-0 md:top-5 md:bottom-auto md:w-full md:h-0.5" />

                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex md:flex-col items-start md:items-center gap-6 md:gap-4 flex-1"
                        >
                            {/* Number Circle */}
                            <div className="relative z-10 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#C9A96A] text-white font-bold text-sm border-4 border-white shrink-0 shadow-lg shadow-[#C9A96A]/20">
                                {index + 1}
                            </div>

                            {/* Content */}
                            <div className="md:text-center mt-1 md:mt-0">
                                <p className="text-slate-900 font-semibold text-lg md:text-base">{step}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
