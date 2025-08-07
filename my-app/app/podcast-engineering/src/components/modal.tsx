import UploadEpisodes from "./uploadEpisodes";

export function Modal({ onClose, handleInputChange, handleImageChange, handleSubmit, finished }: { onClose: () => void, handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void, finished: boolean}) {


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div
      className="absolute w-full h-[100dvh] bg-black opacity-80"
      onClick={onClose}
    />
      
        <div className="bg-white p-6 rounded-lg shadow-lg  w-full max-w-3xl relative z-10 text-black">
          <h1 className="text-3xl pb-1 p-5">Replace Podcast</h1>
          <UploadEpisodes handleSubmit={handleSubmit} handleInputChange={handleInputChange} handleImageChange={handleImageChange} finished={finished}/>
          </div>

        <button
          className="absolute top-2 right-3 text-2xl cursor-pointer"
          onClick={onClose}
        >
          ×
        </button>
    </div>
  );
}