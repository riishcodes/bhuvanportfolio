"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function About() {
  const { about, personal } = PORTFOLIO_DATA;

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 px-5 md:px-8 bg-[#0a0a0a] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 md:mb-14">
          <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-neutral-400 uppercase">
            {about.sectionNumber}. {about.sectionTitle}
          </span>
        </div>

        <div className="max-w-4xl">
          {/* Bold Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mb-6 leading-tight"
          >
            {about.headline}
          </motion.h2>

          {/* Bio Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed mb-8 max-w-3xl"
          >
            {about.bio}
          </motion.p>

          {/* Signature Accent */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 flex items-center gap-4"
          >
            <span className="font-script text-4xl sm:text-5xl text-neutral-200 tracking-wide select-none drop-shadow">
              {personal.signatureText || "Bhuvan"}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
              / Identity
            </span>
          </motion.div>

          {/* 4 Stats Grid (2x2 on mobile, 4 in a row on larger screens) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-white/10"
          >
            {about.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-neutral-400 mt-2 font-medium leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
