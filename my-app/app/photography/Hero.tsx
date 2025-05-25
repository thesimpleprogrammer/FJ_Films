import Image from "next/image";
import photoBg from "../../public/bgPhoto.png";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="w-full h-screen flex flex-row items-center pl-16">
        <Image
          src={photoBg}
          alt="Man taking a Photograph"
          className="w-full -z-10"
          objectFit="cover"
          layout="fill"
        />

        <div className="w-[50%] text-white z-20">
          <div className="flex flex-col">
            <h1 className="text-7xl">FJ Films</h1>
            <h3 className="text-2xl">Photography</h3>
          </div>
          <div className="py-3 text-2xl text-slate-900 font-bold">
            <h2 className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit amet dolor quos.
            </h2>
          </div>
          <div className="mb-8">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eius, corrupti illo vitae aut necessitatibus consectetur, nemo minima quod facilis ducimus error. Pariatur, facere explicabo iure ducimus aliquid tempore totam!
            </p>
          </div>
            <a href="" className="px-5 py-3 border border-white hover:bg-white hover:text-black transition-colors">
              Let&apos;s Get In Touch  
            </a>
        </div>
      </div>
    </div>
  );
}