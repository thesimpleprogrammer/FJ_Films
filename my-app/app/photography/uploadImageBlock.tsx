import Image from "next/image";
import React from "react";

type Props = {
  id: string;
  url: string;
  finished: boolean;
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  user: any;
};

const UploadImageBlock = ({ id, url, finished, onUpload, user }: Props) => (
  <div className={`relative w-full h-full rounded-md ${user && "group"}`}>
    <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 bg-black opacity-0 group-hover:opacity-50 flex flex-row justify-center items-center" />
    {user && (
      <form>
        <label
          htmlFor={id}
          className={`absolute top-1/2 -translate-y-1/2 left-1/2 ${
            finished
              ? "hover:bg-transparent hover:text-white"
              : "hover:bg-white hover:text-black"
          } transform -translate-x-1/2 inline-block cursor-pointer px-5 py-3 border text-xl transition-colors duration-300 border-white rounded-md opacity-0 group-hover:opacity-100`}
          role="button"
        >
          Upload
        </label>
        <input
          type="file"
          id={id}
          className={`hidden ${finished && "hover:pointer-events-none"}`}
          onChange={onUpload}
          disabled={finished}
        />
      </form>
    )}
    {url && (
      <Image
        src={url}
        alt=""
        className="w-full h-full rounded-lg z-30"
        objectFit="cover"
        width={1024}
        height={768}
        placeholder="empty"
        quality={100}
        // unoptimized
      />
    )}
  </div>
);

export default UploadImageBlock;
