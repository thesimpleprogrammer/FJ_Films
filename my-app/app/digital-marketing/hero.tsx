import Image from "next/image";
import jeanImage from "../../public/preview.jpg";

export default function Hero() {
  return (
    <div className="flex flex-row items-center justify-center h-[80vh] bg-gray-100">
      <div className="w-1/2 h-full">
        <Image 
          priority
          src={jeanImage}
          alt="Jean texture"
          className="w-full h-full object-cover"
          width={1024}
          height={768}
          placeholder="empty"
          unoptimized
        />
      </div>
      <div className="w-1/2"></div>
    </div>
  );
}