"use client";

import { Camera, BarChart3, Dumbbell, Users } from "@/components/Icons";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Strengths() {
  const { strengths } = PORTFOLIO_DATA;

  const getStrengthIcon = (name: string) => {
    switch (name) {
      case "Camera":
        return <Camera className="w-7 h-7 text-neutral-900" strokeWidth={1.5} />;
      case "BarChart3":
        return <BarChart3 className="w-7 h-7 text-neutral-900" strokeWidth={1.5} />;
      case "Dumbbell":
        return <Dumbbell className="w-7 h-7 text-neutral-900" strokeWidth={1.5} />;
      case "Users":
        return <Users className="w-7 h-7 text-neutral-900" strokeWidth={1.5} />;
      default:
        return <Camera className="w-7 h-7 text-neutral-900" strokeWidth={1.5} />;
    }
  };

  return (
    <section
      id="strengths"
      className="relative py-20 md:py-28 px-5 md:px-8 bg-[#ece7df] text-neutral-900 border-t border-neutral-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header: Left (04. CORE STRENGTHS) | Right (SKILLS THAT DRIVE EVERYTHING I DO) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-12 md:mb-16">
          <div>
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-neutral-600 uppercase">
              {strengths.sectionNumber}. {strengths.sectionTitle}
            </span>
          </div>
          <div>
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-neutral-500 uppercase">
              {strengths.subtitle}
            </span>
          </div>
        </div>

        {/* 4 Clean Minimal Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0 md:divide-x divide-neutral-300/80 border-y border-neutral-300/80 py-4">
          {strengths.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 md:p-8 hover:bg-neutral-200/40 transition-colors rounded-lg md:rounded-none group"
            >
              <div className="w-14 h-14 rounded-full bg-neutral-200/80 border border-neutral-300 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {getStrengthIcon(item.iconName)}
              </div>
              <h4 className="text-sm md:text-base font-semibold text-neutral-900 tracking-tight leading-snug max-w-[200px]">
                {item.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
