import { createClient } from "../../../utils/supabase/server";

export default async function signOutUser () {
    const supabase = await createClient()
    const { data: user_page } = await supabase.auth.getUser();

    return user_page
}