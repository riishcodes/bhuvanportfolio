"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "@/components/Icons";
import { motion, AnimatePresence } from "framer-motion";
import { WorkItem } from "@/data/portfolioData";

interface WorkCardProps {
  item: WorkItem;
  index: number;
  onSelect?: (item: WorkItem) => void;
}

export default function WorkCard({ item, index, onSelect }: WorkCardProps) {
  const gallery = item.gallery || [item.image];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Auto-slideshow for cards with multiple gallery images (e.g. Fashion & Visual Media)
  useEffect(() => {
    if (gallery.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % gallery.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [gallery]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onSelect?.(item)}
      className="group relative flex flex-col justify-between rounded-xl bg-[#111111] border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-black/70 active:scale-[0.99]"
    >
      {/* Top Card Header */}
      <div className="p-5 sm:p-6 pb-4">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white group-hover:text-neutral-100 transition-colors">
            {item.title}
          </h3>
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-white/40 group-hover:bg-white/10 transition-all shrink-0">
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
        {/* Subtle decorative underline */}
        <div className="w-12 h-[1.5px] bg-white/40 mb-4 group-hover:w-20 transition-all duration-500" />

        {/* Card Imagery with Smooth Auto Slideshow */}
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/5 bg-neutral-900 mb-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={gallery[currentImgIndex]}
              initial={{ opacity: 0.3, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.3, scale: 0.98 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={gallery[currentImgIndex]}
                alt={`${item.title} slide ${currentImgIndex + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                className="object-cover object-center filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

          {/* Slideshow Progress Dots if Multiple Images */}
          {gallery.length > 1 && (
            <div className="absolute bottom-2.5 left-0 right-0 flex items-center justify-center gap-1.5 z-10 pointer-events-none">
              {gallery.map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    dotIdx === currentImgIndex
                      ? "w-5 bg-white"
                      : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Bullet Points List (from resume & reference) */}
        <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
          {item.points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-1.5 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer: Motto & Number */}
      <div className="px-5 sm:px-6 py-4 mt-4 border-t border-white/10 flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-semibold text-neutral-400 bg-neutral-900/40 group-hover:bg-neutral-900/80 transition-colors">
        <span className="truncate pr-2">{item.footerMotto}</span>
        <span className="text-white/60 font-mono text-xs">{item.number}</span>
      </div>
    </motion.div>
  );
}
