import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    className,
    href,
    onClick,
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 gap-2 cursor-pointer";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary/90 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]",
        outline: "border border-white/20 bg-transparent text-gray-200 hover:bg-white/5",
        ghost: "bg-transparent text-gray-400 hover:bg-white/5 hover:text-white"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
        return (
            <motion.a
                href={href}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={classes}
                {...props}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={classes}
            {...props}
        >
            {children}
        </motion.button>
    );
}
