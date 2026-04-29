import { CONTACT_DATA } from "@/lib/data/contact";
import { Check } from "lucide-react";

interface StepServiceSelectionProps {
    data: {
        service: string;
        budget: string;
        timeline: string;
    };
    updateData: (fields: Partial<{ service: string; budget: string; timeline: string }>) => void;
}

export default function StepServiceSelection({ data, updateData }: StepServiceSelectionProps) {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-widest border-b border-slate-200 pb-4">
                1. Project Scope
            </h3>

            <div className="space-y-4">
                <label className="block text-sm font-bold uppercase tracking-widest text-slate-700">Select Service required <span className="text-primary">*</span></label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {CONTACT_DATA.serviceOptions.map((service) => (
                        <button
                            key={service}
                            type="button"
                            onClick={() => updateData({ service })}
                            className={`p-5 rounded-2xl border-2 text-left transition-all relative overflow-hidden group ${data.service === service
                                ? "bg-accent border-primary text-primary shadow-xl shadow-primary/10"
                                : "bg-white border-slate-100 text-slate-600 hover:border-primary/30 hover:bg-slate-50 shadow-sm"
                                }`}
                        >
                            <div className="flex justify-between items-center relative z-10">
                                <span className="font-bold tracking-tight">{service}</span>
                                {data.service === service && (
                                    <Check className="w-5 h-5 text-primary animate-in zoom-in duration-300" />
                                )}
                            </div>
                            <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent transition-opacity ${data.service === service ? "opacity-100" : "opacity-0"}`} />
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-4 pt-4">
                <label className="block text-sm font-bold uppercase tracking-widest text-slate-700">Estimated Budget <span className="text-primary">*</span></label>
                <div className="grid grid-cols-2 gap-4">
                    {CONTACT_DATA.budgetRanges.map((budget) => (
                        <button
                            key={budget}
                            type="button"
                            onClick={() => updateData({ budget })}
                            className={`p-5 rounded-2xl border-2 text-center transition-all group ${data.budget === budget
                                ? "bg-accent border-primary text-primary shadow-xl shadow-primary/10"
                                : "bg-white border-slate-100 text-slate-600 hover:border-primary/30 hover:bg-slate-50 shadow-sm"
                                }`}
                        >
                            <span className="font-bold whitespace-nowrap tracking-tight">{budget}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-4 pt-4">
                <label className="block text-sm font-bold uppercase tracking-widest text-slate-700">Project Timeline <span className="text-primary">*</span></label>
                <div className="grid grid-cols-2 gap-4">
                    {CONTACT_DATA.timelineOptions.map((timeline) => (
                        <button
                            key={timeline}
                            type="button"
                            onClick={() => updateData({ timeline })}
                            className={`p-5 rounded-2xl border-2 text-center transition-all group ${data.timeline === timeline
                                ? "bg-accent border-primary text-primary shadow-xl shadow-primary/10"
                                : "bg-white border-slate-100 text-slate-600 hover:border-primary/30 hover:bg-slate-50 shadow-sm"
                                }`}
                        >
                            <span className="font-bold whitespace-nowrap tracking-tight">{timeline}</span>
                        </button>
                    ))}

                    <button
                        type="button"
                        onClick={() => updateData({ timeline: "Custom Dates" })}
                        className={`p-5 rounded-2xl border-2 text-center transition-all group ${(!CONTACT_DATA.timelineOptions.includes(data.timeline) && data.timeline !== "")
                            ? "bg-accent border-primary text-primary shadow-xl shadow-primary/10"
                            : "bg-white border-slate-100 text-slate-600 hover:border-primary/30 hover:bg-slate-50 shadow-sm"
                            }`}
                    >
                        <span className="font-bold whitespace-nowrap tracking-tight">Custom Dates</span>
                    </button>

                    {(!CONTACT_DATA.timelineOptions.includes(data.timeline) && data.timeline !== "") && (
                        <div className="col-span-2 flex flex-col md:flex-row items-center gap-3 p-4 bg-white border-2 border-slate-100 rounded-2xl shadow-sm animate-in fade-in zoom-in-95 duration-300">
                            <span className="text-sm font-bold text-slate-500 uppercase whitespace-nowrap">Select Dates:</span>
                            <input
                                type="date"
                                aria-label="Start Date"
                                value={(data.timeline.includes(" - ") ? data.timeline.split(" - ")[0] : "") !== "TBD" && data.timeline !== "Custom Dates" ? (data.timeline.split(" - ")[0] || "") : ""}
                                className="w-full p-2 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 font-medium"
                                onChange={(e) => {
                                    const currentEnd = (data.timeline.includes(" - ")) ? data.timeline.split(" - ")[1] : "TBD";
                                    updateData({ timeline: `${e.target.value || "TBD"} - ${currentEnd}` });
                                }}
                            />
                            <span className="text-slate-400 font-bold">-</span>
                            <input
                                type="date"
                                aria-label="End Date"
                                value={(data.timeline.includes(" - ") ? data.timeline.split(" - ")[1] : "") !== "TBD" ? (data.timeline.split(" - ")[1] || "") : ""}
                                className="w-full p-2 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 font-medium"
                                onChange={(e) => {
                                    const currentStart = (data.timeline.includes(" - ")) ? data.timeline.split(" - ")[0] : "TBD";
                                    updateData({ timeline: `${currentStart} - ${e.target.value || "TBD"}` });
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
