"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "@/components/Icons";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "HOME", href: "#hero" },
    { name: "ABOUT", href: "#about" },
    { name: "WORK", href: "#work" },
    { name: "EDUCATION", href: "#education" },
    { name: "STRENGTHS", href: "#strengths" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        e.preventDefault();
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080808]/95 backdrop-blur-md border-b border-white/10 py-2 shadow-2xl"
          : "bg-transparent py-3 md:py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="text-lg md:text-xl font-black tracking-[0.25em] text-white hover:text-white/80 transition-colors uppercase select-none"
          id="nav-brand"
        >
          BHUVAN
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-[11px] font-semibold tracking-[0.2em] text-neutral-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-white transition-colors uppercase py-0.5 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <button
            onClick={onOpenContact}
            className="hover:text-white transition-colors uppercase py-0.5 relative group"
          >
            CONTACT
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
          </button>
        </nav>

        {/* Right side CTA & Hamburger */}
        <div className="flex items-center space-x-2.5">
          <button
            onClick={onOpenContact}
            className="hidden lg:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/20 text-[11px] font-semibold tracking-wider uppercase text-white hover:bg-white hover:text-black transition-all duration-300 shadow-md active:scale-95"
          >
            Let&apos;s Talk
            <ArrowUpRight className="w-3 h-3" />
          </button>

          {/* Hamburger button for Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 text-white hover:text-neutral-300 focus:outline-none rounded flex items-center justify-center transition-transform active:scale-90"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
            id="mobile-menu-button"
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 48px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[48px] bg-[#080808]/98 backdrop-blur-2xl z-40 flex flex-col justify-between px-6 py-6 md:hidden border-t border-white/10 overflow-y-auto"
          >
            <div className="flex flex-col space-y-5 pt-2">
              <span className="text-[11px] tracking-[0.25em] text-neutral-500 uppercase font-mono">
                Menu Navigation
              </span>
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between py-3 border-b border-white/5 text-2xl font-bold tracking-tight text-neutral-200 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs text-neutral-500 font-mono">
                      0{idx + 1}
                    </span>
                    {link.name}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-neutral-500" />
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenContact();
                }}
                className="flex items-center justify-between py-3 border-b border-white/5 text-2xl font-bold tracking-tight text-neutral-200 hover:text-white transition-colors text-left"
              >
                <span className="flex items-center gap-3">
                  <span className="text-xs text-neutral-500 font-mono">06</span>
                  CONTACT
                </span>
                <ArrowUpRight className="w-5 h-5 text-neutral-500" />
              </button>
            </div>

            {/* Mobile Menu Footer Info (No Social Media) */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm font-bold text-white tracking-widest uppercase">BHUVAN</p>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Fashion & Visual Media • Forex Technical Analyst • Fitness Coach
              </p>
              <p className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mt-4">
                A More Disciplined Tomorrow.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
