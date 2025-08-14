// Video Modal Component
import Image, { StaticImageData } from "next/image";

export function Modal({
  src,
  alt,
  text,
  onClose,
}: {
  src: StaticImageData;
  onClose: () => void;
  text: string;
  alt: string;
}) {
  return (
    <div
      className="fixed inset-0 z-130 flex items-center justify-center bg-black bg-opacity-80"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl aspect-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* <video
          src={src}
          className="w-full h-full object-contain rounded"
          autoPlay
          controls
        /> */}
        {src && (
          <Image
            src={src}
            alt={alt}
            objectFit="cover"
            className="w-full h-full"
            width={1024}
            height={768}
          />
        )}
        <button
          className="absolute top-2 right-4 text-white text-2xl cursor-pointer"
          onClick={onClose}
        >
          ×
        </button>
        <div className="absolute bottom-0 text-white px-10 py-5 w-full text-2xl z-100 backdrop-blur-md">
          <p className="w-fit">{text}</p>
        </div>
      </div>
    </div>
  );
}
