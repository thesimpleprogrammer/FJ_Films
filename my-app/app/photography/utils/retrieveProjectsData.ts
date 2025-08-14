import { createClient } from "@/utils/supabase/server";

export const retrieveProjectsData = async () => {
    const supabase = await createClient();
    // const { data: user_page } = await supabase.auth.getUser();

    let projects;    
    try {
        const { data: projectsData, error: projectsDataError } = await supabase
        .from("photographyProjects")
        .select("*");

    
    if (projectsData) {
        projects = projectsData
    } else {
        console.error("Error fetching projects data:", projectsDataError);
        return null;
    }
    } catch (error) {
        console.error("Error fetching projects data:", error);
        return;
    }
    
    return { projects };
}