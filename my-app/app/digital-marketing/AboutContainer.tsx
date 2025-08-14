import About from "./about";
import { retrieveDmData } from "./src/component/RetrieveSupabaseData";
import { createClient } from "@/utils/supabase/server";

export default async function AboutContainer() {
  const supabase = await createClient();
  const { data: user_page } = await supabase.auth.getUser();

  const data = await retrieveDmData();
  const digitalMarketingData = data?.digitalMarketingData ?? [];

  return <About section2Data={digitalMarketingData} userData={user_page}/>;
}
