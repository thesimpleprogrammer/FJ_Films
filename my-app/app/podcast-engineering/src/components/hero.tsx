import Image from "next/image";
import Navbar from "./navBar";
import bgImage from "../../../../public/42297.jpg"

export default function Hero() {
    return (
        <div className="w-full relative h-fit px-20 pt-7 overflow-y-hidden">
            <Navbar />
            <Image
            src={bgImage}
            alt=""
            // fill
            className="bg-cover w-full absolute top-0 left-0 -z-10"
            />
            <div className="absolute top-0 left-0 bg-gray-800 opacity-50 z-10 w-full h-full" />
            <div className="flex flex-col w-[50%] mx-auto relative z-20 text-center text-8xl gap-5 py-20">
                <h1 className="underline underline-offset-1 text-white"><i>The</i></h1>
                <h1 className="underline underline-offset-1 text-white">Worlds <i>Best</i></h1>
                <h1 className="underline underline-offset-1 text-white">Podcast</h1>
                <h1 className="underline underline-offset-1 text-white"><i>with</i> Femi</h1>
            </div>
        </div>
    )
}