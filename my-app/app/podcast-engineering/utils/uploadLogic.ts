import { createClient } from "@/utils/supabase/client";

// Constants
const BUCKET = "episode-images";
const PATH_PREFIX = "episodesImages/";

interface EpisodeForm {
  id?: string;
  title: string;
  date: string;
  audioLink: string;
  videoLink: string;
  episodeNumber: string;
  image: File | null;
}

export const deleteImage = async (imageUrl: string) => {
  const supabase = createClient();
  const encodedFilename = imageUrl.split("/").pop()!;
  const decodedFilename = decodeURIComponent(encodedFilename);
  const imagePath = `${PATH_PREFIX}${decodedFilename}`;

  const { error } = await supabase.storage
    .from(BUCKET)
    .remove([imagePath]);

  if (error) console.warn("Image delete error:", error.message);
};

export const uploadImage = async (image: File) => {
  const supabase = createClient();

  const path = `${PATH_PREFIX}${image.name}`;

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(path, image, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) throw error;

  const { data: publicUrlData } = supabase.storage
    .from(BUCKET)
    .getPublicUrl(path);

  return publicUrlData.publicUrl;
};

export const uploadData = async (id: any, imageUrl: any, newEpisode: EpisodeForm) => {
    const supabase = createClient();

    const { error: updateError } = await supabase
        .from("podcastEpisodes") // your table name
        .update({
          content: {
            title: newEpisode.title,
            date: newEpisode.date,
            linkAudio: newEpisode.audioLink,
            linkVideo: newEpisode.videoLink,
            image: imageUrl,
            episodeNumber: newEpisode.episodeNumber,
          },
        })
        .eq("id", id);

      if (updateError) return updateError;
}
