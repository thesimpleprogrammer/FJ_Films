import HeroContainer from "./HeroContainer";
import Clients from "./clients";
import AboutContainer from "./AboutContainer";
import AboutExtrasContainer from "./AboutExtrasContainer";
import ServicesContainer from "./ServicesContainer";
import CompletedContainer from "./CompletedContainer";
import ReachOut from "./reachOut";
import ContactUs from "../src/components/Contact";

export default function Page() {
  return (
    <div>
      <HeroContainer />
      <Clients />
      <AboutContainer />
      <AboutExtrasContainer />
      <ServicesContainer />
      <CompletedContainer />
      <ReachOut />
      <ContactUs />
    </div>
  );
}