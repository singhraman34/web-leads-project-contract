"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
    ChevronRight, Layout, CheckCircle2,
    Calendar, MapPin, MessageSquare,
    Tag, User, Phone, Mail,
    Check, Sparkles, Building2, ArrowLeft
} from "lucide-react";
import { SERVICES_DATA } from "@/lib/data/services";
import { Button } from "@/components/ui/button";
import { LocationSearch } from "./LocationSearch";


// --- Types ---
interface FormData {
    services: string[];
    propertyType: string;
    stylePreference: string;
    propertyStatus: string;
    budget: string;
    timeline: string;
    area: string;
    description: string;
    name: string;
    phone: string;
    email: string;
    fileName: string;
    botField: string;
}

const initialData: FormData = {
    services: [],
    propertyType: "",
    stylePreference: "",
    propertyStatus: "",
    budget: "",
    timeline: "",
    area: "",
    description: "",
    name: "",
    phone: "",
    email: "",
    fileName: "",
    botField: ""
};



// --- Funnel Constants ---
const PROPERTY_TYPES = ["1 BHK", "2 BHK", "3 BHK", "Villa", "Office / Commercial", "Other"];
const STYLE_PREFERENCES = ["Modern", "Luxury", "Minimal", "Classic", "Scandinavian", "Other"];
const PROPERTY_STATUS = ["New Property", "Under Construction", "Renovation", "Other"];
const TIMELINE_OPTIONS = ["Need urgently", "Within 1 month", "1–3 months", "3–6 months", "Just exploring"];
const BUDGET_OPTIONS = ["Under 5L", "5L - 15L", "15L - 50L", "50L+", "Other"];
const PRIMARY_SERVICES = ["Interior", "Renovation", "Construction", "Painting", "Turnkey Projects", "Other"];

// --- Animation Variants ---
const stepVariants: Variants = {
    initial: (direction: number) => ({
        x: direction > 0 ? 50 : -50,
        opacity: 0
    }),
    animate: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -50 : 50,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
    })
};

// --- Components ---

