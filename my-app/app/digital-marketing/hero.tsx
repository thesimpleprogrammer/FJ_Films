"use client";

import Image from "next/image";
import jeanImage from "../../public/preview.jpg";
import ImageLoop from "./src/component/ImageLoop";

export default function Hero() {
  return (
    <div className="flex flex-row items-center justify-center w-full h-[80vh] bg-gray-100">
      <div className="w-1/2 h-full relative flex flex-col items-center justify-center">
        <Image
          priority
          src={jeanImage}
          alt="Jean texture"
          className="absolute top-0 left-0 w-full h-full object-cover"
          width={1024}
          height={768}
          placeholder="empty"
          unoptimized
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
        <div className="w-[70%] z-20 pt-10">
          <div className="bg-opacity-50 text-white z-20 mb-7">
            <h1 className="text-[7.5rem] leading-28 font-bold">Digital</h1>
            <h1 className="text-[7.5rem] leading-28 font-bold mb-10">agency</h1>
            <p className="text-2xl">
              Empowering your brand with innovative strategies
            </p>
          </div>
          <div className="flex flex-row justify-center items-center w-fit gap-5 z-20 ">
            <div className="rounded-full bg-white p-4 w-16 h-16 flex items-center justify-center">
              <svg
                className="w-10 fill-slate-900"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
              </svg>
            </div>
            <span className="inline-block text-2xl text-white">
              Discover Us
            </span>
          </div>
        </div>
      </div>
      <ImageLoop />
    </div>
  );
}
