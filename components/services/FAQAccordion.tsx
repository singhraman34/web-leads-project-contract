"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ServiceFAQ } from "@/types/service";
import { cn } from "@/lib/utils";

export default function FAQAccordion({ faqs }: { faqs: ServiceFAQ[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="mt-16 bg-slate-50 border border-slate-200 p-8 rounded-[14px]">
            <h3 className="sub-heading text-slate-900 mb-8">Frequently Asked Questions</h3>

            <div className="space-y-4">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={index} className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none hover:bg-slate-100/20 transition-colors"
                                aria-expanded={isOpen}
                                aria-controls={`faq-content-${index}`}
                            >
                                <span className="font-semibold text-slate-900 text-lg">{faq.question}</span>
                                <ChevronDown className={cn("text-[#C9A96A] transition-transform duration-300", isOpen ? "rotate-180" : "rotate-0")} />
                            </button>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        id={`faq-content-${index}`}
                                        role="region"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-4 pt-2 text-slate-600 leading-relaxed border-t border-slate-200/30 bg-[#C9A96A]/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
