"use server";

import { createClient } from "@/utils/supabase/client";
import { ImageReduce } from "../../../utils/supabase/ImageReduce";

// Constants
const BUCKET = "photography";
const PATH_PREFIX = "projects";

interface ProjectForm {
  id?: string;
  image: File | null;
  text: string;
  alt: string;
}

export const deleteImage = async (imageUrl: string) => {
  const supabase = createClient();
  const encodedFilename = imageUrl.split("/").pop()!;
  const decodedFilename = decodeURIComponent(encodedFilename);
  const imagePath = `${PATH_PREFIX}/${decodedFilename}`;

  const { error } = await supabase.storage.from(BUCKET).remove([imagePath]);

  if (error) console.warn("Image delete error:", error.message);
};

export const uploadImage = async (image: File) => {
  const supabase = createClient();

  const path = `${PATH_PREFIX}/${image.name}`;

  // console.log("About to start image reduce")
  const data = await ImageReduce(image);
  // console.log("Data from Image reduce: " + data)

  if (data) {
    const { error } = await supabase.storage.from(BUCKET).upload(path, data, {
      // cacheControl: "3600",
      upsert: true,
    });
    // .upload(path, image, {
    //   cacheControl: "3600",
    //   upsert: false,
    // });

    if (error) throw error;

    const { data: publicUrlData } = supabase.storage
      .from(BUCKET)
      .getPublicUrl(path);

    return publicUrlData.publicUrl;
  }
};

export const uploadData = async (
  id: any,
  imageUrl: any,
  newProject: ProjectForm
) => {
  const supabase = createClient();

  const { error: updateError } = await supabase
    .from("photographyProjects") // your table name
    .update({
      content: {
        image: imageUrl,
        text: newProject.text,
        alt: newProject.alt,
      },
    })
    .eq("id", id);

  if (updateError) return updateError;
};
