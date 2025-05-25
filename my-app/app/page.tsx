import Hero from "./src/components/Hero"
import HomeContent from "./src/components/HomeContent"
import SignOutButton from "./src/components/SignOutButton";
import { createClient } from "@/utils/supabase/server";


export default async function Home () {
  const supabase = await createClient()
  const { data: user_page } = await supabase.auth.getUser();

  return (
    <div className="relative">
      <Hero />
      <HomeContent />
      <SignOutButton user={user_page}  />
    </div>
  )
}
