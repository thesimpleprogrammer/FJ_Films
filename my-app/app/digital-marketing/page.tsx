import HeroContainer from "./HeroContainer";
import Clients from "./clients";
import AboutContainer from "./AboutContainer";
import AboutExtrasContainer from "./AboutExtrasContainer";
import ServicesContainer from "./ServicesContainer";

export default function Page() {
  return (
    <div>
      <HeroContainer />
      <Clients />
      <AboutContainer />
      <AboutExtrasContainer />
      <ServicesContainer />
    </div>
  );
}