"use client";

import { uploadMultimediaVideoToSupabase } from "../../utils/uploadMultimediaVideoToSupabase";

// Video Card Component
export default function MultimediaVideoCard({
  video,
  finished,
  fileInputRef,
  setFinished,
  setDataUrls,
  // onFullscreen,
  user
}: any) {
  return (
    <div className="break-inside-avoid relative group">
      <form action="">
        <div className="absolute top-0 left-0 bg-black w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-50 z-30"></div>
        {user && <label
          htmlFor={video?.name}
          className={`absolute top-3 left-3 z-50 rounded-md text-white ${
            finished
              ? "hover:bg-transparent hover:text-white"
              : "hover:bg-white hover:text-black"
          } inline-block cursor-pointer px-3 py-1 border text-sm transition-all duration-300 border-white opacity-0 group-hover:opacity-100`}
          role="button"
        >
          Upload
        </label>}
        {/* <div
          className="absolute top-3 right-3 z-50 inline-block cursor-pointer text-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
          onClick={onFullscreen}
          title="Fullscreen"
        >
          <svg
            className="w-5 fill-white hover:fill-slate-400 transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z" />
          </svg>
        </div> */}
        <input
          id={video?.name}
          type="file"
          accept="video/mp4"
          className="hidden"
          ref={fileInputRef}
          onChange={(e) => {
            uploadMultimediaVideoToSupabase(
              e,
              video.name,
              setFinished,
              setDataUrls
            );
          }}
        />
        <video
          className="w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={video?.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </form>
    </div>
  );
}