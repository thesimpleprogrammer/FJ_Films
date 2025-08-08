"use client";

import { Modal } from "./modal";
import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";
import { uploadImage, deleteImage, uploadData } from "../../utils/uploadLogic";

// Supabase client (created once)
const supabase = createClient();

// Types
interface EpisodeContent {
  title: string;
  date: string;
  linkAudio: string;
  linkVideo: string;
  image: string;
  episodeNumber: string;
}

interface EpisodeData {
  id: string;
  content: EpisodeContent;
}

interface EpisodeForm {
  id?: string;
  title: string;
  date: string;
  audioLink: string;
  videoLink: string;
  episodeNumber: string;
  image: File | null;
}

export default function Episodes({
  episodesData,
  userData,
}: {
  episodesData: EpisodeData[];
  userData: any;
}) {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const [episodes, setEpisodes] = useState<EpisodeData[] | null>(
    episodesData || []
  );
  const [newEpisode, setNewEpisode] = useState<EpisodeForm>({
    id: "",
    title: "",
    date: "",
    audioLink: "",
    videoLink: "",
    episodeNumber: "",
    image: null,
  });

  useEffect(() => {
    setEpisodes(episodesData);
  }, [episodesData]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setNewEpisode((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setNewEpisode((prev) => ({ ...prev, image: e.target.files![0] }));
      }
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!id || !newEpisode.title || !newEpisode.date) {
      console.error("Missing required fields");
      return;
    }
    setFinished(true)

    try {
      const existingEpisode = episodes?.find((ep: any) => ep.id === id);
      let imageUrl = null;

      if (existingEpisode?.content?.image)
        await deleteImage(existingEpisode.content.image);
      if (newEpisode.image) imageUrl = await uploadImage(newEpisode.image);

      await uploadData(id, imageUrl, newEpisode);

      const { data: refreshedData } = await supabase
        .from("podcastEpisodes")
        .select("*");

      setEpisodes(refreshedData);
      setFinished(false);
    } catch (error) {
      console.error("Error");
      setFinished(false);
    }

    setModal(false);
    setId(null);
  };

  return (
    <div className="text-white pt-20 pb-32 px-20">
      <h1 className="text-6xl pb-20">Podcast Episodes</h1>
      <ul>
        {episodes?.map((episode, index) => (
          <li
            key={index}
            className="flex flex-row justify-between p-10 border-y border-white relative group"
          >
            {episode.content.image && (
              <Image
                src={episode.content.image}
                alt={episode.content.title}
                width={300}
                height={300}
                priority
                placeholder="empty"
                unoptimized
              />
            )}
            <div className="w-[60%] flex flex-col justify-between">
              <p>
                Episode {episode.content.episodeNumber} \ {episode.content.date}
              </p>
              <h2 className="text-5xl">{episode.content.title}</h2>
              <div className="flex flex-row gap-3">
                <a href={episode.content.linkAudio}>
                  <button className="border border-white hover:bg-white hover:text-black px-4 py-2 transition-colors duration-300 hover:cursor-pointer">
                    Listen
                  </button>
                </a>
                <a href={episode.content.linkVideo}>
                  <button className="border border-white hover:bg-white hover:text-black px-4 py-2 transition-colors duration-300 hover:cursor-pointer">
                    Watch
                  </button>
                </a>
              </div>
            </div>
            {userData && (
              <div className="absolute top-4 right-4 flex flex-row gap-5 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 hover:stroke-amber-300 hover:cursor-pointer"
                  onClick={() => {
                    setId(episode.id);
                    setModal(true);
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
            )}
          </li>
        ))}
      </ul>

      {modal && (
        <Modal
          onClose={() => {
            setId(null);
            setModal(false);
          }}
          handleInputChange={handleInputChange}
          handleImageChange={handleImageChange}
          handleSubmit={handleSubmit}
          finished={finished}
        />
      )}

      {finished && (
        <div className="fixed top-20 right-0 w-fit px-5 py-3 bg-orange-500 text-white flex justify-center z-[9999] p-20">
          <div className="text-lg animate-pulse">Updating...</div>
        </div>
      )}
    </div>
  );
}

// "use client";

// import { Modal } from "./modal";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { createClient } from "@/utils/supabase/client";

// export default function Episodes({ episodesData, userData }: any) {
//   const [modal, setModal] = useState<boolean>(false);
//   const [id, setId] = useState(null);
//   const [finished, setFinished] = useState(false);

//   type Episode = {
//     id?: string;
//     title: string;
//     date: string;
//     audioLink: string;
//     videoLink: string;
//     episodeNumber: string;
//     image: File | null;
//   };

//   const [episodes, setEpisodes] = useState(episodesData || []);
//   const [newEpisode, setNewEpisode] = useState<Episode>({
//     id: "",
//     title: "",
//     date: "",
//     audioLink: "",
//     videoLink: "",
//     episodeNumber: "",
//     image: null,
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     setFinished(true);
//     e.preventDefault();

//     const supabase = await createClient();
//     console.log("This is the new Episode: " + JSON.stringify(newEpisode));
//     try {
//       let imageUrl = null;

//       const existingEpisode = episodes.find((ep: any) => ep.id === id);

//       // 🗑️ Delete previous image if it exists
//       if (existingEpisode.content?.image) {
//         const encodedFilename = existingEpisode.content.image.split("/").pop();

//         // Decode the URL-encoded filename to convert "%20" to a space
//         const decodedFilename = decodeURIComponent(encodedFilename);

//         const imagePath = `episodesImages/${decodedFilename}`;

//         const { error: deleteError } = await supabase.storage
//           .from("episode-images")
//           .remove([imagePath]);

//         console.log("deleted Image: " + deleteError);
//         // if (deleteError) throw deleteError;
//       }
//       // ✅ Optional: Upload image to Supabase Storage
//       if (newEpisode.image) {
//         const { data, error } = await supabase.storage
//           .from("episode-images") // your bucket name
//           .upload(
//             `episodesImages/${newEpisode.image?.name}`,
//             newEpisode.image,
//             {
//               cacheControl: "3600",
//               upsert: false,
//             }
//           );

//         if (error) throw error;

//         const { data: publicUrlData } = supabase.storage
//           .from("episode-images")
//           .getPublicUrl(data.path);

//         imageUrl = publicUrlData.publicUrl;
//       }
//       // ✅ Update the episode (assumes you have the ID or other identifier)
//       const { error: updateError } = await supabase
//         .from("podcastEpisodes") // your table name
//         .update({
//           content: {
//             title: newEpisode.title,
//             date: newEpisode.date,
//             linkAudio: newEpisode.audioLink,
//             linkVideo: newEpisode.videoLink,
//             image: imageUrl,
//             episodeNumber: newEpisode.episodeNumber,
//           },
//         })
//         .eq("id", id); // Replace with actual ID or filtering logic

//       if (updateError) throw updateError;

//       const { data: refreshedData } = await supabase
//         .from("podcastEpisodes")
//         .select("*");

//       setEpisodes(refreshedData);
//       setFinished(false);
//     } catch (err: any) {
//       console.error("Upload error:", err.message);
//       setFinished(false);
//     }
//     setModal(false);
//     setId(null);
//   };

//   useEffect(() => {
//     setEpisodes(episodesData);
//   }, [episodesData]);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setNewEpisode({ ...newEpisode, [name]: value });
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setNewEpisode({ ...newEpisode, image: e.target.files[0] });
//     }
//   };

//   // Add functions to handle form submission and data retrieval from Supabase here

//   return (
//     <div className="text-white p-20">
//       <h1 className="text-6xl pb-20">Podcast Episodes</h1>
//       {/* Display existing episodes */}
//       <ul>
//         {episodes.map((episode: any, index: any) => (
//           <li
//             key={index}
//             className="flex flex-row justify-between p-10 border-y border-white relative group"
//           >
//             {episode.content.image && (
//               <Image
//                 src={episode.content.image}
//                 alt={episode.content.title}
//                 width={300}
//                 height={300}
//                 priority
//                 placeholder="empty"
//                 unoptimized
//               />
//             )}
//             <div className="w-[60%] flex flex-col justify-between">
//               <p>
//                 Episode {episode.content.episodeNumber} \ {episode.content.date}
//               </p>
//               <h2 className="text-5xl">{episode.content.title}</h2>
//               <div className="flex flex-row gap-3">
//                 <a href={episode.content.linkAudio}>
//                   <button className="border border-white hover:bg-white hover:text-black px-4 py-2 transition-colors duration-300 hover:cursor-pointer">
//                     Listen
//                   </button>
//                 </a>
//                 <a href={episode.content.linkVideo}>
//                   <button className="border border-white hover:bg-white hover:text-black px-4 py-2 transition-colors duration-300 hover:cursor-pointer">
//                     Watch
//                   </button>
//                 </a>
//               </div>
//             </div>
//             {userData && (
//               <div className="absolute top-4 right-4 flex flex-row gap-5 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="size-6 hover:stroke-amber-300 hover:cursor-pointer"
//                   onClick={() => {
//                     setId(episode.id);
//                     setModal(true);
//                   }}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
//                   />
//                 </svg>
//                 {/* <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="size-6 hover:stroke-rose-600 hover:cursor-pointer"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
//                   />
//                 </svg> */}
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//       {modal && (
//         <Modal
//           onClose={() => {
//             setId(null);
//             setModal(false);
//           }}
//           handleInputChange={handleInputChange}
//           handleImageChange={handleImageChange}
//           handleSubmit={handleSubmit}
//           finished={finished}
//         />
//       )}
//       {finished && (
//         <div className="fixed top-20 right-0 w-fit px-5 py-3 bg-orange-500 text-white flex justify-center z-[9999] p-20">
//           <div className="text-lg animate-pulse">Updating...</div>
//         </div>
//       )}
//     </div>
//   );
// }

// const { error: updateError } = await supabase
//     .from("podcastEpisodes") // your table name
//     .update({
//       content: {
//         title: newEpisode.title,
//         date: newEpisode.date,
//         linkAudio: newEpisode.audioLink,
//         linkVideo: newEpisode.videoLink,
//         image: imageUrl,
//         episodeNumber: newEpisode.episodeNumber,
//       },
//     })
//     .eq("id", id);

//   if (updateError) throw updateError;



  // const deleteImage = async (imageUrl: string) => {
  //   const encodedFilename = imageUrl.split("/").pop()!;
  //   const decodedFilename = decodeURIComponent(encodedFilename);
  //   const imagePath = `${PATH_PREFIX}${decodedFilename}`;

  //   const { error } = await supabase.storage.from(BUCKET).remove([imagePath]);
  //   if (error) console.warn("Image delete error:", error.message);
  // };

  // const uploadImage = async (image: File) => {
  //   const path = `${PATH_PREFIX}${image.name}`;

  //   const { data, error } = await supabase.storage.from(BUCKET).upload(path, image, {
  //     cacheControl: "3600",
  //     upsert: false,
  //   });

  //   if (error) throw error;

  //   const { data: publicUrlData } = supabase.storage.from(BUCKET).getPublicUrl(path);
  //   return publicUrlData.publicUrl;
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setFinished(true);

  //   try {
  //     let imageUrl = null;
  //     const existingEpisode = episodes.find((ep) => ep.id === id);

  //     if (!id || !newEpisode.title || !newEpisode.date) {
  //       throw new Error("Missing required fields");
  //     }

  //     // Delete previous image
  //     if (existingEpisode?.content?.image) {
  //       await deleteImage(existingEpisode.content.image);
  //     }

  //     // Upload new image
  //     if (newEpisode.image) {
  //       imageUrl = await uploadImage(newEpisode.image);
  //     }

  //     // Update in Supabase
  //     const { error: updateError } = await supabase
  //       .from("podcastEpisodes")
  //       .update({
  //         content: {
  //           title: newEpisode.title,
  //           date: newEpisode.date,
  //           linkAudio: newEpisode.audioLink,
  //           linkVideo: newEpisode.videoLink,
  //           image: imageUrl,
  //           episodeNumber: newEpisode.episodeNumber,
  //         },
  //       })
  //       .eq("id", id);

  //     if (updateError) throw updateError;

  //     // Patch local state
  //     setEpisodes((prevEpisodes) =>
  //       prevEpisodes.map((ep) =>
  //         ep.id === id
  //           ? {
  //               ...ep,
  //               content: {
  //                 title: newEpisode.title,
  //                 date: newEpisode.date,
  //                 linkAudio: newEpisode.audioLink,
  //                 linkVideo: newEpisode.videoLink,
  //                 image: imageUrl || "",
  //                 episodeNumber: newEpisode.episodeNumber,
  //               },
  //             }
  //           : ep
  //       )
  //     );

  //     setModal(false);
  //     setId(null);
  //   } catch (err: any) {
  //     console.error("Upload error:", err.message);
  //   } finally {
  //     setFinished(false);
  //   }
  // };
