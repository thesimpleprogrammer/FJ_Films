/*
Multimedia Installations Website
Single-file React component preview (Tailwind CSS required in parent project)
- Exports default React component
- Uses Tailwind utility classes
- Assumes Tailwind is configured in the app (Next.js / Vite / Create React App)
- Replace placeholder URLs and media IDs with your real assets or a CMS

Sections included:
- Header / Nav
- Hero with featured project (video background fallback)
- Projects gallery (images, video, audio, iframe/embed)
- Project detail modal / lightbox
- Events / schedule
- Press / downloads
- About & artist statement
- Contact / booking form (works with Formspree or Netlify Forms)
- Accessibility and performance notes in comments

To deploy: host on Vercel / Netlify / Cloudflare Pages. Use a headless CMS (Sanity/Contentful/Strapi/NetlifyCMS) for dynamic content.
*/
// import React, { useState } from "react";
// import NavBar from "./src/components/navbar"; 
import HeroContainer from "./src/components/heroContainer";
import Projects from "./src/components/projects";
import EventsScheduleContainer from "./src/components/eventsScheduleContainer";
// import PressDownloads from "./src/components/pressDownloads";
import Contact from "./src/components/contact";
import Footer from "./src/components/footer";
import AboutContainer from "./src/components/aboutContainer";
import PricingPlans from "../src/components/Pricing";
import Testimonials from "./src/components/Testimonials";
import NavbarContainer from "./src/components/NavbarContainer";
// Sample data - swap with API calls to CMS

export default function BroadcastIntegration () {

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased"> 
      {/* <NavBar /> */}
      <NavbarContainer />
      <HeroContainer />
      <Projects />
      <EventsScheduleContainer />
      {/* <PressDownloads /> */}
      <AboutContainer />
      <Testimonials />
      <PricingPlans />
      <Contact />
      <Footer />
    </div>
  );
}

 {/* Accessibility & performance notes (developer-facing) */}
      {/*
        - Provide descriptive alt tags for images and captions for video/audio.
        - Use lazy-loading for images: <img loading="lazy" />
        - Serve optimized media (H.264 or H.265 for video, AAC for audio) via CDN.
        - Use responsive <picture> sources for different resolutions.
        - Preload critical fonts sparingly. Use font-display: swap.
        - Use SSR (Next.js) for improved SEO. Add open graph meta tags.
        - Add structured data (schema.org) for events and exhibitions.
      */}
