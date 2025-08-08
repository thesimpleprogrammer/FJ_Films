type Content = {
    id: number | null;
    title: string;
    year: number | null;
    type: string;
    cover: string;
    description: string;
    media: {
      kind: string;
      src: string;
    };
  };

type ProjectModal = {
    selected: Content | null,
    closeProject(): void
}

export default function ProjectModal({ selected, closeProject }: ProjectModal) {
  return (
    <>
      {selected?.id && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
          <div className="bg-white w-full max-w-4xl rounded-lg overflow-auto max-h-[90vh]">
            <div className="p-4 flex justify-between items-start border-b">
              <div>
                <h3 className="font-semibold text-lg">{selected.title}</h3>
                <p className="text-sm text-gray-600">
                  {selected.year} • {selected.type}
                </p>
              </div>
              <button onClick={closeProject} className="text-gray-600 hover:cursor-pointer">
                Close
              </button>
            </div>
            <div className="p-4">
              <p className="text-gray-700 mb-4">{selected.description}</p>

              {/* Media rendering */}
              {selected.media.kind === "video" && (
                <video controls className="w-full rounded">
                  <source src={selected.media.src} type="video/mp4" />
                </video>
              )}

              {selected.media.kind === "audio" && (
                <div>
                  <audio controls className="w-full">
                    <source src={selected.media.src} type="audio/mpeg" />
                  </audio>
                  <p className="text-sm text-gray-500 mt-2">
                    Technical notes: multichannel output via 4 x powered
                    speakers. See rider.
                  </p>
                </div>
              )}

              {selected.media.kind === "embed" && (
                <div className="aspect-video mt-4">
                  <iframe
                    title={selected.title}
                    src={selected.media.src}
                    className="w-full h-96"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              <div className="mt-4 text-sm text-gray-600">
                <strong>Technical notes:</strong>
                <ul className="list-disc ml-5 mt-2">
                  <li>Projector: 10,000 lm recommended for façade works.</li>
                  <li>Audio: 4-channel spatialised playback, WAV preferred.</li>
                  <li>Power & rigging: see rider download in press section.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
