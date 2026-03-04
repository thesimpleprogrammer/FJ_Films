"use client";

import SignOutButton from "./SignOutButton";
import { useState } from "react";

export default function SubNavbar({ user_page, links, title }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-10 sm:px-15 md:px-20 py-8 text-white">
      <div className="relative flex items-center justify-between">

        {/* Division Title */}
        <h1 className="text-4xl font-bold tracking-tight">
          {title ?? "FJ Films"}
        </h1>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-8">
          {links.map((link: any, index: number) => (
            <a
              key={index}
              href={link.url}
              className="hover:text-slate-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="mailto:femi@thefjfilms.com">
            <button className="border border-white px-4 py-2 hover:bg-white hover:text-black transition">
              Talk to Us
            </button>
          </a>
          {user_page.user && <SignOutButton user={user_page} />}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-6 flex flex-col gap-4 lg:hidden bg-white text-black p-4 rounded-lg">
          {links.map((link: any, index: number) => (
            <a
              key={index}
              href={link.url}
              onClick={() => setIsOpen(false)}
              className="py-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}