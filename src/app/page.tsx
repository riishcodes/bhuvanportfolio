"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkSection from "@/components/WorkSection";
import Education from "@/components/Education";
import Strengths from "@/components/Strengths";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  const handleExploreClick = () => {
    const workElem = document.getElementById("work");
    if (workElem) {
      workElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#080808] text-[#f5f5f5] selection:bg-white selection:text-black">
      {/* Film grain noise texture overlay for cinematic editorial vibe */}
      <div className="fixed inset-0 pointer-events-none noise-overlay z-30 opacity-40" />

      {/* Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Page Sections */}
      <main className="relative z-10 flex flex-col w-full">
        <Hero onExploreClick={handleExploreClick} />
        <About />
        <WorkSection onContactClick={handleOpenContact} />
        <Education />
        <Strengths />
        <CTA onConnectClick={handleOpenContact} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Interactive Contact & Inquiry Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
}
