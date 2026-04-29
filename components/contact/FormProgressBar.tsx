import { motion } from "framer-motion";

interface FormProgressBarProps {
    currentStep: number;
    totalSteps: number;
}

export default function FormProgressBar({ currentStep, totalSteps }: FormProgressBarProps) {
    const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

    return (
        <div className="w-full mb-14">
            <div className="flex justify-between items-end mb-4">
                <div className="flex flex-col">
                    <span className="text-primary font-black uppercase tracking-widest text-[10px] mb-1">Project Initiation</span>
                    <span className="text-3xl font-black text-slate-900 tracking-tighter">Step {currentStep}</span>
                </div>
                <div className="text-right">
                    <span className="block text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-1">{Math.round(progress)}% Completed</span>
                    <span className="block text-xs font-black text-slate-900">Stage {currentStep}/{totalSteps}</span>
                </div>
            </div>

            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden p-[2px]">
                <motion.div
                    className="h-full bg-primary rounded-full shadow-[0_0_15px_rgba(198,168,125,0.5)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                />
            </div>
        </div>
    );
}
