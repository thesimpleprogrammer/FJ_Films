"use client"

import { Mail, Phone, MessageCircle, Calendar, MapPin, Instagram, Twitter, Send, MessageSquare, ArrowUpRight, Copy, Globe } from "lucide-react";
import { useState } from "react";

// Drop this component anywhere in your Next.js app.
// Tailwind-only. No forms — just links to where people can talk to you.
// ✅ Customize your links in the CONTACTS object below or pass them as props.

export type ContactLinks = {
  email?: string; // e.g. "hello@yourdomain.com"
  phone?: string; // e.g. "+2348012345678"
  whatsapp?: string; // full wa.me link e.g. "https://wa.me/2348012345678"
  calendly?: string; // e.g. "https://calendly.com/yourteam/intro-call"
  twitterDM?: string; // e.g. "https://x.com/messages/compose?recipient_id=YOUR_ID"
  instagram?: string; // e.g. "https://instagram.com/yourhandle"
  telegram?: string; // e.g. "https://t.me/yourhandle"
  discord?: string; // e.g. invite link
  liveChat?: string; // internal or external chat URL
  location?: string; // Google Maps link
  website?: string; // main site or help center
};

const DEFAULT_CONTACTS: ContactLinks = {
  email: "hello@yourdomain.com",
  phone: "+2348012345678",
  whatsapp: "https://wa.me/2348012345678",
  calendly: "https://calendly.com/yourteam/intro-call",
  twitterDM: "https://x.com/yourhandle",
  instagram: "https://instagram.com/yourhandle",
  telegram: "https://t.me/yourhandle",
  discord: "https://discord.gg/yourinvite",
  liveChat: "+2348012345678",
  location: "https://maps.google.com?q=Your%20Studio",
  website: "https://yourdomain.com/help",
};

function copyToClipboard(text: string) {
  if (typeof navigator !== "undefined" && navigator.clipboard) {
    navigator.clipboard.writeText(text);
  }
}

