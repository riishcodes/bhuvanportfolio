"use client";

import Image from "next/image";
import { ArrowRight } from "@/components/Icons";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 md:py-24 px-5 md:px-8 overflow-hidden bg-[#080808]"
    >
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-72 md:h-96 bg-neutral-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Typography & CTAs (Desktop: 7 cols, Mobile: full) */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
          {/* Top micro-category tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4 md:mb-6"
          >
            <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-neutral-400 uppercase">
              {personal.heroTags}
            </span>
          </motion.div>

          {/* Main Huge Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.05] max-w-2xl"
          >
            DISCIPLINE
            <br />
            CREATES
            <br />
            FREEDOM
          </motion.h1>

          {/* Thin dividing line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-[2px] bg-neutral-600 my-5 md:my-6"
          />

          {/* Subtitle / 3 Roles */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-sm md:text-base text-neutral-300 font-normal tracking-wide max-w-xl mb-8 leading-relaxed"
          >
            {personal.heroSubtitle}
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center gap-4"
          >
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                onExploreClick();
              }}
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-black text-xs md:text-sm font-bold tracking-[0.15em] uppercase hover:bg-neutral-200 transition-all duration-300 shadow-lg shadow-white/5 active:scale-95 group"
              id="hero-explore-btn"
            >
              <span>{personal.heroActionText}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Cinematic Portrait & Editorial Accents (Desktop: 5 cols, Mobile: full) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center items-center order-1 lg:order-2"
        >
          {/* Handwritten Quote Accent (matches reference top right) */}
          <div className="absolute -top-6 sm:-top-8 right-2 sm:right-6 z-20 pointer-events-none transform -rotate-6">
            <p className="font-script text-2xl sm:text-3xl text-neutral-200 tracking-wide select-none drop-shadow-md">
              Same Mindset,
              <br />
              <span className="pl-4">Different Playgrounds.</span>
            </p>
          </div>

          {/* Main Cinematic Image Frame */}
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] aspect-[3/4] rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 bg-neutral-900">
            <Image
              src={personal.heroImage || "/photos/bhuvan-hero.png"}
              alt="Bhuvan - Fashion, Forex Analyst, Fitness Coach"
              fill
              priority
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 420px"
              className="object-cover object-center filter contrast-105 brightness-95 transition-transform duration-700 hover:scale-105"
            />
            {/* Dark gradient overlay for bottom and edges */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/20" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>

          {/* Vertical Pillar Labels (matches reference right bottom) */}
          <div className="hidden sm:flex flex-col items-end gap-1.5 absolute -bottom-4 right-0 text-[10px] tracking-[0.25em] font-semibold text-neutral-400 uppercase select-none">
            {personal.pillars.map((pillar) => (
              <span key={pillar} className="hover:text-white transition-colors">
                {pillar}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
