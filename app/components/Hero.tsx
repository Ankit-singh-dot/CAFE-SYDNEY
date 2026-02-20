"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/cheery_images/CS-WEBSITE-VIDEO-CH-END-TRANSITION.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 z-10" />

            {/* Content */}
            <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="block text-sm md:text-base tracking-[0.3em] uppercase mb-4 opacity-90">
                        Est. 1999
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-wider mb-8">
                        CAFE SYDNEY
                    </h1>
                    <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
                        Capturing the essence of the harbour city with breathtaking views and exceptional dining.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[var(--color-foreground)] transition-all duration-300 uppercase text-sm tracking-[0.2em] font-bold"
                    >
                        Make a Reservation
                    </motion.button>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </div>
        </section>
    );
}
