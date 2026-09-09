"use client";

import Image from "next/image";
import { ArrowRight } from "@/components/Icons";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface CTAProps {
  onConnectClick: () => void;
}

export default function CTA({ onConnectClick }: CTAProps) {
  const { cta } = PORTFOLIO_DATA;

  return (
    <section className="relative w-full bg-[#080808] overflow-hidden py-16 md:py-24 border-t border-neutral-800">
      {/* Background Cinematic Banner */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-950 min-h-[340px] md:min-h-[400px] flex items-center">
          {/* Horizon Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={cta.image}
              alt="A more creative, disciplined, and fulfilled tomorrow"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover object-center filter brightness-60 contrast-110"
            />
            {/* Dark gradient for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80" />
          </div>

          {/* Content Over Banner */}
          <div className="relative z-10 w-full p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-neutral-400 uppercase mb-4"
              >
                {cta.tagline}
              </motion.p>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight"
              >
                A MORE CREATIVE,
                <br />
                DISCIPLINED, AND
                <br />
                FULFILLED TOMORROW.
              </motion.h2>
            </div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="shrink-0"
            >
              <button
                onClick={onConnectClick}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-xs sm:text-sm uppercase tracking-[0.18em] hover:bg-neutral-200 transition-all duration-300 shadow-xl shadow-white/10 active:scale-95 group"
                id="cta-connect-btn"
              >
                <span>{cta.buttonText}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
