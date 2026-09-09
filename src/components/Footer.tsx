"use client";

import Link from "next/link";
import { ArrowUp } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const { footer } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    <footer className="relative bg-[#060606] text-white pt-16 pb-12 px-5 md:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Brand & Tagline */}
          <div className="flex flex-col gap-2">
            <Link
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="text-2xl md:text-3xl font-black tracking-[0.25em] text-white uppercase hover:text-neutral-300 transition-colors"
            >
              {footer.brand}
            </Link>
            <p className="text-xs tracking-wider text-neutral-500 uppercase">
              Fashion & Visual Media • Forex Analyst • Fitness Coach
            </p>
          </div>

          {/* Center Nav Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-semibold tracking-[0.2em] text-neutral-400">
            {footer.links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-white transition-colors uppercase py-1"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={onOpenContact}
              className="hover:text-white transition-colors uppercase py-1 text-left"
            >
              CONTACT
            </button>
          </nav>

          {/* Right Column: Motto & Scroll-to-top */}
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
              {footer.motto}
            </span>

            {/* Scroll To Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full border border-white/10 hover:border-white/40 text-neutral-300 hover:text-white transition-all bg-white/5 active:scale-95"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tag */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono tracking-wider text-neutral-500">
          <span>{footer.copyright}</span>
          <span className="text-neutral-400 font-semibold uppercase tracking-[0.25em]">
            {footer.tag}
          </span>
        </div>
      </div>
    </footer>
  );
}
