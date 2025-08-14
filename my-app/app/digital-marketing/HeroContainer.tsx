import { retrieveDmData } from "./src/component/RetrieveSupabaseData";
import { createClient } from "@/utils/supabase/server";
import Hero from "./hero";

export default async function HeroContainer() {
    const supabase = await createClient();
        const { data: user_page } = await supabase.auth.getUser();

    const data = await retrieveDmData();
    const digitalMarketingData = data?.digitalMarketingData ?? [];
    
    return <Hero heroData={digitalMarketingData} userData={user_page} id="Home" />;
}