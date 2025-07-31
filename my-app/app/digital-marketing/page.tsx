import HeroContainer from "./HeroContainer";
import Clients from "./clients";
import AboutContainer from "./AboutContainer";
import AboutExtrasContainer from "./AboutExtrasContainer";
import ServicesContainer from "./ServicesContainer";
import CompletedContainer from "./CompletedContainer";
import ReachOut from "./reachOut";

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
    </div>
  );
}