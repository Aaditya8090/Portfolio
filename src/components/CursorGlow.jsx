import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CursorGlow() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-96 h-96 -ml-48 -mt-48 rounded-full pointer-events-none z-0"
            animate={{
                x: mousePosition.x,
                y: mousePosition.y,
            }}
            transition={{
                type: 'tween',
                ease: 'backOut',
                duration: 0.5,
            }}
            style={{
                background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(168,85,247,0) 70%)',
            }}
        />
    );
}
