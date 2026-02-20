import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[var(--color-secondary-bg)] pt-20 pb-10 text-[var(--color-text-dark)]">
            <div className="container mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Column 1: Links */}
                    <div className="flex flex-col space-y-3">
                        <h4 className="font-serif text-lg mb-4 uppercase tracking-widest font-bold">Menu</h4>
                        {["Home", "About Us", "Menus", "Events", "Shop", "Gallery", "Journal", "Careers", "Contact Us"].map((item) => (
                            <Link key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-sm hover:text-[var(--color-accent-bronze)] transition-colors uppercase tracking-wider">
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Column 2: Information */}
                    <div className="flex flex-col space-y-3">
                        <h4 className="font-serif text-lg mb-4 uppercase tracking-widest font-bold">Information</h4>
                        {["Event Enquiry", "Dining FAQ’s", "Shop and Gift Card FAQ’s", "Privacy Policy", "Terms & Conditions", "Webcam"].map((item) => (
                            <Link key={item} href="#" className="text-sm hover:text-[var(--color-accent-bronze)] transition-colors uppercase tracking-wider">
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Column 3: Location */}
                    <div>
                        <h4 className="font-serif text-lg mb-6 uppercase tracking-widest font-bold">Location</h4>
                        <address className="not-italic text-sm leading-relaxed mb-6">
                            <span className="font-bold block mb-1">Cafe Sydney</span>
                            5th Floor, Customs House<br />
                            31 Alfred Street,<br />
                            Circular Quay,<br />
                            NSW, 2000
                        </address>

                        <p className="text-sm mb-2">
                            <a href="tel:+61292518683" className="hover:text-[var(--color-accent-bronze)] transition-colors">Call +61 2 9251 8683</a>
                        </p>
                        <p className="text-sm mb-6">
                            <a href="mailto:reservations@cafesydney.com" className="hover:text-[var(--color-accent-bronze)] transition-colors">reservations@cafesydney.com</a>
                        </p>

                        <Link href="#" className="inline-block border-b border-[var(--color-text-dark)] pb-0.5 text-xs uppercase tracking-widest hover:text-[var(--color-accent-bronze)] hover:border-[var(--color-accent-bronze)] transition-colors">
                            View on Google Maps →
                        </Link>
                    </div>

                    {/* Column 4: Opening Hours & Newsletter */}
                    <div>
                        <h4 className="font-serif text-lg mb-6 uppercase tracking-widest font-bold">Opening Hours</h4>
                        <div className="mb-8">
                            <p className="text-sm font-bold uppercase tracking-wider mb-2">Lunch & Dinner</p>
                            <p className="text-sm mb-1">Monday – Saturday:</p>
                            <p className="text-sm mb-4">12 noon until late</p>
                            <p className="text-sm">Sunday: 12noon until 5pm</p>
                        </div>

                        <button className="w-full px-6 py-3 border border-[var(--color-text-dark)] hover:bg-[var(--color-text-dark)] hover:text-white transition-all duration-300 uppercase text-xs tracking-widest font-bold mb-4">
                            Make a Reservation
                        </button>

                        <button className="w-full px-6 py-3 bg-[var(--color-text-dark)] text-white hover:bg-neutral-800 transition-all duration-300 uppercase text-xs tracking-widest font-bold">
                            Sign up for Newsletter
                        </button>
                    </div>
                </div>

                <div className="border-t border-black/10 pt-10">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                        <div className="max-w-2xl">
                            <p className="text-xs leading-relaxed opacity-70 mb-4">
                                We acknowledge the Traditional Custodians of this land upon which Cafe Sydney sits, the Gadigal people of the Eora Nation. We recognise their continuing connection and unique cultural and spiritual relationship to the land, water and community. We pay our deepest respects to them and their culture, and to Elders, past, present and emerging.
                            </p>
                            <p className="text-xs uppercase tracking-widest opacity-70">
                                © Cafe Sydney 2024
                            </p>
                        </div>

                        <div className="flex items-center gap-6">
                            <Link href="#" className="opacity-70 hover:opacity-100 transition-opacity"><Instagram size={20} /></Link>
                            <Link href="#" className="opacity-70 hover:opacity-100 transition-opacity"><Facebook size={20} /></Link>
                            <Link href="#" className="opacity-70 hover:opacity-100 transition-opacity"><Twitter size={20} /></Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
