import { createClient } from "../../../utils/supabase/server";
import SignOutButton from "./SignOutButton";

export default async function signOutUser () {
    const supabase = await createClient()
    const { data: user_page } = await supabase.auth.getUser();

    return <SignOutButton user={user_page} />
}