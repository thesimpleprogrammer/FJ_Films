import Services from "./services";
import { retrieveDmData } from "./src/component/RetrieveSupabaseData";
import { createClient } from "@/utils/supabase/server";

export default async function ServicesContainer() {
    const supabase = await createClient();
  const { data: user_page } = await supabase.auth.getUser();

  const data = await retrieveDmData();
  const digitalMarketingData = data?.digitalMarketingData ?? [];

  return (
      <Services section3Data={digitalMarketingData} userData={user_page}/>
  );
}
