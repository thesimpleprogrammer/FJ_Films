import Hero from "./src/components/hero";
import EpisodesContainer from "./src/components/episodesContainer";
import SubscribeContainer from "./src/components/subscribeContainer";
import ContactUs from "../src/components/Contact";
import PricingPlans from "../src/components/Pricing";
// import Testimonials from "../src/components/Testimonials";
import TestimonialsContainer from "../src/components/TestimonialsContainer";

export default async function Page() {
  

  return (
    <>
      <Hero />
      <EpisodesContainer />
      <TestimonialsContainer />
      <PricingPlans />
      <SubscribeContainer />
      <ContactUs />
    </>
  );
}
