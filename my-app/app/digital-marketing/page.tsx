import HeroContainer from "./HeroContainer";
import Clients from "./clients";
import AboutContainer from "./AboutContainer";
import AboutExtrasContainer from "./AboutExtrasContainer";
import ServicesContainer from "./ServicesContainer";
import CompletedContainer from "./CompletedContainer";
import ReachOut from "./reachOut";
import ContactUs from "../src/components/Contact";
import PricingPlans from "../src/components/Pricing";
import NavbarContainer from "./NavbarContainer";
import TestimonialsContainer from "../src/components/TestimonialsContainer";
// import TestimonialsConta from "../src/components/Testimonials";

export default function Page() {
  return (
    <div>
      <NavbarContainer />
      <HeroContainer />
      <Clients />
      <AboutContainer />
      <AboutExtrasContainer />
      <ServicesContainer />
      <CompletedContainer />
      <TestimonialsContainer />
      <PricingPlans />
      <ReachOut />
      <ContactUs />
    </div>
  );
}