function LinkCard({
  href,
  label,
  description,
  icon: Icon,
  newTab = true,
  onCopy,
}: {
  href?: string;
  label: string;
  description: string;
  icon: any;
  newTab?: boolean;
  onCopy?: string;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <a
      href={href || "#"}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={`group relative block rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900`}
    >
      <div className="flex items-start gap-4">
        <div className="rounded-2xl border border-zinc-200/60 p-3 dark:border-zinc-800">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold tracking-tight">{label}</h3>
            {href && (
              <ArrowUpRight className="h-4 w-4 opacity-50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            )}
          </div>
          <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
        </div>
      </div>

      {onCopy && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            copyToClipboard(onCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-xl border border-zinc-200/60 px-2.5 py-1.5 text-xs font-medium text-zinc-700 transition hover:bg-zinc-50 active:scale-[0.98] dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800/50"
          aria-label={`Copy ${label}`}
        >
          <Copy className="h-3.5 w-3.5" />
          {copied ? "Copied" : "Copy"}
        </button>
      )}
    </a>
  );
}

export default function TalkToUsSection({ contacts = DEFAULT_CONTACTS }: { contacts?: ContactLinks }) {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
      {/* Background flair */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-3xl" />
      </div>

      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-200/60 text-white px-3 py-1 text-xs font-medium tracking-tight dark:border-zinc-800 dark:bg-zinc-900">
          <MessageSquare className="h-3.5 w-3.5" />
          We reply fast
        </p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Talk to us</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Choose the channel that fits you best and message us directly.
        </p>
      </div>

      {/* Quick actions */}
      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
        {contacts.whatsapp && (
          <a
            href={contacts.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-200/60 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-600 dark:border-emerald-900/60 dark:bg-emerald-950 dark:text-emerald-100"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        )}
        {contacts.calendly && (
          <a
            href={contacts.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl border border-indigo-200/60 bg-indigo-50 px-4 py-3 text-sm font-semibold text-indigo-900 transition hover:bg-indigo-600 dark:border-indigo-900/60 dark:bg-indigo-950 dark:text-indigo-100"
          >
            <Calendar className="h-4 w-4" /> Book a call
          </a>
        )}
        {contacts.liveChat && (
          <a
            href={`sms:+${contacts.liveChat}`}
            className="flex items-center justify-center gap-2 rounded-2xl border border-cyan-200/60 bg-cyan-50 px-4 py-3 text-sm font-semibold text-cyan-900 transition hover:bg-cyan-600 dark:border-cyan-900/60 dark:bg-cyan-950 dark:text-cyan-100"
          >
            <MessageSquare className="h-4 w-4" /> Live chat
          </a>
        )}
      </div>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 lg:grid-cols-3 text-white">
        {contacts.email && (
          <LinkCard
            href={`mailto:${contacts.email}`}
            label="Email"
            description={`${contacts.email}`}
            icon={Mail}
            newTab={false}
            onCopy={contacts.email}
          />
        )}

        {contacts.phone && (
          <LinkCard
            href={`tel:${contacts.phone}`}
            label="Call"
            description={`Tap to call us now`}
            icon={Phone}
            newTab={false}
            onCopy={contacts.phone}
          />
        )}

        {contacts.whatsapp && (
          <LinkCard
            href={contacts.whatsapp}
            label="WhatsApp"
            description="Quick replies during business hours"
            icon={MessageCircle}
          />
        )}

        {contacts.twitterDM && (
          <LinkCard
            href={contacts.twitterDM}
            label="Twitter / X"
            description="DM our team"
            icon={Twitter}
          />
        )}

        {contacts.instagram && (
          <LinkCard
            href={contacts.instagram}
            label="Instagram"
            description="Send us a DM"
            icon={Instagram}
          />
        )}

        {contacts.telegram && (
          <LinkCard
            href={contacts.telegram}
            label="Telegram"
            description="Chat on our channel"
            icon={Send}
          />
        )}

        {contacts.discord && (
          <LinkCard
            href={contacts.discord}
            label="Discord"
            description="Join the community"
            icon={MessageSquare}
          />
        )}

        {contacts.website && (
          <LinkCard
            href={contacts.website}
            label="Help Center"
            description="Guides, FAQs, and status updates"
            icon={Globe}
          />
        )}

        {contacts.location && (
          <LinkCard
            href={contacts.location}
            label="Find us"
            description="Get directions on Google Maps"
            icon={MapPin}
          />
        )}
      </div>

      {/* Footer note */}
      {contacts.email && <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-zinc-200/60 bg-white p-4 text-center text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
        <a href={`mailto:${contacts.email}`}>Prefer another channel? Email us and we’ll make it work.</a>
      </div>}
    </section>
  );
}

// --- Usage ---------------------------------------------------------------
// 1) Ensure Tailwind is set up in your Next.js project.
// 2) Install lucide-react for icons:  npm i lucide-react
// 3) Import and use:
//    import TalkToUsSection from "./TalkToUsSection";
//    export default function Page() {
//      return (
//        <main className="min-h-screen bg-zinc-50 py-10 dark:bg-black">
//          <TalkToUsSection />
//        </main>
//      );
//    }
// 4) To customize links, pass a contacts prop:
//    <TalkToUsSection contacts={{
//       email: "support@mysite.com",
//       phone: "+2348012345678",
//       whatsapp: "https://wa.me/2348012345678",
//       calendly: "https://calendly.com/mysite/demo",
//       twitterDM: "https://x.com/messages/compose?recipient_id=123456",
//       instagram: "https://instagram.com/mysite",
//       telegram: "https://t.me/mysite",
//       discord: "https://discord.gg/abc123",
//       liveChat: "/chat",
//       location: "https://maps.google.com/?q=My%20Studio",
//       website: "https://mysite.com/help",
//    }} />
