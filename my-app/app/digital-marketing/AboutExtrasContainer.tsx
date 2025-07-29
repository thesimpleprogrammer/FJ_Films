import AboutExtras from "./aboutExtras";
import { retrieveDmData } from "./src/component/RetrieveSupabaseData";
import { createClient } from "@/utils/supabase/server";

export default async function AboutExtrasContainer() {
  const supabase = await createClient();
  const { data: user_page } = await supabase.auth.getUser();

  const data = await retrieveDmData();
  const digitalMarketingData = data?.digitalMarketingData ?? [];

  return (
    <AboutExtras
      section2ExtraData={digitalMarketingData}
      userData={user_page}
    />
  );
}
