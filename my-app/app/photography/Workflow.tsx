import Image from "next/image";
import chineseGate from "../../public/12049.jpg";
import wedding from "../../public/2150639515.jpg";
import family from "../../public/2151295378.jpg";
import path1 from "../../public/Vector 2.png";
import path2 from "../../public/Vector 3.png";

export default function Workflow() {
  return (
    <div className="w-full text-white">
      <div className="px-16 py-20">
        <div className="mb-10">
          <h1 className="text-4xl mb-5">How we Create Lasting Memories</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <div className="flex flex-row w-full gap-10 items-center">
            <div className="relative w-1/2 h-[300px]">
              <Image
                src={chineseGate}
                alt="A chinese Gate"
                objectFit="cover"
                fill
                className="w-full rounded-md"
              />
            </div>
            <div className="w-1/2">
              <h3 className="text-3xl mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                accusantium reiciendis consequatur, neque ipsum dolor at velit
                saepe quibusdam vero praesentium ipsa debitis dicta deserunt
                maiores. Excepturi ut aperiam quae!
              </p>
            </div>
          </div>
          <div className="w-full h-40 relative">
          <Image
                src={path2}
                alt="A chinese Gate"
                objectFit="cover"
                // fill
                className="w-[60%] mx-auto h-full"
              />
          </div>
          <div className="flex flex-row w-full gap-10 items-center">
            <div className="w-1/2">
              <h3 className="text-3xl mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                accusantium reiciendis consequatur, neque ipsum dolor at velit
                saepe quibusdam vero praesentium ipsa debitis dicta deserunt
                maiores. Excepturi ut aperiam quae!
              </p>
            </div>
            <div className="relative w-1/2 h-[300px]">
              <Image
                src={wedding}
                alt="A chinese Gate"
                objectFit="cover"
                fill
                className="w-full rounded-md"
              />
            </div>
          </div>
          <div className="w-full h-40 mx-auto relative">
            {/* <div className="w-[80%] "> */}
            <Image
                src={path1}
                alt="A chinese Gate"
                objectFit="cover"
                // fill
                className="w-[60%] mx-auto h-full"
              />
            {/* </div> */}
          </div>
          <div className="flex flex-row w-full gap-10 items-center">
            <div className="relative w-1/2 h-[300px]">
              <Image
                src={family}
                alt="A chinese Gate"
                objectFit="cover"
                fill
                className="w-full rounded-md"
              />
            </div>
            <div className="w-1/2">
              <h3 className="text-3xl mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                accusantium reiciendis consequatur, neque ipsum dolor at velit
                saepe quibusdam vero praesentium ipsa debitis dicta deserunt
                maiores. Excepturi ut aperiam quae!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
