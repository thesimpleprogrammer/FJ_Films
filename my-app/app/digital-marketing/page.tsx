import HeroContainer from "./HeroContainer";
import Clients from "./clients";
import AboutContainer from "./AboutContainer";
import AboutExtrasContainer from "./AboutExtrasContainer";
import About from "./about";

export default function Page() {
  return (
    <div>
      <HeroContainer />
      <Clients />
      <AboutContainer />
      <AboutExtrasContainer />
    </div>
  );
}