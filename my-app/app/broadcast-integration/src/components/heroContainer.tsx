import { createClient } from "@/utils/supabase/server";
import { retrieveDmData } from "../../utils/RetrieveSupabaseData";
import Hero from "./hero";

export default async function HeroContainer() {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();
  const admin = user.user;

  const data = await retrieveDmData();
  const multimedia = data?.multimediaData ?? [];

  return <Hero user={admin} multimediaHeroData={multimedia} />;
}
