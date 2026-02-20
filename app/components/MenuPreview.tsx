"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MenuPreview() {
    return (
        <section id="menus" className="py-24 bg-[#1c1c1c] text-[#E8E5E0]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    <motion.div
                        className="lg:w-1/2 relative h-[600px] w-full"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/20 z-10 pointer-events-none"></div>
                        <Image
                            src="/cheery_images/Cafe-Sydney-Restaurant-1300-x-1300-12-800x800.jpg"
                            alt="Cafe Sydney Dining"
                            fill
                            className="object-cover opacity-90"
                        />
                    </motion.div>

                    <motion.div
                        className="lg:w-1/2 text-center lg:text-left"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[var(--color-accent-bronze)] uppercase tracking-[0.25em] text-sm block mb-4">Culinary Excellence</span>
                        <h3 className="text-5xl md:text-6xl font-serif mb-8 text-[#E8E5E0]">
                            Our Menus
                        </h3>
                        <p className="text-lg text-[#E8E5E0]/70 mb-8 leading-relaxed font-light">
                            From business lunches to intimate dinners and grand celebrations, Cafe Sydney offers a vibrant, contemporary dining experience delivered with the timeless hospitality it is renowned for.
                        </p>
                        <p className="text-lg text-[#E8E5E0]/70 mb-10 leading-relaxed font-light">
                            Peruse the seasonal menu, award-winning wine list and artfully curated cocktail list, highlighting the very best of Australian produce.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                            <Link href="#menus" className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-[#E8E5E0]/30 text-[#E8E5E0] hover:bg-[#E8E5E0] hover:text-[#1c1c1c] transition-all duration-300 uppercase text-xs tracking-widest font-bold group">
                                View Menus
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="#wine" className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-[#E8E5E0]/30 text-[#E8E5E0] hover:bg-[#E8E5E0] hover:text-[#1c1c1c] transition-all duration-300 uppercase text-xs tracking-widest font-bold group">
                                Wine List
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
