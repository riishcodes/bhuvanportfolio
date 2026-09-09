"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "@/components/Icons";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA, WorkItem, VideoReel } from "@/data/portfolioData";
import WorkCard from "./WorkCard";

interface WorkSectionProps {
  onContactClick: () => void;
}

export default function WorkSection({ onContactClick }: WorkSectionProps) {
  const { work } = PORTFOLIO_DATA;
  const [activeModalItem, setActiveModalItem] = useState<WorkItem | null>(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<VideoReel | null>(null);

  const handleOpenModal = (item: WorkItem) => {
    setActiveModalItem(item);
    setActiveImgIndex(0);
  };

  const handlePrevImg = (galleryLen: number) => {
    setActiveImgIndex((prev) => (prev === 0 ? galleryLen - 1 : prev - 1));
  };

  const handleNextImg = (galleryLen: number) => {
    setActiveImgIndex((prev) => (prev === galleryLen - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="work"
      className="relative py-20 md:py-28 px-5 md:px-8 bg-[#090909] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header: Left (02. MY WORK) | Right (THREE PATHS. ONE VISION.) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-12 md:mb-16">
          <div>
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-neutral-400 uppercase">
              {work.sectionNumber}. {work.sectionTitle}
            </span>
          </div>
          <div>
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-neutral-500 uppercase">
              {work.subtitle}
            </span>
          </div>
        </div>

        {/* 3 Work Cards: Stacked on Mobile, 3 Columns on Tablet/Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {work.items.map((item, index) => (
            <WorkCard
              key={item.id}
              item={item}
              index={index}
              onSelect={() => handleOpenModal(item)}
            />
          ))}
        </div>

        {/* Cinematic Video Reels Section */}
        {work.reels && work.reels.length > 0 && (
          <div className="mt-20 pt-16 border-t border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-8">
              <div>
                <span className="text-[11px] font-mono tracking-[0.25em] text-neutral-500 uppercase">
                  Motion & Videography
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">
                  Cinematic Reels & Motion
                </h3>
              </div>
              <p className="text-xs text-neutral-400 tracking-wider">
                Click any reel to play video
              </p>
            </div>

            {/* 3 Video Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {work.reels.map((reel, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveVideo(reel)}
                  className="group relative aspect-[9/16] sm:aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-neutral-950 cursor-pointer shadow-lg hover:border-white/30 transition-all duration-300"
                >
                  <video
                    src={reel.videoSrc}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover filter brightness-85 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                  {/* Reel Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase bg-white/10 px-2 py-0.5 rounded backdrop-blur">
                      {reel.tag}
                    </span>
                    <h4 className="text-base font-bold text-white uppercase tracking-tight mt-2">
                      {reel.title}
                    </h4>
                    <p className="text-xs text-neutral-300 mt-1 flex items-center gap-1.5 font-medium">
                      <span>Watch Full Video</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-[#111111] border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>

              <h4 className="text-lg font-bold text-white uppercase tracking-tight mb-3">
                {activeVideo.title}
              </h4>

              <div className="relative w-full aspect-[9/16] sm:aspect-[4/5] rounded-lg overflow-hidden bg-black">
                <video
                  src={activeVideo.videoSrc}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Full-Screen Pure Image Preview Lightbox */}
      <AnimatePresence>
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl h-[88vh] flex flex-col justify-between bg-[#0a0a0a] border border-white/15 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-30 p-3 rounded-full bg-black/70 hover:bg-white hover:text-black text-white border border-white/20 transition-all duration-300 shadow-xl"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Main Image Stage */}
              <div className="relative w-full flex-1 rounded-xl overflow-hidden border border-white/10 bg-black flex items-center justify-center">
                {activeModalItem.gallery && activeModalItem.gallery.length > 0 ? (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeModalItem.gallery[activeImgIndex]}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={activeModalItem.gallery[activeImgIndex]}
                        alt={`Preview image ${activeImgIndex + 1}`}
                        fill
                        sizes="(max-width: 1280px) 100vw, 1200px"
                        className="object-contain object-center p-2"
                      />
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={activeModalItem.image}
                      alt="Preview image"
                      fill
                      sizes="(max-width: 1280px) 100vw, 1200px"
                      className="object-contain object-center p-2"
                    />
                  </div>
                )}
              </div>

              {/* Gallery Strip at Bottom (If multiple images) */}
              {activeModalItem.gallery && activeModalItem.gallery.length > 1 && (
                <div className="flex items-center justify-center gap-2.5 overflow-x-auto pt-3 pb-1">
                  {activeModalItem.gallery.map((imgSrc, gIdx) => (
                    <button
                      key={gIdx}
                      onClick={() => setActiveImgIndex(gIdx)}
                      className={`relative w-16 sm:w-20 h-16 sm:h-20 rounded-lg overflow-hidden border shrink-0 transition-all duration-200 ${
                        activeImgIndex === gIdx
                          ? "border-white ring-2 ring-white/60 scale-105"
                          : "border-white/20 opacity-50 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={imgSrc}
                        alt={`Thumbnail ${gIdx + 1}`}
                        fill
                        sizes="80px"
                        className="object-cover object-center"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
