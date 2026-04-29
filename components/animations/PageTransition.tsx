"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.2, 
                ease: [0.23, 1, 0.32, 1] // Custom ease-out for snappiness
            }}
            className="flex-1 flex flex-col"
        >
            {children}
        </motion.div>
    );
}
