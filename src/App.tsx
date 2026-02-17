import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import { Navbar } from "./components/Navbar";
import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
import { InventorySection } from "./components/sections/InventorySection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { TimelineSection } from "./components/sections/TimelineSection";
import { TrustSection } from "./components/sections/TrustSection";
import { VinRiskSection } from "./components/sections/VinRiskSection";
import {
  inventory,
  services,
  steps,
  testimonials,
  trustPillars,
  uiText,
} from "./content/siteContent";
import { useNavAndParallax } from "./hooks/useNavAndParallax";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import type { Language, Localized } from "./types/site";
import "./App.css";

function App() {
  const [navSolid, setNavSolid] = useState(false);
  const [toast, setToast] = useState(false);
  const [language, setLanguage] = useState<Language>("en");

  const videoSrc = `${import.meta.env.BASE_URL}GT.mp4`;
  const topLogoSrc = `${import.meta.env.BASE_URL}LOGO.png`;

  const reduceMotion = useMemo(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  useEffect(() => {
    document.documentElement.lang = language === "am" ? "hy" : "en";
  }, [language]);

  useRevealOnScroll(reduceMotion);
  useNavAndParallax(reduceMotion, setNavSolid);

  const t = (value: Localized) => value[language];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setToast(true);
    window.setTimeout(() => setToast(false), 2500);
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell" id="home">
      <Navbar
        language={language}
        setLanguage={setLanguage}
        navSolid={navSolid}
        t={t}
        navText={uiText.nav}
        topLogoSrc={topLogoSrc}
      />

      <main>
        <HeroSection t={t} heroText={uiText.hero} videoSrc={videoSrc} />
        <TrustSection pillars={trustPillars} t={t} />
        <InventorySection
          t={t}
          inventoryText={uiText.inventory}
          inventory={inventory}
        />
        <TimelineSection t={t} timelineText={uiText.timeline} steps={steps} />
        <VinRiskSection t={t} vinRiskText={uiText.vinRisk} />
        <ServicesSection
          t={t}
          servicesText={uiText.services}
          services={services}
        />
        <TestimonialsSection
          t={t}
          testimonialsText={uiText.testimonials}
          testimonials={testimonials}
        />
        <ContactSection
          t={t}
          contactText={uiText.contact}
          toast={toast}
          onSubmit={handleSubmit}
        />
      </main>
    </div>
  );
}

export default App;
