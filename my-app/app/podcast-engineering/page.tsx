import Hero from "./src/components/hero";
import EpisodesContainer from "./src/components/episodesContainer";
import SubscribeContainer from "./src/components/subscribeContainer";
import ContactUs from "../src/components/Contact";
import PricingPlans from "../src/components/Pricing";

export default async function Page() {
  

  return (
    <>
      <Hero />
      <EpisodesContainer />
      <PricingPlans />
      <SubscribeContainer />
      <ContactUs />
    </>
  );
}
