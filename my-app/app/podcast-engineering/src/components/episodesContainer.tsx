import Episodes from "./episodes";
import { retrieveEpisodesData } from "../../utils/retrieveEpisodesData";
import { createClient } from "@/utils/supabase/server";

export default async function EpisodesContainer() {
  const supabase = await createClient();
  const { data: user_page } = await supabase.auth.getUser();

  const data = await retrieveEpisodesData();
  const episodes = data?.episodes ?? [];

  return <Episodes episodesData={episodes}  userData={user_page.user} />;
}