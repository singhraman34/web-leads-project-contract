"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ClipboardList } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/constants";

export default function FloatingContactBar() {
    const whatsappNumber = "+919876543210"; // Placeholder for Mumbai context
    const whatsappMessage = encodeURIComponent("Hello, I want to discuss a construction project.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <>
            {/* Desktop: Fixed Right Stack */}
            <div className="hidden lg:flex fixed right-8 bottom-12 flex-col gap-4 z-50">
                <motion.a
                    href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9]/g, '') || '18003548328'}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.1, x: -5 }}
                    transition={{ duration: 0.25 }}
                    className="w-14 h-14 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-xl border border-slate-100 group transition-all"
                    title="Call Now"
                >
                    <Phone size={24} className="group-hover:text-[#C9A96A] transition-colors" />
                </motion.a>

                <motion.a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.1, x: -5 }}
                    transition={{ duration: 0.25, delay: 0.1 }}
                    className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl group transition-all"
                    title="WhatsApp Chat"
                >
                    <MessageCircle size={24} className="fill-current" />
                </motion.a>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.1, x: -5 }}
                    transition={{ duration: 0.25, delay: 0.2 }}
                >
                    <Link
                        href="/get-quote"
                        className="w-14 h-14 bg-[#C9A96A] text-white rounded-full flex items-center justify-center shadow-xl group transition-all"
                        title="Get Quote"
                    >
                        <ClipboardList size={24} />
                    </Link>
                </motion.div>
            </div>

            {/* Mobile: Bottom Sticky Bar */}
            <div className="lg:hidden fixed bottom-6 left-6 right-6 z-50 flex items-center justify-between gap-4">
                <motion.a
                    href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9]/g, '') || '18003548328'}`}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="flex-1 bg-white text-slate-900 h-14 rounded-2xl flex items-center justify-center gap-2 shadow-2xl border border-slate-100 font-bold active:scale-95 transition-all"
                >
                    <Phone size={20} />
                    <span>Call</span>
                </motion.a>

                <motion.a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex-1 bg-[#25D366] text-white h-14 rounded-2xl flex items-center justify-center gap-2 shadow-2xl font-bold active:scale-95 transition-all"
                >
                    <MessageCircle size={20} className="fill-current" />
                    <span>Chat</span>
                </motion.a>

                <motion.div
                    className="flex-1"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <Link
                        href="/get-quote"
                        className="bg-[#C9A96A] text-white h-14 rounded-2xl flex items-center justify-center gap-2 shadow-2xl font-bold active:scale-95 transition-all"
                    >
                        <ClipboardList size={20} />
                        <span>Quote</span>
                    </Link>
                </motion.div>
            </div>
        </>
    );
}
