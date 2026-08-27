
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import ClinicInfo from "./components/ClinicInfo";
import AboutSection from "./components/AboutSection";
import ConditionsSlider from "./components/ConditionsSlider";
import TreatmentsSection from "./components/TreatmentsSection";
import EducationSection from "./components/EducationSection";
import InstagramSection from "./components/InstagramSection";
import PatientFeedback from "./components/PatientFeedback";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
  const elements = document.querySelectorAll<HTMLElement>(
    ".reveal-on-scroll, .reveal-section"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -60px 0px",
    }
  );

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbfcfa] pt-[76px]">
      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main>
        <Hero />
        <Ticker />
        <ClinicInfo />
        <AboutSection />
        <ConditionsSlider />
        <TreatmentsSection />
        <EducationSection />
        <InstagramSection />
        <PatientFeedback />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
