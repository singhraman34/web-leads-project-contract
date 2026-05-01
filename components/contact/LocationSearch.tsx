"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronDown, Search, Check, Plus } from "lucide-react";

export const MUMBAI_LOCATIONS = [
    { name: "Andheri East" }, { name: "Andheri West" },
    { name: "Bandra East" }, { name: "Bandra West" },
    { name: "Borivali East" }, { name: "Borivali West" },
    { name: "Kandivali East" }, { name: "Kandivali West" },
    { name: "Malad East" }, { name: "Malad West" },
    { name: "Goregaon East" }, { name: "Goregaon West" },
    { name: "Jogeshwari East" }, { name: "Jogeshwari West" },
    { name: "Vile Parle East" }, { name: "Vile Parle West" },
    { name: "Santacruz East" }, { name: "Santacruz West" },
    { name: "Kurla East" }, { name: "Kurla West" },
    { name: "Ghatkopar East" }, { name: "Ghatkopar West" },
    { name: "Powai" },
    { name: "Mulund East" }, { name: "Mulund West" },
    { name: "Bhandup" }, { name: "Nahur" },
    { name: "Chembur" }, { name: "Govandi" },
    { name: "Dadar" }, { name: "Matunga" },
    { name: "Parel" }, { name: "Lower Parel" },
    { name: "Worli" }, { name: "Prabhadevi" },
    { name: "Colaba" }, { name: "Churchgate" }, { name: "Marine Lines" },
    { name: "Byculla" }, { name: "Mazgaon" },
    { name: "Thane" }, { name: "Navi Mumbai" }
];

interface LocationSearchProps {
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
}

export function LocationSearch({ value, onChange, placeholder = "Search, select, or enter your location" }: LocationSearchProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");

    const filtered = MUMBAI_LOCATIONS.filter(a => a.name.toLowerCase().includes(search.trim().toLowerCase()));

    // Check if the current search string is exactly in the list
    const exactMatchExists = MUMBAI_LOCATIONS.some(a => a.name.toLowerCase() === search.trim().toLowerCase());
    const showManualEntry = search.trim() !== "" && !exactMatchExists;

    return (
        <div className="relative w-full">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full px-4 py-3.5 bg-white border rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-200 shadow-sm outline-none focus-visible:ring-4 focus-visible:ring-primary/10 ${isOpen ? "border-primary" : "border-slate-200 hover:border-slate-300"
                    }`}
            >
                <div className="flex items-center gap-3">
                    <MapPin className={`w-5 h-5 ${value ? "text-primary" : "text-slate-400"}`} />
                    <span className={`text-sm ${value ? "text-slate-900 font-semibold" : "text-slate-400 font-medium"}`}>
                        {value || placeholder}
                    </span>
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, y: 4 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 4 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute z-[100] w-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden flex flex-col"
                    >
                        <div className="p-2 border-b border-slate-100 bg-white sticky top-0 z-10">
                            <div className="relative flex items-center bg-slate-50 border border-transparent rounded-xl focus-within:border-slate-200 focus-within:bg-white transition-colors">
                                <Search className="absolute left-3 w-4 h-4 text-slate-400" />
                                <input
                                    autoFocus
                                    placeholder="Search location..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full pl-9 pr-4 py-2.5 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="max-h-[240px] overflow-y-auto p-1.5 custom-scrollbar">
                            {filtered.length > 0 || showManualEntry ? (
                                <div className="space-y-0.5">
                                    {showManualEntry && (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                onChange(search.trim());
                                                setIsOpen(false);
                                                setSearch("");
                                            }}
                                            className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 bg-primary/5 text-primary hover:bg-primary/10 font-semibold mb-1"
                                        >
                                            <Plus className="w-4 h-4" />
                                            Use &quot;{search.trim()}&quot;
                                        </button>
                                    )}
                                    {filtered.map(area => {
                                        const isSelected = value === area.name;
                                        return (
                                            <button
                                                key={area.name}
                                                type="button"
                                                onClick={() => {
                                                    onChange(area.name);
                                                    setIsOpen(false);
                                                    setSearch("");
                                                }}
                                                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all duration-150 ${isSelected
                                                        ? "bg-primary/5 text-primary font-semibold"
                                                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                                                    }`}
                                            >
                                                {area.name}
                                                {isSelected && <Check className="w-4 h-4 text-primary" />}
                                            </button>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="px-4 py-8 text-center text-sm text-slate-400">
                                    No location found
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
