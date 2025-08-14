import HeroContainer from "./HeroContainer";
import Clients from "./clients";
import AboutContainer from "./AboutContainer";
import AboutExtrasContainer from "./AboutExtrasContainer";
import ServicesContainer from "./ServicesContainer";
import CompletedContainer from "./CompletedContainer";
import ReachOut from "./reachOut";
import ContactUs from "../src/components/Contact";
import PricingPlans from "../src/components/Pricing";
import Navbar from "./Navbar";

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroContainer />
      <Clients />
      <AboutContainer />
      <AboutExtrasContainer />
      <ServicesContainer />
      <CompletedContainer />
      <PricingPlans />
      <ReachOut />
      <ContactUs />
    </div>
  );
}