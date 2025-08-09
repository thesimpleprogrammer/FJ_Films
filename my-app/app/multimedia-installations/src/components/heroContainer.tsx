import { createClient } from "@/utils/supabase/server";
import Hero from "./hero";

export default async function HeroContainer() {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();
  const admin = user.user;

  return (<Hero user={admin} />)
}
