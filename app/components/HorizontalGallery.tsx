"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const galleryImages = [
    {
        src: "/cheery_images/Cafe-Sydney-Experience-4-800x549.jpg",
        title: "The Experience",
        subtitle: "Unmatched Atmosphere"
    },
    {
        src: "/cheery_images/Cafe-Sydney-Restaurant-1300-x-1300-12-800x800.jpg",
        title: "Culinary Excellence",
        subtitle: "Seasonal Produce"
    },
    {
        src: "/cheery_images/Cafe-Sydney-Restaurant-1300-x-1300-8-800x800.jpg",
        title: "Fine Dining",
        subtitle: "Impeccable Service"
    },
    {
        src: "/cheery_images/Cafe-Sydney-Restaurant-1300x1300-19-2-800x800.jpg",
        title: "Signature Cocktails",
        subtitle: "The Lounge Bar"
    },
    {
        src: "/cheery_images/CS-LOGO-STONE-OYSTER-600x288.png",
        title: "Fresh Seafood",
        subtitle: "Ocean to Plate"
    },
];

export default function HorizontalGallery() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Scroll mapping: 0 -> 0%, 1 -> -x%
    // We need to calculate how far to move based on the content width.
    // For safety, moving -100% of the container width minus the viewport width is strictly correct,
    // but hardcoding a value like -60% usually works if we have enough "scroll track".
    // Let's use a conservative transform that ensures we see everything.
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

    return (
        <div className="relative bg-[#1a1a1a]">
            {/* Unified Section for Mobile & Desktop */}
            <section ref={targetRef} className="relative h-[400vh]"> {/* Increased height for slower scroll on mobile */}
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-8 md:px-24">

                        {/* Intro Text Block */}
                        <div className="flex flex-col justify-center min-w-[80vw] md:min-w-[30vw] text-white/80">
                            <hr className="w-16 md:w-24 border-t border-white mb-6 md:mb-8 opacity-50" />
                            <h2 className="text-4xl md:text-7xl font-serif mb-4 md:mb-6 leading-tight text-white">
                                A Visual <br /> <span className="italic text-[var(--color-accent-bronze)]">Journey</span>
                            </h2>
                            <p className="max-w-xs md:max-w-md text-base md:text-lg font-light opacity-70">
                                Explore the vibrant atmosphere and exquisite details that make Cafe Sydney truly iconic.
                            </p>
                        </div>

                        {/* Images */}
                        {galleryImages.map((image, index) => (
                            <div key={index} className="relative h-[50vh] md:h-[60vh] w-[70vw] md:w-[40vw] flex-shrink-0 group overflow-hidden border border-white/5">
                                <Image
                                    src={image.src}
                                    alt={image.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end">
                                    <h3 className="text-lg md:text-xl font-serif uppercase tracking-widest text-white">{image.title}</h3>
                                    <p className="text-xs md:text-sm text-white/80 mt-1">{image.subtitle}</p>
                                </div>
                            </div>
                        ))}

                        {/* Spacer to ensure last item is fully viewable */}
                        <div className="w-[10vw] flex-shrink-0"></div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
