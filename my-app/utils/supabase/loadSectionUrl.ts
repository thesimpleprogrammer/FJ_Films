// utils/supabase/loadSectionUrl.ts
import { createClient } from "@/utils/supabase/client";

export const loadSectionUrl = async (section: string) => {
    const supabase = await createClient();
    const { data, error } = await supabase.storage
      .from("videography")
      .list(section, {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });
  
    if (data && data?.length > 0) {
      const fileName = data[0].name;
      const { data: urlData } = await supabase.storage
        .from("videography")
        .getPublicUrl(`${section}/${fileName}`);
  
      return urlData?.publicUrl || null;
    }
  
    console.error(`Failed to fetch for ${section}:`, error);
    return null;
  };
  