import { createClient } from "@/utils/supabase/client";
import { fetchShowroomVideoUrls } from "../../app/videography/src/components/showroomLogic";
 // make sure this is correctly initialized

//  export const uploadSectionFile = async (
//      event: any,
//      section: string,
//      setFinished: (val: boolean) => void,
//      setUrlFn: (url: string) => void
//    ) => {
//      event.preventDefault();
//      const file = event.target.files[0];
//      setFinished(true);
   
//      const supabase = await createClient();
   
//      const { data: existingFiles, error } = await supabase.storage
//        .from("videography")
//        .list(section, {
//          limit: 100,
//          offset: 0,
//          sortBy: { column: "name", order: "asc" },
//        });
   
//      const oldFileName = existingFiles?.[0]?.name;
   
//      const { data: uploadData } = await supabase.storage
//        .from("videography")
//        .upload(`${section}/${file.name}`, file, {
//          cacheControl: "3600",
//          upsert: false,
//        });
   
//      if (!uploadData) {
//        setFinished(false);
//        return;
//      }
   
//      if (oldFileName) {
//        const { error: deleteError } = await supabase.storage
//          .from("videography")
//          .remove([`${section}/${oldFileName}`]);
   
//        if (deleteError) {
//          console.error("Couldn't delete old file:", deleteError);
//          setFinished(false);
//          return;
//        }
//      }
   
//      // Fetch new URL
//      await fetchSectionUrl(section, setUrlFn, setFinished);
//    };

export async function uploadVideoToSupabase(event: any, fileName: string, setFinished: (val: boolean) => void,
     setUrlFn: any) {
  event.preventDefault()
        console.log("Working")

   const file = event.target.files[0];
     setFinished(true);
  
  const supabase = await createClient()

  const { data: existingFiles, error } = await supabase.storage
       .from("videography")
       .list("section3", {
         limit: 100,
         offset: 0,
         sortBy: { column: "name", order: "asc" },
         search: fileName
       });

    const { data: uploadData } = await supabase.storage
       .from("videography")
       .upload(`section3/${file.name}`, file, {
         cacheControl: "3600",
         upsert: false,
       });

       console.log("Uploaded data" + JSON.stringify(uploadData))
   
     if (!uploadData) {
       setFinished(false);
       return;
     }
   
     if (existingFiles) {
        const oldFileName = existingFiles[0].name
       const { error: deleteError } = await supabase.storage
         .from("videography")
         .remove([`section3/${oldFileName}`]);
   
       if (deleteError) {
         console.error("Couldn't delete old file:", deleteError);
         setFinished(false);
         return;
       }
     }

     const urls = await fetchShowroomVideoUrls();
     setUrlFn(urls)
     setFinished(false)

//   const { data, error } = await supabase.storage
//     .from("videography") // replace with your actual bucket
//     .upload(`section3/${fileName}`, file, {
//       upsert: true, // This replaces the file if it already exists
//       cacheControl: "0",
//     });

//   if (error) {
//     console.error("Upload error:", error.message);
//     alert("Upload failed. Try again.");
//   } else {
//     console.log("Uploaded successfully:", data.path);
//   }
}
