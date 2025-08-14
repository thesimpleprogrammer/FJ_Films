import Hero from "./src/components/Hero"
import HomeContent from "./src/components/HomeContent"
// import SignOutUser from "./src/components/signOutUser"


export default async function Home () {

  return (
    <div className="relative">
      <Hero />
      <HomeContent />
    </div>
  )
}
