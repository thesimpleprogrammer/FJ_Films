import Hero from "./src/components/hero";
import EpisodesContainer from "./src/components/episodesContainer";
import SubscribeContainer from "./src/components/subscribeContainer";
import ContactUs from "../src/components/Contact";

export default async function Page() {
  

  return (
    <>
      <Hero />
      <EpisodesContainer />
      <SubscribeContainer />
      <ContactUs />
    </>
  );
}
