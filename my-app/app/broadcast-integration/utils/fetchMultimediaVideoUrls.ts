import { loadMultimediaVideos } from "./loadMultimediaVideos";
import { loadMultimediaVideoUrl } from "./loadMultimediaVideoUrl";

export async function fetchMultimediaVideoUrls() {
  const videos = await loadMultimediaVideos("hero"); //Remember to create storage folder

  console.log("multimedia videos: " + videos)

  if(videos) {
  const urls = await Promise.all(
    videos.map(async (video) => {
      const url = await loadMultimediaVideoUrl(video.name);
      return { name: video.name, url };
    })
  );

  return urls.filter((video) => video.url); // remove any failed ones
} else {
    return "There was no video"
}
}

