import Hero from "./src/components/Hero"
import HomeContent from "./src/components/HomeContent"
import About from "./src/components/About"
// import SignOutUser from "./src/components/signOutUser"


export default async function Home () {

  return (
    <div className="relative w-full overflow-x-hidden">
      <Hero />
      <About />
      <HomeContent />
    </div>
  )
}
