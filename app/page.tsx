import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import MenuPreview from "./components/MenuPreview";
import HorizontalGallery from "./components/HorizontalGallery";
import JournalSection from "./components/JournalSection";
import CareersSection from "./components/CareersSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <Hero />
      <IntroSection />
      <MenuPreview />
      <HorizontalGallery />
      <JournalSection />
      <CareersSection />
    </main>
  );
}
