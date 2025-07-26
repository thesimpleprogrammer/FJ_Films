import { loadShowRoomVideos } from "@/utils/supabase/loadShowRoomVideos";
import { loadShowroomUrl } from "@/utils/supabase/loadShowroomUrl";

export async function fetchShowroomVideoUrls() {
  const videos = await loadShowRoomVideos("section3");

  if(videos) {
  const urls = await Promise.all(
    videos.map(async (video) => {
      const url = await loadShowroomUrl(video.name);
      return { name: video.name, url };
    })
  );

  return urls.filter((video) => video.url); // remove any failed ones
} else {
    return "There was no video"
}
}

