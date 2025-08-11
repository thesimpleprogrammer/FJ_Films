import { createClient } from "@/utils/supabase/server";
import { retrieveDmData } from "../../utils/RetrieveSupabaseData";
import EventsSchedule from "./eventsSchedule";

export default async function EventsScheduleContainer() {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();
  const admin = user.user;

  const data = await retrieveDmData();
  const multimedia = data?.multimediaData ?? [];

  return <EventsSchedule user={admin} multimediaData={multimedia} />;
}
