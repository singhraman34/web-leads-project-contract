"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";


export default function SimpleContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name.trim() || !formData.phone.trim()) return; // Native required fallback protection
        
        setIsSubmitting(true);

        const payload = {
            formType: "enquiry",
            ...formData
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            
            if (!response.ok) throw new Error("Backend failed");
            setIsSubmitted(true);
            setFormData({ name: "", phone: "", email: "", service: "", message: "" });
        } catch (error) {
            console.error("Submission failed", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-12 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/20">
                    <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tighter">Message Sent!</h3>
                <p className="text-slate-600 font-medium">We&apos;ll get back to you shortly.</p>
                <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mt-8 border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                >
                    Send Another Message
                </Button>
            </div>
        );
    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary ml-1">Full Name *</label>
                    <input 
                        required
                        type="text" 
                        name="lead_name_field"
                        autoComplete="new-password"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium text-[#1C1C1C] bg-slate-50/30" 
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary ml-1">Phone Number *</label>
                    <input 
                        required
                        type="tel" 
                        name="lead_phone_field"
                        autoComplete="new-password"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-6 py-4 rounded-2xl border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium text-[#1C1C1C] bg-slate-50/30" 
                    />
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary ml-1">Email Address</label>
                    <input 
                        type="email" 
                        name="lead_email_field"
                        autoComplete="new-password"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 rounded-2xl border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium text-[#1C1C1C] bg-slate-50/30" 
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary ml-1">Service Interested In</label>
                    <input 
                        type="text" 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        placeholder="General Inquiry"
                        className="w-full px-6 py-4 rounded-2xl border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium text-[#1C1C1C] bg-slate-50/30" 
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary ml-1">Message</label>
                <textarea 
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full px-6 py-4 rounded-2xl border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium text-[#1C1C1C] resize-none bg-slate-50/30" 
                />
            </div>
            <Button disabled={isSubmitting} type="submit" className="w-full h-14 bg-primary hover:bg-[#B5966B] text-white font-black uppercase tracking-[0.2em] rounded-2xl transition-all shadow-xl shadow-primary/20 active:scale-[0.98]">
                {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
        </form>
    );
}
