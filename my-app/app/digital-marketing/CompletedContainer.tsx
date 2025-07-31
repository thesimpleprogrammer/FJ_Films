import Completed from './completed';
import { retrieveDmData } from "./src/component/RetrieveSupabaseData";
import { createClient } from "@/utils/supabase/server";

export default async function CompletedContainer() {
    const supabase = await createClient();
  const { data: user_page } = await supabase.auth.getUser();

  const data = await retrieveDmData();
  const digitalMarketingData = data?.digitalMarketingData ?? [];

  return <Completed section4Data={digitalMarketingData} userData={user_page} />
}