function FormContent() {
    const searchParams = useSearchParams();
    const serviceParam = searchParams.get("service");
    const projectParam = searchParams.get("project");

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [mounted, setMounted] = useState(false);
    const [hydrated, setHydrated] = useState(false);
    const [data, setData] = useState<FormData>(initialData);
    const [step, setStep] = useState<1 | 2>(1);
    const [direction, setDirection] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [otherValues, setOtherValues] = useState<Record<string, string>>({});

    useEffect(() => {
        setMounted(true);

        // 1. Hydration Logic
        if (typeof window !== "undefined") {
            const popupData = sessionStorage.getItem("leadPopupData");
            if (popupData) {
                try {
                    const parsed = JSON.parse(popupData);
                    setData(prev => ({
                        ...prev,
                        name: parsed.name || prev.name || "",
                        phone: parsed.phone || prev.phone || "",
                        area: parsed.location || parsed.area || prev.area || ""
                    }));
                } catch (err) {
                    console.error("Popup hydration failed", err);
                }
            }
            setHydrated(true);
        }

        // 2. Auto-scroll Logic
        const hasScrolled = sessionStorage.getItem("quote_auto_scrolled");
        if (!hasScrolled) {
            const timer = setTimeout(() => {
                if (window.scrollY < 100) {
                    const el = document.getElementById("quote-form-section");
                    if (el) {
                        const y = el.getBoundingClientRect().top + window.scrollY - 100;
                        window.scrollTo({ top: y, behavior: "smooth" });
                    }
                }
                sessionStorage.setItem("quote_auto_scrolled", "true");
            }, 400);
            return () => clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        if (serviceParam) {
            const matchingService = SERVICES_DATA.find(s => s.slug === serviceParam);
            if (matchingService) setData(prev => ({ ...prev, services: [matchingService.title] }));
        }
        if (projectParam) setData(prev => ({ ...prev, description: `Inquiry: ${projectParam}\n` }));
    }, [serviceParam, projectParam]);

    useEffect(() => {
        if (typeof window === "undefined") return;

        // Prevent browser cache restore (back-forward cache)
        const handlePageShow = (event: PageTransitionEvent) => {
            if (event.persisted) {
                window.location.reload();
            }
        };

        window.history.replaceState({}, document.title);
        window.addEventListener("pageshow", handlePageShow);

        return () => {
            window.removeEventListener("pageshow", handlePageShow);
        };
    }, []);

    const updateData = (fields: Partial<FormData>) => setData(prev => ({ ...prev, ...fields }));

    const toggleService = (service: string) => {
        setData(prev => {
            const services = prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service];
            return { ...prev, services };
        });
    };

    const isStep1Complete = hydrated && data.name.trim() !== "" && data.phone.length === 10 && data.area !== "";
    const isStep2Complete = hydrated && data.services.length > 0;

    const totalSteps = 2;
    const progress = (step / totalSteps) * 100;

    const scrollToForm = () => {
        const el = document.getElementById("quote-form-section");
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleBasicSubmit = async () => {
        if (!isStep1Complete || isSubmitting) return;

        setIsSubmitting(true);
        try {
            setDirection(1);
            setStep(2);
            setTimeout(scrollToForm, 10);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleNext = () => {
        if (step < totalSteps) {
            setDirection(1);
            setStep(prev => (prev + 1) as 1 | 2);
            setTimeout(scrollToForm, 10);
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setDirection(-1);
            setStep(prev => (prev - 1) as 1 | 2);
            setTimeout(scrollToForm, 10);
        }
    };

    const handleFinalSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 1. Prepare cleaned data object
        const cleanedData = { ...data };

        // Helper to merge 'Other' values
        const getMergedValue = (field: keyof FormData, val: string) => {
            if (val === "Other" && otherValues[field]) {
                return otherValues[field];
            }
            return val || "Not specified";
        };

        // Apply "Other" merging and fallbacks
        cleanedData.propertyType = getMergedValue("propertyType", data.propertyType);
        cleanedData.budget = getMergedValue("budget", data.budget);
        cleanedData.stylePreference = getMergedValue("stylePreference", data.stylePreference);
        cleanedData.propertyStatus = getMergedValue("propertyStatus", data.propertyStatus);
        
        // Timeline fallback (no "Other" for timeline)
        cleanedData.timeline = data.timeline || "Not specified";

        // Multi-select services merging
        cleanedData.services = data.services.map(s => {
            if (s === "Other" && otherValues.services) {
                return otherValues.services;
            }
            return s;
        });

        // 2. Pass to existing submit flow
        await handleSubmit(null, cleanedData);
    };

    const handleSubmit = async (e: React.FormEvent | null, preparedData?: FormData) => {
        if (e) e.preventDefault();
        
        // Use prepared data if available, fallback to state
        const sourceData = preparedData || data;

        // 1. Honeypot Verification (Local)
        if (sourceData.botField) {
            setIsSubmitted(true);
            return;
        }

        if (!isStep2Complete || isSubmitting) return;

        setIsSubmitting(true);
        setSubmitError(null);

        // --- INSTANT FEEDBACK LOGIC ---
        // 1. Show success screen immediately
        setIsSubmitted(true);
        setTimeout(scrollToForm, 10);
        
        // 2. Clear stored data immediately
        localStorage.removeItem("quote_v3_data");
        sessionStorage.removeItem("leadPopupData");

        // Map exactly to Google Apps Script expected keys
        const compatiblePayload = {
            name: sourceData.name,
            phone: sourceData.phone,
            area: sourceData.area,
            email: sourceData.email,
            serviceType: sourceData.services.join(", "),
            propertyType: sourceData.propertyType,
            budget: sourceData.budget,
            timeline: sourceData.timeline,
            style: sourceData.stylePreference,
            propertyStatus: sourceData.propertyStatus,
            description: sourceData.description,
            status: "new"
        };

        try {
            // 3. Trigger background request (do not block UI)
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(compatiblePayload),
                keepalive: true, // Ensure request finishes even if page navigates
            });

            if (!response.ok) {
                console.warn("Background submission failed silently to user");
            }
        } catch (error) {
            console.error("Submission background error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-12 text-center shadow-3xl flex flex-col items-center justify-center min-h-[500px] relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 10, stiffness: 100 }}
                    className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-primary/40"
                >
                    <Check className="w-12 h-12 text-white" strokeWidth={3} />
                </motion.div>
                <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Consultation Requested</h2>
                <div className="bg-slate-50 p-6 rounded-3xl mb-8 w-full max-w-sm">
                    <ul className="text-left space-y-3">
                        <li className="flex items-center gap-3 text-xs font-bold text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-primary" /> Our expert will call you shortly
                        </li>
                        <li className="flex items-center gap-3 text-xs font-bold text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-primary" /> Detailed estimate within 24 hours
                        </li>
                        <li className="flex items-center gap-3 text-xs font-bold text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-primary" /> Dedicated project manager assigned
                        </li>
                    </ul>
                </div>
                <Button
                    onClick={() => { setIsSubmitted(false); setData(initialData); setStep(1); }}
                    className="h-14 px-10 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-all"
                >
                    Start New Inquiry
                </Button>
            </motion.div>
        );
    }

    return (
        <div id="quote-form-section" className="w-full max-w-5xl mx-auto px-4 md:px-0">
            <motion.div
                layout
                className="bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_48px_96px_-24px_rgba(0,0,0,0.12)] relative overflow-hidden"
            >
                <div className="bg-slate-50 border-b border-slate-100 p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="h-1 w-6 bg-primary rounded-full" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">High-End Interiors</span>
                        </div>
                        <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
                            {step === 1 && "Get Your Free Design Consultation"}
                            {step === 2 && "Project Details"}
                        </h2>
                        {step === 1 && <p className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.25em] mt-3">Takes less than 30 seconds</p>}
                    </div>
                    <div className="flex flex-col items-end gap-2 min-w-[120px]">
                        <div className="flex justify-between w-full mb-1">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Step {step} of {totalSteps}</span>
                            <span className="text-[9px] font-black text-primary uppercase tracking-widest">{Math.round(progress)}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-slate-900"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            />
                        </div>
                    </div>
                </div>

                <div className="p-8 md:p-12 relative">
                    <AnimatePresence mode="wait" custom={direction}>
                        {step === 1 && (
                            <motion.div
                                key="funnel-1"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="space-y-12"
                            >
                                <div className="flex flex-col space-y-8 max-w-[480px] mx-auto">
                                    <div className="space-y-4">
                                        <label className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                                            <User className="w-5 h-5 text-slate-900" /> Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="lead_name_field"
                                            autoComplete="new-password"
                                            placeholder="John Doe"
                                            value={hydrated ? data.name : ""}
                                            onChange={(e) => updateData({ name: e.target.value })}
                                            className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl font-bold focus:bg-white focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all outline-none text-base"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                                            <Phone className="w-5 h-5 text-slate-900" /> Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex items-center w-full bg-slate-50 border border-slate-200 rounded-2xl focus-within:bg-white focus-within:border-slate-900 focus-within:ring-4 focus-within:ring-slate-900/5 transition-all overflow-hidden">
                                            <span className="pl-6 pr-3 py-5 font-bold text-slate-900 text-base">+91</span>
                                            <input
                                                type="tel"
                                                name="lead_phone_field"
                                                autoComplete="new-password"
                                                placeholder="9876543210"
                                                value={hydrated ? data.phone : ""}
                                                onChange={(e) => updateData({ phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                                                className="w-full pr-6 py-5 bg-transparent font-bold outline-none text-base"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                                            <Mail className="w-5 h-5 text-slate-900" /> Email
                                        </label>
                                        <input
                                            type="email"
                                            name="lead_email_field"
                                            autoComplete="new-password"
                                            placeholder="you@example.com"
                                            value={hydrated ? data.email : ""}
                                            onChange={(e) => updateData({ email: e.target.value })}
                                            className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl font-bold focus:bg-white focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all outline-none text-base"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                                            <MapPin className="w-5 h-5 text-slate-900" /> Select Your Area (Mumbai) <span className="text-red-500">*</span>
                                        </label>
                                        <LocationSearch value={hydrated ? data.area : ""} onChange={(v) => updateData({ area: v })} />
                                    </div>
                                </div>
                                <div className="pt-10 border-t border-slate-100">
                                    <Button
                                        onClick={handleBasicSubmit}
                                        disabled={!isStep1Complete || isSubmitting}
                                        className={`w-full h-18 rounded-2xl font-black uppercase tracking-[0.3em] text-[13px] shadow-2xl transition-all duration-300 group ${isStep1Complete && !isSubmitting
                                            ? "bg-primary hover:opacity-90 text-white shadow-primary/30 hover:scale-[1.01]"
                                            : "bg-slate-200 text-slate-400 cursor-not-allowed opacity-50"
                                            }`}
                                    >
                                        {isSubmitting ? "Processing..." : "Continue Your Plan →"}
                                    </Button>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step-2"
                                custom={direction}
                                variants={stepVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="space-y-12"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-[32px] max-w-[1000px] mx-auto">
                                    <div className="space-y-6">
                                        <label className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                                            <Tag className="w-4 h-4 text-slate-900" /> Service Type <span className="text-red-500">*</span>
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {PRIMARY_SERVICES.map(s => (
                                                <button
                                                    key={s}
                                                    type="button"
                                                    onClick={() => toggleService(s)}
                                                    className={`h-16 px-6 rounded-2xl border-2 text-[11px] font-bold uppercase tracking-wide transition-all ${data.services.includes(s) ? "bg-slate-900 border-slate-900 text-white shadow-xl scale-[1.02]" : "bg-white border-slate-100 text-slate-500 hover:border-slate-300 hover:bg-slate-50"}`}
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </div>
                                        {data.services.includes("Other") && (
                                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
                                                <input
                                                    type="text"
                                                    placeholder="Please specify service"
                                                    value={otherValues.services || ""}
                                                    onChange={(e) => setOtherValues(prev => ({ ...prev, services: e.target.value }))}
                                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl font-bold focus:bg-white focus:border-slate-900 outline-none transition-all text-sm shadow-sm"
                                                />
                                            </motion.div>
                                        )}
                                    </div>

                                    <div className="space-y-6">
                                        <label className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                                            <Layout className="w-4 h-4 text-slate-900" /> Property Type
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {PROPERTY_TYPES.map(t => (
                                                <button
                                                    key={t}
                                                    type="button"
                                                    onClick={() => updateData({ propertyType: t })}
                                                    className={`h-16 px-6 rounded-2xl border-2 text-[11px] font-bold uppercase tracking-wide transition-all ${data.propertyType === t ? "bg-slate-900 border-slate-900 text-white shadow-xl scale-[1.02]" : "bg-white border-slate-100 text-slate-500 hover:border-slate-300 hover:bg-slate-50"}`}
                                                >
                                                    {t}
                                                </button>
                                            ))}
                                        </div>
                                        {data.propertyType === "Other" && (
                                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
                                                <input
                                                    type="text"
                                                    placeholder="Please specify property type"
                                                    value={otherValues.propertyType || ""}
                                                    onChange={(e) => setOtherValues(prev => ({ ...prev, propertyType: e.target.value }))}
                                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl font-bold focus:bg-white focus:border-slate-900 outline-none transition-all text-sm shadow-sm"
                                                />
                                            </motion.div>
                                        )}
                                    </div>

                                    <div className="space-y-6">
                                        <label className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                                            <Building2 className="w-4 h-4 text-slate-900" /> Planned Budget
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {BUDGET_OPTIONS.map(b => (
                                                <button
                                                    key={b}
                                                    type="button"
                                                    onClick={() => updateData({ budget: b })}
                                                    className={`h-16 px-6 rounded-2xl border-2 text-[11px] font-bold uppercase tracking-wide transition-all ${data.budget === b ? "bg-slate-900 border-slate-900 text-white shadow-xl scale-[1.02]" : "bg-white border-slate-100 text-slate-500 hover:border-slate-300 hover:bg-slate-50"}`}
                                                >
                                                    {b}
                                                </button>
                                            ))}
                                        </div>
                                        {data.budget === "Other" && (
                                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
                                                <input
                                                    type="text"
                                                    placeholder="Please specify budget"
                                                    value={otherValues.budget || ""}
                                                    onChange={(e) => setOtherValues(prev => ({ ...prev, budget: e.target.value }))}
                                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl font-bold focus:bg-white focus:border-slate-900 outline-none transition-all text-sm shadow-sm"
                                                />
                                            </motion.div>
                                        )}
                                    </div>

                                    <div className="space-y-6">
                                        <label className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                                            <Calendar className="w-4 h-4 text-slate-900" /> Timeline
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {TIMELINE_OPTIONS.map(t => (
                                                <button
                                                    key={t}
                                                    type="button"
                                                    onClick={() => updateData({ timeline: t })}
                                                    className={`h-16 px-6 rounded-2xl border-2 text-[11px] font-bold uppercase tracking-wide transition-all ${data.timeline === t ? "bg-slate-900 border-slate-900 text-white shadow-xl scale-[1.02]" : "bg-white border-slate-100 text-slate-500 hover:border-slate-300 hover:bg-slate-50"}`}
                                                >
                                                    {t}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <label className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                                            <Sparkles className="w-4 h-4 text-slate-900" /> Style Preference
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {STYLE_PREFERENCES.map(s => (
                                                <button
                                                    key={s}
                                                    type="button"
                                                    onClick={() => updateData({ stylePreference: s })}
                                                    className={`h-16 px-6 rounded-2xl border-2 text-[11px] font-bold uppercase tracking-wide transition-all ${data.stylePreference === s ? "bg-slate-900 border-slate-900 text-white shadow-xl scale-[1.02]" : "bg-white border-slate-100 text-slate-500 hover:border-slate-300 hover:bg-slate-50"}`}
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </div>
                                        {data.stylePreference === "Other" && (
                                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
                                                <input
                                                    type="text"
                                                    placeholder="Please specify style"
                                                    value={otherValues.stylePreference || ""}
                                                    onChange={(e) => setOtherValues(prev => ({ ...prev, stylePreference: e.target.value }))}
                                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl font-bold focus:bg-white focus:border-slate-900 outline-none transition-all text-sm shadow-sm"
                                                />
                                            </motion.div>
                                        )}
                                    </div>

                                    <div className="space-y-6">
                                        <label className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                                            <Building2 className="w-4 h-4 text-slate-900" /> Property Status
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {PROPERTY_STATUS.map(s => (
                                                <button
                                                    key={s}
                                                    type="button"
                                                    onClick={() => updateData({ propertyStatus: s })}
                                                    className={`h-16 px-6 rounded-2xl border-2 text-[11px] font-bold uppercase tracking-wide transition-all ${data.propertyStatus === s ? "bg-slate-900 border-slate-900 text-white shadow-xl scale-[1.02]" : "bg-white border-slate-100 text-slate-500 hover:border-slate-300 hover:bg-slate-50"}`}
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </div>
                                        {data.propertyStatus === "Other" && (
                                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
                                                <input
                                                    type="text"
                                                    placeholder="Please specify status"
                                                    value={otherValues.propertyStatus || ""}
                                                    onChange={(e) => setOtherValues(prev => ({ ...prev, propertyStatus: e.target.value }))}
                                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl font-bold focus:bg-white focus:border-slate-900 outline-none transition-all text-sm shadow-sm"
                                                />
                                            </motion.div>
                                        )}
                                    </div>

                                    <div className="col-span-1 md:col-span-2 space-y-4">
                                        <label className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                                            <MessageSquare className="w-5 h-5 text-slate-900" /> Brief Project Description
                                        </label>
                                        <textarea
                                            placeholder="Tell us briefly about your project..."
                                            value={hydrated ? data.description : ""}
                                            onChange={(e) => updateData({ description: e.target.value })}
                                            className="w-full min-h-[120px] px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl font-bold focus:bg-white focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all outline-none text-base resize-none"
                                        />
                                    </div>
                                </div>


                                {submitError && (
                                    <div className="p-5 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-xs font-bold flex flex-col gap-2 max-w-[1000px] mx-auto">
                                        <div className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 bg-red-600 rounded-full" /> {submitError}
                                        </div>
                                    </div>
                                )}

                                <div className="pt-10 border-t border-slate-100 flex justify-between items-center max-w-[1000px] mx-auto">
                                    <button
                                        onClick={handleBack}
                                        className="h-16 px-10 rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-slate-50 transition-all flex items-center gap-3"
                                    >
                                        <ArrowLeft className="w-4 h-4" /> Back
                                    </button>
                                    <Button
                                        onClick={handleFinalSubmit}
                                        disabled={!isStep2Complete || isSubmitting}
                                        className={`h-16 px-12 rounded-2xl font-black uppercase tracking-[0.2em] text-[12px] shadow-2xl transition-all hover:scale-105 ${isStep2Complete && !isSubmitting ? "bg-primary text-white shadow-primary/20" : "bg-slate-200 text-slate-400 opacity-50"}`}
                                    >
                                        {isSubmitting ? "Processing..." : "Get My Free Design Plan"}
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>


            <div className="md:hidden">
                <AnimatePresence>
                    {!isSubmitted && (
                        <motion.div initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }} className="fixed bottom-6 left-6 right-6 z-50">
                            <Button
                                onClick={step === 1 ? handleBasicSubmit : handleFinalSubmit}
                                disabled={
                                    (step === 1 && (!isStep1Complete || isSubmitting)) ||
                                    (step === 2 && (!isStep2Complete || isSubmitting))
                                }
                                className={`w-full h-16 rounded-2xl text-white font-black uppercase text-[10px] shadow-3xl shadow-primary/20 bg-primary`}
                            >
                                {isSubmitting ? "Processing..." : (
                                    step === 1 ? "Continue Your Plan →" : "Get Free Design Plan"
                                )}
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default function MultiStepForm() {
    return (
        <Suspense fallback={null}>
            <FormContent />
        </Suspense>
    );
}
