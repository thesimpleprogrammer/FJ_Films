// utils/supabase/helpers.ts
import { createClient } from "@/utils/supabase/client";

export const fetchSectionUrl = async (
    section: string,
    setUrlFn: (url: string) => void,
    setFinished: (val: boolean) => void
  ) => {
    const supabase = await createClient();
  
    const { data, error } = await supabase.storage
      .from("videography")
      .list(section, {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });
  
    if (data && data.length > 0) {
      const fileName = data[0].name;
      const { data: urlData } = await supabase.storage
        .from("videography")
        .getPublicUrl(`${section}/${fileName}`);
  
      if (urlData?.publicUrl) {
        setUrlFn(urlData.publicUrl);
        setFinished(false);
      }
    } else {
      console.error(`Error fetching ${section}:`, error);
    }
  };
  
  export const uploadSectionFile = async (
    event: any,
    section: string,
    setFinished: (val: boolean) => void,
    setUrlFn: (url: string) => void
  ) => {
    event.preventDefault();
    const file = event.target.files[0];
    setFinished(true);
  
    const supabase = await createClient();
  
    const { data: existingFiles, error } = await supabase.storage
      .from("videography")
      .list(section, {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });
  
    const oldFileName = existingFiles?.[0]?.name;
  
    const { data: uploadData } = await supabase.storage
      .from("videography")
      .upload(`${section}/${file.name}`, file, {
        cacheControl: "3600",
        upsert: false,
      });
  
    if (!uploadData) {
      setFinished(false);
      return;
    }
  
    if (oldFileName) {
      const { error: deleteError } = await supabase.storage
        .from("videography")
        .remove([`${section}/${oldFileName}`]);
  
      if (deleteError) {
        console.error("Couldn't delete old file:", deleteError);
        setFinished(false);
        return;
      }
    }
  
    // Fetch new URL
    await fetchSectionUrl(section, setUrlFn, setFinished);
  };
  