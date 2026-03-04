"use client";

import { ArrowUpRight } from "lucide-react";

type CollaborationCTAProps = {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
};

export default function CollaborationCTA({
  title = "Open for Collaboration",
  description = "Photographers, videographers, creatives, brands, and production teams — if you have an idea worth building, let’s collaborate.",
  ctaText = "Start a Conversation",
  ctaLink = "mailto:femi@thefjfilms.com",
}: CollaborationCTAProps) {
  return (
    <section className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-14 sm:px-12 sm:py-16">
          
          {/* Subtle glow */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-transparent" />

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              {title}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-400">
              {description}
            </p>

            <div className="mt-8">
              <a
                href={ctaLink}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:border-white hover:bg-white hover:text-black"
              >
                {ctaText}
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}