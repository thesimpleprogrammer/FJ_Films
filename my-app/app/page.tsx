import Hero from "./src/components/Hero"
import HomeContent from "./src/components/HomeContent"
// import SignOutButton from "./src/components/SignOutButton";
// import SignOutWrapper from "./src/components/SignOutWrapper";
import SignOutUser from "./src/components/signOutUser"
// import { createClient } from "@/utils/supabase/server";


export default async function Home () {
  // const supabase = await createClient()
  // const { data: user_page } = await supabase.auth.getUser();
  // const user = user_page?.user;

  return (
    <div className="relative">
      <Hero />
      <HomeContent />
      <SignOutUser />
    </div>
  )
}
