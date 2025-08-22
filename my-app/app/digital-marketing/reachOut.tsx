export default function ReachOut() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-5 h-fit text-white py-20 px-15 lg:px-32 bg-blue-800">
      <h1 className="text-4xl font-bold mb-4 w-full lg:w-[50%]">
        Let&&apos;s talk about how we can transform your business!
      </h1>
      <div className="flex flex-row items-center w-full lg:w-[50%] lg:justify-end">
        <div className="w-20 h-20 flex flex-row justify-center items-center bg-gray-900 opacity-50 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          </div>
          <div className="flex flex-col justify-center ml-4 gap-2">
            <h6 className="text-lg">
                Interested in working?
            </h6>
            <a href="mailto:hello@domain.com" className="text-3xl hover:underline">
                hello@domain.com
            </a>
          </div>
        </div>
      </div>
  );
}
