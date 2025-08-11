import { createClient } from "@/utils/supabase/client";

export const retrieveDmData = async () => {
    const supabase = await createClient();
    // const { data: user_page } = await supabase.auth.getUser();

    let multimediaData;    
    try {
        const { data: multimedia, error: multimediaError } = await supabase
        .from("multimedia")
        .select("*");

    
    if (multimedia) {
        multimediaData = multimedia
    } else {
        console.error("Error fetching digital marketing data:", multimediaError);
        return null;
    }
    } catch (error) {
        console.error("Error fetching digital marketing data:", error);
        return;
    }
    
    return { multimediaData };
}