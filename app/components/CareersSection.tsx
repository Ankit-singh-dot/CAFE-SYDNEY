"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CareersSection() {
    return (
        <section id="careers" className="py-32 bg-[var(--color-accent-olive)] text-white text-center relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8">
                        CAREERS
                    </h2>
                    <p className="text-lg md:text-xl font-light mb-10 leading-relaxed opacity-90 max-w-2xl mx-auto">
                        Cafe Sydney is always looking for passionate individuals to join our team. Work at one of the country’s leading restaurants, learn and grow, and have a blast doing it!
                    </p>

                    <Link href="#careers" className="inline-flex items-center gap-2 px-10 py-4 border border-white text-white hover:bg-white hover:text-[var(--color-accent-olive)] transition-all duration-300 uppercase text-xs tracking-[0.2em] font-bold group">
                        View Opportunities
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
