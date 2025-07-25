// import { loadShowRoomVideos } from "@/utils/supabase/loadShowRoomVideos";
// import { loadShowroomUrl } from "@/utils/supabase/loadShowroomUrl";

//     let datas = await loadShowRoomVideos("section3");
//     let dataUrls: (string | null | any)[] = []

//     datas?.map(async (data, index) => {
//         let url = await loadShowroomUrl(data.name)
//         dataUrls.push(url)
//     })

//     export default dataUrls
// import { loadShowRoomVideos } from "@/utils/supabase/loadShowRoomVideos";
// import { loadShowroomUrl } from "@/utils/supabase/loadShowroomUrl";

// export async function fetchShowroomVideoUrls() {
//   const datas = await loadShowRoomVideos("section3");
//   if(datas) {
//   const urls = await Promise.all(
//     datas.map((data) => loadShowroomUrl(data.name))
//   );
//   return urls.filter((url): url is string => Boolean(url));
// } else {
//     return "Error, there was no data"
// }
// }

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

