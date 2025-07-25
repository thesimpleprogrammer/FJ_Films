import Hero from "./Hero";
import WhatWeDo from "./What-We-Do";
import { createClient } from "../../utils/supabase/server";
import SignOutButton from "../src/components/SignOutButton";
import { loadSectionUrl } from "../../utils/supabase/loadSectionUrl";
import Showroom from "./Showroom";

export default async function Home() {

  const supabase = await createClient();

  const { data: user_page } = await supabase.auth.getUser();

  let videography_page_main;
  // let videography_error_page_main;
  let storageMain;
  let url;
  let url2;
  let url3;
  let url4;

  try {
    const { data: storageData } = await supabase.storage
      .from("videography")
      .getPublicUrl("section2/17039.jpg");

    if (!storageData) {
      console.error("Error fetching videography data");
      // storageData_main = storageData;
      return;
    }

    // Handle the fetched data (e.g., update state)
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
    videography_page_main = videography_page;
    // setvideographyValue(videography);
  } catch (error) {
    console.error("Error:", error);
  }

url = await loadSectionUrl("section2_1");
url2 = await loadSectionUrl("section2_2");
url3 = await loadSectionUrl("section2_3");
url4 = await loadSectionUrl("section2_4");


  return (
    <div className="w-full">
      {/* <ToastContainer /> */}
      <Hero
        user_hero={user_page}
        videography={videography_page_main}
        // videographyError={videography_error_page_main}
      />
      <WhatWeDo
        user_hero={user_page}
        videography={videography_page_main}
        // videographyError={videography_error_page_main}
        storageMain={storageMain}
        url={url}
        url2={url2}
        url3={url3}
        url4={url4}
      />
      <Showroom />
      <SignOutButton user={user_page?.user} />
    </div>
  );
}
