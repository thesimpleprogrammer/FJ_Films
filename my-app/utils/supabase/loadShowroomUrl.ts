// utils/supabase/loadSectionUrl.ts
import { createClient } from "@/utils/supabase/client";

export const loadShowroomUrl = async (name: string) => {
  const supabase = await createClient();

  const { data: urlData } = await supabase.storage
    .from("videography")
    .getPublicUrl(`section3/${name}`);

  if (urlData) {
    return urlData?.publicUrl || null;
  } else {
    console.error(`Failed to fetch for ${name}`);
    return null;
  }
};
