// Video Modal Component
export function VideoModal({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      onClick={onClose}
    >
      <div className="relative w-full max-w-3xl aspect-video" onClick={e => e.stopPropagation()}>
        <video
          src={src}
          className="w-full h-full object-contain rounded"
          autoPlay
          controls
        />
        <button
          className="absolute top-2 right-4 text-white text-2xl cursor-pointer"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
}