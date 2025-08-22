import { ShowRoomLayout } from "./src/components/Showroom/showroomLayout"
import { createClient } from "@/utils/supabase/server"

export default async function Showroom () {
    const supabase = await createClient()
    const { data: user } = await supabase.auth.getUser()
    const admin = user.user

    return (
        <div className="text-white border-y border-white w-full py-32 px-20 text-center lg:text-left lg:px-40" id="Showroom">
            <h1 className="text-5xl underline underline-offset-[20px] mb-15 ">Show Room</h1>
            <p className="mb-20">Every piece here tells a story — of craftsmanship, creativity, and attention to detail. Whether you’re looking for inspiration or the perfect addition to your space, our showroom is designed to spark ideas and let you see, touch, and feel the quality up close. Take your time, explore every corner, and imagine how these pieces could transform your own world.</p>
            <ShowRoomLayout user={admin} />
        </div>
    )
}