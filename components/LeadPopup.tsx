"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, ChevronRight, CheckCircle2, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { LocationSearch } from "./contact/LocationSearch";
import { Button } from "@/components/ui/button";

function usePopupTrigger() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const isSubmitted = localStorage.getItem("leadSubmitted") === "true";
        const isShownSession = sessionStorage.getItem("popupShown") === "true";

        if (isSubmitted || isShownSession) return;

        let triggered = false;

        const triggerPopup = () => {
            if (triggered) return;
            triggered = true;
            sessionStorage.setItem("popupShown", "true");
            setIsVisible(true);
            cleanup();
        };

        const timer = setTimeout(triggerPopup, 8000);

        const handleScroll = () => {
            const scrollDepth = window.scrollY + window.innerHeight;
            const totalHeight = document.body.scrollHeight;
            if (scrollDepth >= totalHeight * 0.5) {
                triggerPopup();
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0) {
                triggerPopup();
            }
        };
        document.addEventListener("mouseleave", handleMouseLeave);

        function cleanup() {
            clearTimeout(timer);
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mouseleave", handleMouseLeave);
        }

        return cleanup;
    }, []);

    return { isVisible, setIsVisible };
}

export default function LeadPopup() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const { isVisible, setIsVisible } = usePopupTrigger();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [data, setData] = useState({
        name: "",
        phone: "",
        location: ""
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    const isFormValid = data.name.trim() !== "" && data.phone.length === 10 && data.location !== "";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid || isSubmitting) return;

        setIsSubmitting(true);
        try {
            sessionStorage.setItem("leadPopupData", JSON.stringify(data));

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: data.name,
                    phone: data.phone,
                    area: data.location,
                    status: "partial"
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to submit partial lead");
            }

            localStorage.setItem("leadSubmitted", "true");
            setIsSubmitted(true);
        } catch (error) {
            console.error("Popup submission failed", error);
            setSubmitError(error instanceof Error ? error.message : "Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-[420px] bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] overflow-hidden"
                    >
                        {!isSubmitted ? (
                            <>
                                <button
                                    onClick={handleClose}
                                    className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors z-10"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <div className="p-8 md:p-10">
                                    <div className="mb-8">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Sparkles className="w-4 h-4 text-primary" />
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Limited Offer</span>
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
                                            Get Your Free <br />Design Consultation
                                        </h3>
                                        <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mt-2">Book a slot with our top architects</p>
                                    </div>

                                    <form autoComplete="off" onSubmit={handleSubmit} className="space-y-5">
                                        <div className="space-y-2">
                                            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                                                <User className="w-3 h-3" /> Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="lead_name_field"
                                                autoComplete="new-password"
                                                placeholder="John Doe"
                                                required
                                                value={data.name}
                                                onChange={(e) => setData({ ...data, name: e.target.value })}
                                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold focus:bg-white focus:border-slate-900 transition-all outline-none text-sm"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                                                <Phone className="w-3 h-3" /> Phone Number
                                            </label>
                                            <div className="flex items-center w-full bg-slate-50 border border-slate-200 rounded-2xl focus-within:bg-white focus-within:border-slate-900 transition-all overflow-hidden">
                                                <span className="pl-5 pr-2 py-4 font-bold text-slate-900 text-sm">+91</span>
                                                <input
                                                    type="tel"
                                                    name="lead_phone_field"
                                                    autoComplete="new-password"
                                                    placeholder="9876543210"
                                                    required
                                                    value={data.phone}
                                                    onChange={(e) => setData({ ...data, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                                                    className="w-full pr-5 py-4 bg-transparent font-bold outline-none text-sm"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                                                <CheckCircle2 className="w-3 h-3" /> Location
                                            </label>
                                            <LocationSearch
                                                value={data.location}
                                                onChange={(v) => setData({ ...data, location: v })}
                                                placeholder="Search, select, or enter your location"
                                            />
                                        </div>

                                        {submitError && (
                                            <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-[10px] font-bold flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-red-600 rounded-full" /> {submitError}
                                            </div>
                                        )}

                                        <div className="pt-4">
                                            <Button
                                                type="submit"
                                                disabled={!isFormValid || isSubmitting}
                                                className={`w-full h-14 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] shadow-xl transition-all ${isFormValid && !isSubmitting ? "bg-primary text-white hover:scale-[1.02]" : "bg-slate-200 text-slate-400 opacity-50 cursor-not-allowed"}`}
                                            >
                                                {isSubmitting ? "Sending..." : "Get Free Design Plan"}
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </>
                        ) : (
                            <div className="p-10 text-center flex flex-col items-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/30"
                                >
                                    <CheckCircle2 className="w-10 h-10 text-white" />
                                </motion.div>
                                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-2">🎉 Thanks!</h3>
                                <p className="text-slate-600 font-bold text-sm mb-8">Our expert will contact you shortly</p>

                                <Button
                                    onClick={() => {
                                        setIsVisible(false);
                                        router.push("/get-quote");
                                    }}
                                    className="w-full h-14 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[11px] hover:bg-slate-800 flex items-center justify-center gap-2"
                                >
                                    Continue to complete your design plan <ChevronRight className="w-4 h-4" />
                                </Button>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
