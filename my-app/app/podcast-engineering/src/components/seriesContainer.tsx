import Series from "./series";
import { retrieveEpisodesData } from "../../utils/retrieveEpisodesData";
import { createClient } from "@/utils/supabase/server";

export default async function SeriesContainer() {
  const supabase = await createClient();
  const { data: user_page } = await supabase.auth.getUser();

  const data = await retrieveEpisodesData();
  const episodes = data?.episodes ?? [];

  return <Series episodesData={episodes}  userData={user_page.user} />;
}