import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

export function Card({ children, className, hover = true, ...props }) {
    return (
        <motion.div
            whileHover={hover ? { y: -5, boxShadow: "0 10px 30px -10px rgba(168,85,247,0.2)" } : {}}
            className={cn(
                "glass rounded-2xl p-6 relative overflow-hidden group",
                className
            )}
            {...props}
        >
            {/* Subtle iridescent hover effect */}
            {hover && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            )}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </motion.div>
    );
}
