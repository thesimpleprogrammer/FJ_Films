import Hero from "./src/components/hero";
import SeriesContainer from "./src/components/seriesContainer";
import SubscribeContainer from "./src/components/subscribeContainer";
import ContactUs from "../src/components/Contact";
// import PricingPlans from "../src/components/Pricing";
// import Testimonials from "../src/components/Testimonials";
import TestimonialsContainer from "../src/components/TestimonialsContainer";
import PodcastContactCTA from "./src/components/PodcastCTA";
import CollaborationCTA from "../src/components/collaborationCTA";

export default async function Page() {
  return (
    <>
      <Hero />
      <SeriesContainer />
      <TestimonialsContainer />
      {/* <PricingPlans /> */}
      <SubscribeContainer />
      <PodcastContactCTA />
      <CollaborationCTA
        title="Podcast Collaboration & Engineering"
        description="Podcasters, networks, and media teams — if you need clean, professional audio, let’s work together."
        ctaText="Work Together"
      />
      <ContactUs />
    </>
  );
}
