import Hero from "./Hero";
import WhatWeDo from "./What-We-Do";
import { createClient } from "../../utils/supabase/server";


export default async function Home() {
  const supabase = await createClient();

  const { data: user_page } = await supabase.auth.getUser();

  let videography_page_main;
  // let videography_error_page_main;
  let storageMain;
  let url;
  let url2;

  try {
    const { data: storageData} =
    await supabase.storage.from('videography')
    .getPublicUrl("section2/17039.jpg")

    if (!storageData) {
      console.error("Error fetching videography data");
      // storageData_main = storageData;
      return;
    }

    // Handle the fetched data (e.g., update state)
    console.log(storageData);
    storageMain = storageData;

  } catch (error) {
    console.error("Error:", error);
  }

  try {

    const { data: videography_page, error: videography_error_page } =
      await supabase.from("videography").select("*");

    if (videography_error_page) {
      console.error("Error fetching videography data:", videography_error_page);
      // videography_error_page_main = videography_error_page;
      return;
    }

    // Handle the fetched data (e.g., update state)
    console.log("Videography page data: " + videography_page);
    videography_page_main = videography_page;
    // setvideographyValue(videography);
  } catch (error) {
    console.error("Error:", error);
  }

  try {
    // const getData = async () => {
        const supabase = await createClient();
    
        const { data, error } = await supabase.storage
          .from("videography")
          .list("section2_1", {
            limit: 100,
            offset: 0,
            sortBy: { column: "name", order: "asc" },
          });
    
        if (data) {
          console.log("This is the data that has the problem" + JSON.stringify(data))
          const fileName = data[0].name;
          // setSelectedFile(fileName);
          console.log("This is the file name: " + fileName)
    
          const { data: urlData } = supabase.storage
            .from("videography")
            .getPublicUrl(`section2_1/${fileName}`);
    
          if(urlData){
            // setUrl(urlData.publicUrl)
            url = urlData.publicUrl
            console.log("This is the url: "+ JSON.stringify(urlData.publicUrl))
          }
        } else {
          console.log("There was an error: " + error);
          return;
        }
      // };
  } catch (error) {
    console.log("There was an Error: "+ error)
  }

  try {
    // const getData = async () => {
        const supabase = await createClient();
    
        const { data, error } = await supabase.storage
          .from("videography")
          .list("section2_2", {
            limit: 100,
            offset: 0,
            sortBy: { column: "name", order: "asc" },
          });
    
        if (data) {
          console.log("This is the data Ive been looking for: " + JSON.stringify(data))
          const fileName = data[0].name;
          // setSelectedFile(fileName);
          console.log("This is the file name: " + fileName)
    
          const { data: urlData } = supabase.storage
            .from("videography")
            .getPublicUrl(`section2_2/${fileName}`);
    
          if(urlData){
            // setUrl(urlData.publicUrl)
            url2 = urlData.publicUrl
            console.log("This is the url: "+ JSON.stringify(urlData.publicUrl))
          }
        } else {
          console.log("There was an error: " + error);
          return;
        }
      // };
  } catch (error) {
    console.log("There was an Error: "+ error)
  }

  return (
    <>
      <Hero
        user_hero={user_page}
        videography={videography_page_main}
        // videographyError={videography_error_page_main}
      />
      <WhatWeDo
        user_hero={user_page}
        videography={videography_page_main}
        // videographyError={videography_error_page_main}
        storageMain = {storageMain}
        url = {url}
        url2 = {url2}
      />
    </>
  );
}
