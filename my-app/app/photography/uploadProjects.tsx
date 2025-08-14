export default function UploadProjects({
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
          htmlFor="text"
          className="block text-lg font-medium text-gray-700"
        >
          Thoughts you&apos;d like to share conerning the image
        </label>
        <input
          type="text"
          name="text"
          required
          id="text"
          placeholder="Enter text"
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border p-3 border-gray-300  focus:outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="image"
          className="block text-lg font-medium text-gray-700"
        >
          Image
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

      <button
        type="submit"
        className={`w-full text-white py-2 px-4 rounded-md transition-colors ${finished ? `cursor-not-allowed bg-indigo-400 pointer-events-none` : `bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer`}`}
      >
        Replace Image
      </button>
    </form>
  );
}
