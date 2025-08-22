"use client";

import { Modal } from "./modal";
import { useCallback, useEffect, useState } from "react";
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
      console.error("Error: " + error);
      setFinished(false);
    }

    setModal(false);
    setId(null);
  };

  return (
    <div className="text-white py-32 px-20" id="Episodes">
      <h1 className="text-6xl pb-20">Podcast Episodes</h1>
      <ul>
        {episodes?.map((episode, index) => (
          <li
            key={index}
            className="flex flex-col md:flex-row justify-between pt-15 md:pt-10 p-10 gap-8 lg:gap-0 border-y border-white relative group"
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
            <div className="w-full md:w-[60%] flex flex-col gap-5 lg:gap-0 justify-between">
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
