"use client";

import { fetchShowroomVideoUrls } from "./showroomLogic";
import { uploadVideoToSupabase } from "../../../../utils/supabase/uploadVideoToSupabase"; // You’ll define this
import { Key, useEffect, useRef, useState } from "react";

export function ShowRoomLayout() {
  const [dataUrls, setDataUrls] = useState<string[] | any>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [finished, setFinished] = useState(false);
  const [currentVideoName, setCurrentVideoName] = useState<string | null>(null);

  // Load videos
  const loadVideos = async () => {
    const urls = await fetchShowroomVideoUrls();
    // if(urls)
    setDataUrls(urls);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  // Handle file selection
  // const handleFileChange = () => {
  //   // uploadVideoToSupabase(file, currentVideoName);
  // };

  // Trigger file input when a video is clicked
  // const handleVideoClick = (videoName: any) => {
  //   setCurrentVideoName(videoName);
  //   fileInputRef.current?.click();
  // };

  return (
    <div className="w-full columns-3 sm:columns-4 space-y-3">
      {dataUrls.map((video: any) => (
        <div
          key={video.name}
          className="break-inside-avoid cursor-pointer relative"
          // onClick={(e) => }
        >
          <form action="">
            <label htmlFor={video.name} className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 z-50 ${
            finished
              ? "hover:bg-transparent hover:text-black"
              : "hover:bg-black hover:text-white"
          } transform -translate-x-1/2 inline-block cursor-pointer px-5 py-3 border text-xl transition-colors duration-300 border-black rounded-md opacity-0 group-hover:opacity-100`} role="button">Upload</label>
            <input
              id={video.name}
              type="file"
              accept="video/mp4"
              className="hidden"
              ref={fileInputRef}
              onChange={(e) => {
                uploadVideoToSupabase(e, video.name, setFinished, setDataUrls);
              }}
            />
            <video
              className="w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </form>
        </div>
      ))}
    </div>
  );
}

// "use client"

// import { fetchShowroomVideoUrls } from "./showroomLogic";
// import { Key, useEffect, useState } from "react";

// export function ShowRoomLayout() {
//   const [dataUrls, setDataUrls]: any = useState()

//   useEffect(() => {
//   async function fetchData() {
//     const urls = await fetchShowroomVideoUrls();
//     setDataUrls(urls);
//   }
//   fetchData();
// }, []);

//   return (
//     <div className="w-full gap-3 space-y-3 columns-4">
//       {dataUrls?.map((src: string | undefined, index: Key | null | undefined) => (
//         <div key={index} className="break-inside-avoid">
//           <video className="w-full object-cover" autoPlay muted loop playsInline>
//                   <source src={src} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//         </div>
//       ))}
//     </div>
//   );
// }
