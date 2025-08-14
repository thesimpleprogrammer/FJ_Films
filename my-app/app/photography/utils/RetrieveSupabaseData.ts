import { createClient } from "@/utils/supabase/client";

export const retrieveDmData = async () => {
    const supabase = await createClient();
    // const { data: user_page } = await supabase.auth.getUser();

    let photographyData;    
    try {
        const { data: photography, error: photographyError } = await supabase
        .from("photography")
        .select("*");

    
    if (photography) {
        photographyData = photography
    } else {
        console.error("Error fetching photography data:", photographyError);
        return null;
    }
    } catch (error) {
        console.error("Error fetching photography data:", error);
        return;
    }
    
    return { photographyData };
}