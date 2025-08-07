import Subscribe from "./subscribe"
import { retrieveDmData } from "../../utils/RetrieveSupabaseData";
import { createClient } from "@/utils/supabase/server";

export default async function SubscribeContainer () {
    const supabase = await createClient();
  const { data: user_page } = await supabase.auth.getUser();

  const data = await retrieveDmData();
  const podcastData = data?.podcastData ?? [];

    return <Subscribe podcastData={podcastData} userData={user_page} />
}
