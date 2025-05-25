"use server"

import { createClient } from '../../../utils/supabase/server'

export default async function logOut() {
    const supabase = await createClient()

    const { error } = await supabase.auth.signOut()

    if(error) {
        console.log("There was an error: " + error)
        return { success: false, message: error.message }
    }

    console.log("It worked!!!")
    return {success: true}
}
