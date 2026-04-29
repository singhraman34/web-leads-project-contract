
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-white px-6">
            <div className="max-w-xl w-full text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-[#C9A96A] font-black uppercase tracking-[0.4em] text-xs mb-6 block">
                        Error 404
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter">
                        Lost in <br /> Transition.
                    </h1>
                    <p className="text-slate-500 text-lg md:text-xl mb-12 font-medium leading-relaxed">
                        The page you are looking for has been moved, removed, or never existed in Mumbai&apos;s premium landscape.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/">
                            <Button className="h-16 px-10 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase tracking-widest text-[10px] shadow-2xl transition-all">
                                <Home className="mr-2 w-4 h-4" /> Back to Home
                            </Button>
                        </Link>
                        <button 
                            onClick={() => window.history.back()}
                            className="h-16 px-10 rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-all flex items-center"
                        >
                            <ArrowLeft className="mr-2 w-4 h-4" /> Go Back
                        </button>
                    </div>
                </motion.div>
                
                {/* Decorative Element */}
                <div className="mt-20 opacity-5">
                    <span className="text-[120px] font-black text-slate-900 select-none">404</span>
                </div>
            </div>
        </div>
    );
}
