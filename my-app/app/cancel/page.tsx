// app/cancel/page.tsx
export default function Cancel() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">⚠️ Oops!</h1>
        <p className="text-gray-600 mb-6">
          The payment was canceled. Please try again later.
        </p>
        <a
          href="/"
          className="inline-block rounded-xl bg-red-600 px-6 py-2 text-white font-medium shadow hover:bg-red-700 transition"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
