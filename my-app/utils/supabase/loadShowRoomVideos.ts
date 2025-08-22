// utils/supabase/loadSectionUrl.ts
import { createClient } from "@/utils/supabase/client";

export const loadShowRoomVideos = async (section: string) => {
    const supabase = await createClient();
    // const { data, error } = await supabase.storage
    //   .from("videography")
    //   .list(section, {
    //     limit: 100,
    //     offset: 0,
    //     sortBy: { column: "name", order: "asc" },
    //   });
  
    // if (data && data?.length > 0) {
      // const fileName = data[0].name;
      const { data: urlData, error } = await supabase.storage
        .from("videography")
        .list(section, {
          limit: 16,
          offset: 0,
          sortBy: { column: 'name', order: 'asc' },
        });

      if(urlData) {
        return urlData || null;
      } 
      
    // }  
    console.error(`Failed to fetch for ${section}:`, error);
    return null;
  };
  