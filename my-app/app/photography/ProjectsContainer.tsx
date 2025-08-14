import Projects from "./Projects";
import { retrieveProjectsData } from "./utils/retrieveProjectsData";
import { createClient } from "@/utils/supabase/server";

export default async function EpisodesContainer() {
  const supabase = await createClient();
  const { data: user_page } = await supabase.auth.getUser();

  const data = await retrieveProjectsData();
  const projects = data?.projects ?? [];

  return <Projects projectsData={projects}  userData={user_page.user} />;
}