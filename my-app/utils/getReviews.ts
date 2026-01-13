import { createClient } from "@/utils/supabase/server";

export const retrieveReviewData = async () => {
    const supabase = await createClient();
    // const { data: user_page } = await supabase.auth.getUser();

    let reviews;    
    try {
        const { data: reviewsData, error: reviewsDataError } = await supabase
        .from("reviews")
        .select("*");

    
    if (reviewsData) {
        reviews = reviewsData
    } else {
        console.error("Error fetching reviews data:", reviewsDataError);
        return null;
    }
    } catch (error) {
        console.error("Error fetching reviews data:", error);
        return;
    }
    
    return { reviews };
}