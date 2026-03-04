"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const [form, setForm] = useState({
    formType: "broadcast",
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)

    const res = await fetch("/api/email-send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false)

    if (res.ok) {
      router.push("/booking-confirmation");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="max-w-full px-10 md:px-30 lg:px-60 py-12 border-t"
    >
      <h2 className="text-2xl font-bold">Contact & Booking</h2>
      <form className="mt-12 grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
        <Input
          label="Name"
          name="name"
          required
          className="w-full border rounded px-3 py-2"
          placeholder="Your name"
          onChange={handleChange}
        />
        <Input
          label="Email"
          name="email"
          required
          type="email"
          className="w-full border rounded px-3 py-2"
          placeholder="Email"
          onChange={handleChange}
        />
        <Textarea
          label="Message"
          name="message"
          required
          className="w-full border rounded px-3 py-2 h-28"
          placeholder="Tell me about the project or inquiry"
          onChange={handleChange}
        ></Textarea>
        <div className="flex gap-3">
          <button
            disabled={loading}
            type="submit"
            className={`px-4 py-2 bg-black text-white rounded cursor-pointer ${loading && `opacity-50 cursor-not-allowed hover:opacity-50`}`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
          <a
            href="mailto:femi@thefjfilms.com"
            className={`px-4 py-2 border rounded cursor-pointer ${loading && `opacity-50 cursor-not-allowed hover:opacity-50`}`}
          >
            Email directly
          </a>
        </div>
      </form>
    </section>
  );
}

function Input({ label, ...props }: any) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/70">{label}</span>
      <input
        {...props}
        className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none focus:border-white/40"
      />
    </label>
  );
}

// function Select({ label, options, ...props }: any) {
//   return (
//     <label className="block">
//       <span className="mb-2 block text-sm text-white/70">{label}</span>
//       <select
//         {...props}   // ✅ THIS IS REQUIRED
//         className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none focus:border-white/40"
//       >
//         <option value="">Select an option</option>
//         {options.map((opt: string) => (
//           <option key={opt} value={opt}>
//             {opt}
//           </option>
//         ))}
//       </select>
//     </label>
//   );
// }

function Textarea({ label, ...props }: any) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/70">{label}</span>
      <textarea
        {...props}
        rows={5}
        className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none focus:border-white/40"
      />
    </label>
  );
}
