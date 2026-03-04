"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Photography", href: "/photography" },
  { name: "Videography", href: "/videography" },
  { name: "Digital Marketing", href: "/digital-marketing" },
  { name: "Podcast Engineering", href: "/podcast-engineering" },
  { name: "Broadcast Integration", href: "/broadcast-integration" },
];

export default function ParentNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide text-white"
        >
          <span className="bg-blue-950 bg-clip-text text-transparent">
            YourStudio
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-white/80 transition hover:text-white"
            >
              <span className="group">
                {link.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden">
          <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b1020]/95 via-[#0f172a]/95 to-[#020617]/95 backdrop-blur-xl shadow-xl">
            <ul className="flex flex-col divide-y divide-white/10">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-4 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-pink-500/10 blur-2xl" />
    </header>
  );
}