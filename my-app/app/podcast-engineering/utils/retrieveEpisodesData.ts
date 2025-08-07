import { createClient } from "@/utils/supabase/server";

export const retrieveEpisodesData = async () => {
    const supabase = await createClient();
    // const { data: user_page } = await supabase.auth.getUser();

    let episodes;    
    try {
        const { data: episodesData, error: episodesDataError } = await supabase
        .from("podcastEpisodes")
        .select("*");

    
    if (episodesData) {
        episodes = episodesData
    } else {
        console.error("Error fetching episodes data:", episodesDataError);
        return null;
    }
    } catch (error) {
        console.error("Error fetching episodes data:", error);
        return;
    }
    
    return { episodes };
}