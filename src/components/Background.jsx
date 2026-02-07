import React, { memo } from 'react';
import { motion } from 'framer-motion';

const Background = memo(({ mousePosition, isMobile }) => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                    transform: isMobile ? 'none' : `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
                }}
            />

            {/* Gradient Orbs */}
            <motion.div
                className="absolute w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl will-change-transform"
                style={{
                    top: '10%',
                    right: '10%',
                    x: isMobile ? 0 : mousePosition.x * 0.03,
                    y: isMobile ? 0 : mousePosition.y * 0.03,
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl will-change-transform"
                style={{
                    bottom: '20%',
                    left: '10%',
                    x: isMobile ? 0 : mousePosition.x * -0.02,
                    y: isMobile ? 0 : mousePosition.y * -0.02,
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
        </div>
    );
});

export default Background;
