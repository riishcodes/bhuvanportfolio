"use client";

import { useState } from "react";
import { X, Mail, Copy, Check, Send } from "@/components/Icons";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "Creative Direction / Fashion",
    message: "",
  });

  const emailAddress = "bhuvan.collaborate@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#111111] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
              aria-label="Close contact modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
              Direct Inquiries
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mt-1 mb-2">
              Let&apos;s Build Together
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
              Available for creative direction, fashion collaborations, technical Forex analysis, and physique coaching consultations.
            </p>

            {/* Quick Copy Email Card */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900 border border-white/10 mb-6">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div className="truncate">
                  <p className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono">
                    Direct Email
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-white truncate">
                    {emailAddress}
                  </p>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-neutral-200 transition-colors shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Inquiries Form */}
            {formSubmitted ? (
              <div className="py-8 text-center bg-white/5 rounded-xl border border-white/10">
                <Check className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white uppercase tracking-wider">
                  Message Sent Successfully
                </h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Thank you for reaching out. Bhuvan will respond shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 font-mono mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900/90 border border-white/10 text-sm text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-neutral-600"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 font-mono mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900/90 border border-white/10 text-sm text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-neutral-600"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 font-mono mb-1.5">
                    Collaboration Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) =>
                      setFormData({ ...formData, interest: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900/90 border border-white/10 text-sm text-white focus:outline-none focus:border-white/40 transition-colors"
                  >
                    <option value="Creative Direction / Fashion">
                      Fashion & Visual Media / Creative Direction
                    </option>
                    <option value="Forex Analysis / Trading Strategy">
                      Forex Technical Analysis Consultation
                    </option>
                    <option value="Fitness & Physique Coaching">
                      Aesthetic Physique Coaching
                    </option>
                    <option value="Other Project / Brand Collaboration">
                      Other Project / Brand Collaboration
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 font-mono mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Briefly describe your vision or requirements..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900/90 border border-white/10 text-sm text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-neutral-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 active:scale-98 shadow-lg"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
