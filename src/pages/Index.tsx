import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";
import { CLINIC_PHONE_RAW } from "@/components/clinic/constants";
import Header from "@/components/clinic/Header";
import HeroAboutServices from "@/components/clinic/HeroAboutServices";
import DoctorsReviewsFooter from "@/components/clinic/DoctorsReviewsFooter";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const items = el.querySelectorAll(".reveal");
    items.forEach((i) => obs.observe(i));
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const aboutRef = useReveal();
  const servicesRef = useReveal();
  const doctorsRef = useReveal();
  const reviewsRef = useReveal();
  const contactsRef = useReveal();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      <Header
        scrolled={scrolled}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        scrollTo={scrollTo}
      />

      <HeroAboutServices
        scrollTo={scrollTo}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
      />

      <DoctorsReviewsFooter
        scrollTo={scrollTo}
        doctorsRef={doctorsRef}
        reviewsRef={reviewsRef}
        contactsRef={contactsRef}
      />

      {/* Floating phone button */}
      <a
        href={`tel:${CLINIC_PHONE_RAW}`}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#4a90b8] hover:bg-[#3a7fa6] flex items-center justify-center shadow-2xl transition-all duration-300 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <Icon name="Phone" size={22} className="text-white" />
      </a>
    </div>
  );
}