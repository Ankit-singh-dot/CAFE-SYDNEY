"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const journalItems = [
    {
        title: "A VALENTINE’S DINNER, ICONIC BY DESIGN",
        category: "Events",
        image: "/cheery_images/Valentins-Day-Sydney-800x800.png",
        excerpt: "Saturday 14 February. This Valentine’s Day, immerse yourselves in an unforgettable evening at Cafe Sydney...",
    },
    {
        title: "CS CHERRY SORBET",
        category: "Stories",
        image: "/cheery_images/cherry-sorbet-recipe-800x800.png",
        excerpt: "Our Cherry Sorbet is a celebration of simplicity and technique, allowing the natural intensity of ripe cherries to take centre stage...",
    },
    {
        title: "CONGRATULATIONS TO THE WINE TEAM",
        category: "News",
        image: "/cheery_images/Cafe-Sydney-Restaurant-1300-x-1300-8-800x800.jpg",
        excerpt: "We’re thrilled to share Cafe Sydney has been awarded Three Glasses at the 2025 Australia’s Wine List of the Year Awards...",
    }
];

export default function JournalSection() {
    return (
        <section id="journal" className="py-24 bg-[var(--color-accent-bronze)] text-white">
            <div className="container mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="text-left">
                        <span className="block text-sm tracking-[0.2em] uppercase mb-2 opacity-80">
                            Journal
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif">
                            What's On
                        </h2>
                    </div>

                    <Link href="#journal" className="hidden md:inline-flex items-center gap-2 border-b border-white pb-1 hover:opacity-70 transition-opacity uppercase text-sm tracking-widest group">
                        Read More News
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {journalItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-square mb-6 overflow-hidden bg-black/20">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <span className="text-xs uppercase tracking-widest opacity-70 mb-2 block">{item.category}</span>
                            <h4 className="text-xl font-serif leading-snug mb-3 min-h-[3.5rem] group-hover:underline decoration-1 underline-offset-4">
                                {item.title}
                            </h4>
                            <p className="text-sm opacity-80 leading-relaxed line-clamp-3">
                                {item.excerpt}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="#journal" className="inline-block border-b border-white pb-1 hover:opacity-70 transition-opacity uppercase text-sm tracking-widest">
                        Read More News
                    </Link>
                </div>

            </div>
        </section>
    );
}
