import Workflow from "./Workflow";
import { retrieveDmData } from "./utils/RetrieveSupabaseData";
import { createClient } from "@/utils/supabase/server";

export default async function WorkflowContainer() {
  const supabase = await createClient();
  const { data: user_page } = await supabase.auth.getUser();

  const data = await retrieveDmData();
  const photographyData = data?.photographyData ?? [];

  return <Workflow photographyWorkflowData={photographyData} userData={user_page.user}/>;
}