import { createClient } from "@/utils/supabase/client";

export const retrieveDmData = async () => {
    const supabase = await createClient();
    // const { data: user_page } = await supabase.auth.getUser();

    let digitalMarketingData;    
    try {
        const { data: digitalMarketing, error: digitalMarketingError } = await supabase
        .from("digital-marketing")
        .select("*");

    
    if (digitalMarketing) {
        digitalMarketingData = digitalMarketing
    } else {
        console.error("Error fetching digital marketing data:", digitalMarketingError);
        return null;
    }
    } catch (error) {
        console.error("Error fetching digital marketing data:", error);
        return;
    }
    
    return { digitalMarketingData };
}