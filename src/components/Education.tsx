"use client";

import { LayoutGrid, FileSpreadsheet, TrendingUp, Briefcase } from "@/components/Icons";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Education() {
  const { education } = PORTFOLIO_DATA;

  const getIcon = (name: string) => {
    switch (name) {
      case "LayoutGrid":
        return <LayoutGrid className="w-5 h-5 text-neutral-800" />;
      case "FileSpreadsheet":
        return <FileSpreadsheet className="w-5 h-5 text-neutral-800" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-neutral-800" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-neutral-800" />;
      default:
        return <LayoutGrid className="w-5 h-5 text-neutral-800" />;
    }
  };

  return (
    <section
      id="education"
      className="relative py-20 md:py-28 px-5 md:px-8 bg-[#ece7df] text-neutral-900 border-t border-neutral-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header: Left (03. EDUCATION) | Right (FOUNDATIONS FOR A BIGGER TOMORROW) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-12 md:mb-16">
          <div>
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-neutral-600 uppercase">
              {education.sectionNumber}. {education.sectionTitle}
            </span>
          </div>
          <div>
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-neutral-500 uppercase">
              {education.subtitle}
            </span>
          </div>
        </div>

        {/* 4 Structured Academic Modules spanning full width */}
        <div className="flex flex-col divide-y divide-neutral-300/80 border-y border-neutral-300/80 py-2">
          {education.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-5 sm:py-6 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-center hover:bg-neutral-200/40 px-3 sm:px-6 rounded-lg transition-colors"
            >
              {/* Title with Icon */}
              <div className="sm:col-span-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-200/90 border border-neutral-300 flex items-center justify-center shrink-0 shadow-sm">
                  {getIcon(item.iconName)}
                </div>
                <h4 className="text-base sm:text-lg font-bold tracking-tight text-neutral-900">
                  {item.title}
                </h4>
              </div>

              {/* Description */}
              <div className="sm:col-span-7 pl-14 sm:pl-0">
                <p className="text-xs sm:text-sm text-neutral-700 font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
