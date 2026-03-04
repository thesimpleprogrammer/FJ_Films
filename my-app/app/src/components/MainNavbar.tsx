"use client";

import Link from "next/link";

const DIVISIONS = [
  { name: "Home", href: "/" },
  { name: "Photography", href: "/photography" },
  { name: "Videography", href: "/videography" },
  { name: "Digital Marketing", href: "/digital-marketing" },
  { name: "Podcast Engineering", href: "/podcast" },
  { name: "Broadcast Integration", href: "/broadcast" },
];

export function MainNavbar() {
  return (
    <div className="w-full bg-black/90 backdrop-blur border-b border-white/10 px-10 md:px-20">
      <div className="flex items-center justify-between h-14 text-sm text-white">
        <span className="font-semibold tracking-wide">FJ FILMS</span>

        <nav className="hidden lg:flex gap-6">
          {DIVISIONS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-slate-300 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}