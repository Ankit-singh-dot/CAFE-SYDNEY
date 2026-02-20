"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
    return (
        <section className="py-24 px-6 bg-[var(--color-primary-bg)] text-center">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-sm tracking-[0.2em] uppercase mb-8 text-[var(--color-accent-bronze)]">
                        A Quintessential Dining Experience
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-10 text-[var(--color-text-dark)]">
                        Cafe Sydney captures the essence of the harbour city with breathtaking views of the Harbour Bridge and Sydney Opera House from its rooftop location at Customs House.
                    </h2>
                    <div className="h-1 w-24 bg-[var(--color-accent-bronze)] mx-auto mb-10"></div>
                    <p className="text-lg text-[var(--color-text-dark)]/80 leading-relaxed max-w-2xl mx-auto">
                        A thoughtfully curated lunch and dinner menu showcases the finest seasonal produce, perfectly complemented by an awarded Australian wine list. The Lounge and Cocktail Bar is a sophisticated space to sit back and enjoy an expertly crafted cocktail and light bite.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
