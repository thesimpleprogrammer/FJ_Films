import Image from "next/image";
import contentImage from "../../public/contentImage.jpg";

export default function About() {
  return (
    <div className="w-full bg-white">
      <div className="px-16 py-20">
        <h1 className="text-3xl">FJ Films is Happy to Meet You</h1>
        <div className="w-full flex flex-row mt-5 gap-10 items-center">
          <div className="flex flex-col w-2/3 gap-20">
          <div className="w-full flex flex-row gap-16">
            <div className="w-1/2">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis est aliquid commodi, vitae incidunt ipsam harum! Modi,
                non voluptate facilis, ullam libero molestiae eius temporibus
                sequi, maxime dolorum eos mollitia.
              </p>
            </div>
            <div className="w-1/2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Debitis, ratione reiciendis corporis, nemo molestias adipisci,
                ad dolorem ut minus deleniti sit ipsa quasi explicabo.
                Architecto accusantium hic dolores deserunt alias?
              </p>
            </div>
            </div>
            <a
              href=""
              className=" w-fit px-5 py-3 border border-black hover:bg-black hover:text-white transition-colors duration-300"
            >
              A little More About Me
            </a>
          </div>
          <div className="w-1/3 h-[500px] relative">
            <Image
              src={contentImage}
              alt="Man smiling"
              objectFit="cover"
              fill
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
