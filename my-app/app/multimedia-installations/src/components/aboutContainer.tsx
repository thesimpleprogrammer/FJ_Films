import { createClient } from "@/utils/supabase/server";
import { retrieveDmData } from "../../utils/RetrieveSupabaseData";
import About from "./about";

export default async function AboutContainer() {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();
  const admin = user.user;

  const data = await retrieveDmData();
  const multimedia = data?.multimediaData ?? [];

  return <About user={admin} multimediaData={multimedia} />;
}
