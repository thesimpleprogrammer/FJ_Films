import { createClient } from "@/utils/supabase/client";

export const retrieveDmData = async () => {
    const supabase = await createClient();
    // const { data: user_page } = await supabase.auth.getUser();

    let podcastData;    
    try {
        const { data: podcast, error: podcastError } = await supabase
        .from("podcast-engineering")
        .select("*");

    
    if (podcast) {
        podcastData = podcast
    } else {
        console.error("Error fetching digital marketing data:", podcastError);
        return null;
    }
    } catch (error) {
        console.error("Error fetching digital marketing data:", error);
        return;
    }
    
    return { podcastData };
}