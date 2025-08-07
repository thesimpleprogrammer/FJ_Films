export default function UploadEpisodes({
  handleInputChange,
  handleImageChange,
  handleSubmit,
  finished
}: {
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  finished: boolean
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg w-full p-5 max-h-[70dvh] overflow-y-scroll ">
      <div>
        <label
          htmlFor="title"
          className="block text-lg font-medium text-gray-700"
        >
          Episode Title
        </label>
        <input
          type="text"
          name="title"
          required
          id="title"
          placeholder="Enter title"
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border p-3 border-gray-300  focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="date"
          className="block text-lg font-medium text-gray-700"
        >
          Release Date
        </label>
        <input
          type="text"
          name="date"
          required
          id="date"
          placeholder="Day Month, Year"
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border p-3 border-gray-300  focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="link"
          className="block text-lg font-medium text-gray-700"
        >
          Audio Link
        </label>
        <input
          type="text"
          name="audioLink"
          id="auadioLink"
          placeholder="https://example.com"
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border p-3 border-gray-300  focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="link2"
          className="block text-lg font-medium text-gray-700"
        >
          Video Link
        </label>
        <input
          type="text"
          name="videoLink"
          id="videoLink"
          placeholder="https://example.com"
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border p-3 border-gray-300  focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="image"
          className="block text-lg font-medium text-gray-700"
        >
          Episode Image
        </label>
        <input
          type="file"
          required
          accept="image/*"
          id="image"
          onChange={handleImageChange}
          className="mt-1 block w-fit text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-indigo-50 file:text-indigo-700 file:rounded-md file:cursor-pointer"
        />
      </div>

      <div>
        <label
          htmlFor="episodeNumber"
          className="block text-lg font-medium text-gray-700"
        >
          Episode Number
        </label>
        <input
          type="text"
          name="episodeNumber"
          required
          id="episodeNumber"
          placeholder="e.g. 5"
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border p-3 border-gray-300  focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className={`w-full text-white py-2 px-4 rounded-md transition-colors ${finished ? `cursor-not-allowed bg-indigo-400 pointer-events-none` : `bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer`}`}
      >
        Replace Episode
      </button>
    </form>
  );
}
