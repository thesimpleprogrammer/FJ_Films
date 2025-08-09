// utils/supabase/loadSectionUrl.ts
import { createClient } from "@/utils/supabase/client";

export const loadMultimediaVideoUrl = async (name: string) => {
  const supabase = await createClient();

  const { data: urlData } = await supabase.storage
    .from("multimedia")
    .getPublicUrl(`hero/${name}`);

  if (urlData) {
    return urlData?.publicUrl || null;
  } else {
    console.error(`Failed to fetch for ${name}`);
    return null;
  }
};
