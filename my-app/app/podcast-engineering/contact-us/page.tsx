// app/contact/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const [form, setForm] = useState({
    formType: "podcast",
    name: "",
    email: "",
    podcastService: "",
    podcastStage: "",
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
    setLoading(true);

    const res = await fetch("/api/email-send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/booking-confirmation");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="bg-black text-white">
      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mt-6 text-lg text-white/80">
            Tell us what podcast service you’re interested in and we’ll take it
            from there.
          </p>

          {/* Form */}
          <form
            className="mt-12 grid grid-cols-1 gap-6"
            onSubmit={handleSubmit}
          >
            <Input
              name="name"
              label="Full Name"
              placeholder="Your name"
              onChange={handleChange}
            />
            <Input
              name="email"
              label="Email Address"
              placeholder="you@email.com"
              onChange={handleChange}
            />

            <Select
              label="Podcast Service"
              name="podcastService"
              options={[
                "Podcast Studio Setup",
                "Podcast Series Sessions",
                "Podcast Interview Sessions",
              ]}
              onChange={handleChange}
            />

            <Select
              name="podcastStage"
              label="podcastStage"
              options={["New Podcast", "Existing Podcast"]}
              onChange={handleChange}
            />

            <Textarea
              name="message"
              label="Tell us about your podcast"
              placeholder="Podcast format, episode count, recording style, goals…"
              onChange={handleChange}
            />

            <button
              disabled={loading}
              type="submit"
              className={`mt-6 rounded-xl cursor-pointer bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90 ${loading && `opacity-50 cursor-not-allowed hover:opacity-50`}`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

/* ---------- Form Components ---------- */

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

function Select({ label, options, ...props }: any) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/70">{label}</span>
      <select
        {...props} // ✅ THIS IS REQUIRED
        className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none focus:border-white/40"
      >
        <option value="">Select an option</option>
        {options.map((opt: string) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

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
