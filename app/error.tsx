
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { RefreshCw, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Critical Runtime Error:", error);
    }, [error]);

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-6 py-20">
            <div className="max-w-2xl w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-12 md:p-16 rounded-[3rem] shadow-3xl border border-slate-100"
                >
                    <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-10">
                        <AlertTriangle size={40} />
                    </div>
                    
                    <span className="text-red-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
                        System Interruption
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Something Went Wrong
                    </h1>
                    <p className="text-slate-500 text-lg mb-12 font-medium leading-relaxed max-w-md mx-auto">
                        An unexpected error occurred during the render of this section. Our engineering team has been notified.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button 
                            onClick={() => reset()}
                            className="h-16 px-12 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase tracking-widest text-[10px] shadow-2xl transition-all flex items-center gap-3"
                        >
                            <RefreshCw className="w-4 h-4" /> Try Re-rendering
                        </Button>
                        <Button 
                            variant="outline"
                            onClick={() => window.location.href = "/"}
                            className="h-16 px-12 rounded-2xl border-slate-200 text-slate-600 font-bold uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-all"
                        >
                            Return to Safety
                        </Button>
                    </div>

                    {process.env.NODE_ENV === "development" && (
                        <div className="mt-12 p-6 bg-red-50 rounded-2xl text-left overflow-auto max-h-40">
                            <p className="text-[10px] font-mono text-red-900 font-bold mb-2 uppercase opacity-50">Debug Error Object:</p>
                            <pre className="text-[11px] font-mono text-red-800 whitespace-pre-wrap">{error.message}</pre>
                            {error.digest && <p className="mt-2 text-[10px] font-mono text-red-700">Digest: {error.digest}</p>}
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
