// Main Layout
"use client";

import { fetchShowroomVideoUrls } from "./showroomLogic";
import { useEffect, useRef, useState } from "react";
import ShowroomVideoCard from "./showRoomVideoCard";
import { VideoModal } from "./VideoModal";

// Define User type if not imported from elsewhere
// type User = {
//   id: string;
//   name: string;
//   // add other properties as needed
// };

export function ShowRoomLayout(user: any) {
  const [dataUrls, setDataUrls] = useState<string[] | any>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [finished, setFinished] = useState(false);
  const [modalVideo, setModalVideo] = useState<string | null>(null);

  useEffect(() => {
    const loadVideos = async () => {
      const urls = await fetchShowroomVideoUrls();
      setDataUrls(urls);
    };
    loadVideos();
  }, []);

  return (
    <div className="w-full columns-3 sm:columns-4 space-y-3">
      {dataUrls.map((video: any) => (
        <ShowroomVideoCard
          key={video.name}
          video={video}
          finished={finished}
          fileInputRef={fileInputRef}
          setFinished={setFinished}
          setDataUrls={setDataUrls}
          onFullscreen={() => setModalVideo(video.url)}
          user={user}
        />
      ))}
      {modalVideo && (
        <VideoModal src={modalVideo} onClose={() => setModalVideo(null)} />
      )}
      {finished && (
        <div className="fixed top-20 right-0 w-fit px-5 py-3 bg-orange-500 text-white flex justify-center z-[9999] p-20">
          <div className="text-lg animate-pulse">Updating...</div>
        </div>
      )}
    </div>
  );
}
