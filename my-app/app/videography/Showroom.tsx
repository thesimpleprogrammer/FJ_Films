import { ShowRoomLayout } from "./src/components/showroomLayout"
import { createClient } from "@/utils/supabase/server"

export default async function Showroom () {
    const supabase = await createClient()
    const { data: user } = await supabase.auth.getUser()
    const admin = user.user
    // Map Supabase user to your User type
    // const mappedAdmin = admin
    //     ? {
    //         id: admin.id,
    //         name: admin.user_metadata?.name || "Unknown", // fallback if name is missing
    //         // add other properties as needed
    //     }
    //     : undefined;
    return (
        <div className="bg-white w-full py-20 px-40">
            <h1 className="text-5xl underline underline-offset-[20px] mb-32">Show Room</h1>
            <ShowRoomLayout user={admin} />
        </div>
    )
}