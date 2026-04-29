"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronRight, Search } from "lucide-react";

export const MUMBAI_LOCATIONS = [
    { name: "Andheri West" },
    { name: "Bandra West" },
    { name: "Thane" },
    { name: "Andheri East" },
    { name: "Bandra East" },
    { name: "Borivali East" },
    { name: "Borivali West" },
    { name: "Navi Mumbai" }
];

interface LocationSearchProps {
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
}

export function LocationSearch({ value, onChange, placeholder = "Search or select your area" }: LocationSearchProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");

    const filtered = MUMBAI_LOCATIONS.filter(a => a.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="relative">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-3.5 pl-12 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-bold cursor-pointer hover:bg-white transition-all flex items-center justify-between"
            >
                <div className="flex items-center gap-2">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <span className={value ? "text-slate-900" : "text-slate-400 font-medium"}>
                        {value || placeholder}
                    </span>
                </div>
                <ChevronRight className={`w-4 h-4 text-slate-300 transition-transform ${isOpen ? "rotate-90" : ""}`} />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-[100] w-full mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        <div className="p-3 border-b border-slate-100 bg-slate-50">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
                                <input
                                    autoFocus
                                    placeholder="Search location..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full pl-8 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-slate-900"
                                />
                            </div>
                        </div>
                        <div className="max-h-[200px] overflow-y-auto p-2">
                            {filtered.length > 0 ? filtered.map(area => (
                                <button
                                    key={area.name}
                                    type="button"
                                    onClick={() => {
                                        onChange(area.name);
                                        setIsOpen(false);
                                        setSearch("");
                                    }}
                                    className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all ${value === area.name
                                        ? "bg-slate-900 text-white"
                                        : "text-slate-600 hover:bg-slate-50"
                                        }`}
                                >
                                    {area.name}
                                </button>
                            )) : (
                                <div className="px-4 py-4 text-center text-[10px] font-bold text-slate-400 uppercase">
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
