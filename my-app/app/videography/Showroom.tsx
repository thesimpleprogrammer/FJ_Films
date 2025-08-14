import { ShowRoomLayout } from "./src/components/Showroom/showroomLayout"
import { createClient } from "@/utils/supabase/server"

export default async function Showroom () {
    const supabase = await createClient()
    const { data: user } = await supabase.auth.getUser()
    const admin = user.user

    return (
        <div className="bg-white w-full py-32 px-40" id="Showroom">
            <h1 className="text-5xl underline underline-offset-[20px] mb-20">Show Room</h1>
            <ShowRoomLayout user={admin} />
        </div>
    )
}