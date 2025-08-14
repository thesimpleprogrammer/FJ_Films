import Hero from "./Hero";
import { retrieveDmData } from "./utils/RetrieveSupabaseData";
import { createClient } from "@/utils/supabase/server";

export default async function HeroContainer() {
  const supabase = await createClient();
  const { data: user_page } = await supabase.auth.getUser();

  const data = await retrieveDmData();
  const photographyData = data?.photographyData ?? [];

//   console.log("In the container: " + JSON.stringify(photographyData))

  return <Hero photographyHeroData={photographyData} userData={user_page.user}/>;
}