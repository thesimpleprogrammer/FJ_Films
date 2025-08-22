import { createClient } from "@/utils/supabase/client";
import { ImageReduce } from "./ImageReduce";

export const fetchSectionUrl = async (
  section: string,
  setUrlFn: (url: string) => void,
  setFinished: (val: boolean) => void,
  storageName: string
) => {
  const supabase = await createClient();

  const { data, error } = await supabase.storage
    .from(storageName)
    .list(section, {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

  if (data && data.length > 0) {
    const fileName = data[0].name;
    const { data: urlData } = await supabase.storage
      .from(storageName)
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
  setUrlFn: (url: string) => void,
  storageName: string
) => {
  event.preventDefault();
  setFinished(true);
  
  const file = event.target.files[0];
  const reducedFile = await ImageReduce(file);

  if (reducedFile) {
    const supabase = await createClient();

    const { data: existingFiles, error } = await supabase.storage
      .from(storageName)
      .list(section, {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

    const oldFileName = existingFiles?.[0]?.name;

    const { data: uploadData } = await supabase.storage
      .from(storageName)
      .upload(`${section}/${file.name}`, reducedFile, {
        // cacheControl: "3600",
        upsert: true,
      });

    if (!uploadData) {
      setFinished(false);
      return;
    }

    if (oldFileName) {
      const { error: deleteError } = await supabase.storage
        .from(storageName)
        .remove([`${section}/${oldFileName}`]);

      if (deleteError) {
        console.error("Couldn't delete old file:", deleteError);
        setFinished(false);
        return;
      }
    }

    
    // Fetch new URL
    await fetchSectionUrl(section, setUrlFn, setFinished, storageName);
  }

  setFinished(false);
};
