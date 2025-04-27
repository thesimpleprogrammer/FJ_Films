import Image from "next/image"
import image1 from "../../public/410.jpg"
import image2 from "../../public/4714.jpg"
import image3 from "../../public/24400.jpg"
import image4 from "../../public/30540.jpg"
import image5 from "../../public/30587840_7545052.jpg"
import image6 from "../../public/2150639515.jpg"
import image7 from "../../public/2151295378.jpg"
import image8 from "../../public/12049.jpg"


const images = [
    {item: image1, alt: ""},
    {item: image2, alt: ""},
    {item: image3, alt: ""},
    {item: image4, alt: ""},
    {item: image5, alt: ""},
    {item: image6, alt: ""},
    {item: image7, alt: ""},
    {item: image8, alt: ""},
]

export default function Projects () {
    return (
        <div className="bg-white w-full">
            <div className="px-16 py-20">
                <div className="mb-12">
                    <h1 className="text-3xl ">
                        Presenting, Our Gallery
                    </h1>
                    <h3 className="text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                </div>
                <div className="w-full flex flex-row flex-wrap h-[380px] relative">
                    {
                        images.map((image, index) => (
                            <a href="#" className="w-1/4 h-1/2 relative group" key={index}>
                                <Image 
                                    src={image.item}
                                    alt={image.alt}
                                    objectFit="cover"
                                    className="w-full h-full"
                                />
                                <div className={`w-full h-full bg-blue-950 opacity-0 transition-all duration-300 group-hover:opacity-50 absolute top-0 left-0`}>
                                </div>
                                <h1 className="text-white absolute top-0 left-0 opacity-0 transition-all duration-300 group-hover:opacity-100 w-full h-full z-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus reiciendis, modi libero reprehenderit corporis deserunt in excepturi repudiandae, adipisci perspiciatis aliquam quae laborum. Molestiae, commodi expedita. Autem commodi architecto ullam.</h1>
                            </a>
                        ))
                    }
                </div>
                <a href="#">
                    <p className="underline underline-offset-2 text-lg py-5 ">View More</p>
                </a>
            </div>
        </div>
    )
}