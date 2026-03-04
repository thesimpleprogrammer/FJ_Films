import Link from "next/link";

export default function BookingConfirmation() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-3xl font-semibold text-white">
          Sent Successfully 🎉
        </h1>

        <p className="text-white">
          Thank you for reaching out. We’ve received your request and will
          contact you within <strong>24 hours</strong>.
        </p>

        {/* <p className="text-white">
          If it’s urgent, feel free to reach us directly.
        </p> */}

        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-lg"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
