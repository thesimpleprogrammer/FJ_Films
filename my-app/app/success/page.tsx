import Link from "next/link"

interface SuccessPageProps {
  searchParams: { session_id?: string }
}

export default function Success({ searchParams }: SuccessPageProps) {
  const sessionId = searchParams.session_id

  return (
    // <div className="text-white">
    //   <h1>Payment Successful</h1>
    //   <p>Thank you for your purchase!</p>
    //   </p>}
    // </div>
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-2xl font-bold text-indigo-600 mb-4">
          🎉 Thank You!
        </h1>
        <p className="text-gray-600 mb-3">
          Your purchase was successful. We truly appreciate your support!
        </p>
        {sessionId && <p className="mb-6 text-gray-600">Session ID: {sessionId}</p>}
        <Link
          href="/"
          className="inline-block rounded-xl bg-indigo-600 px-6 py-2 text-white font-medium shadow hover:bg-indigo-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}