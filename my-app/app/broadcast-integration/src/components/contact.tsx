"use client"

import { useState } from "react";

// type Contact = {
//     contactSent: boolean,
//     setContactSent: React.Dispatch<React.SetStateAction<boolean>>
// }

export default function Contact () {
      const [contactSent, setContactSent] = useState(false);

    return (
        <section id="contact" className="max-w-full px-10 md:px-30 lg:px-60 py-12 border-t">
        <h2 className="text-2xl font-bold">Contact & Booking</h2>
        {!contactSent ? (
          <form
            className="mt-4 grid grid-cols-1 gap-4"
            action="https://formspree.io/f/example" /* replace with your Formspree form or Netlify Forms */
            method="POST"
            onSubmit={() => setContactSent(true)}
          >
            <input
              name="_subject"
              type="hidden"
              value="New booking request from website"
            />
            <label className="sr-only">
              Name
              <input
                name="name"
                required
                className="w-full border rounded px-3 py-2"
                placeholder="Your name"
              />
            </label>
            <label className="sr-only">
              Email
              <input
                name="email"
                required
                type="email"
                className="w-full border rounded px-3 py-2"
                placeholder="Email"
              />
            </label>
            <textarea
              name="message"
              required
              className="w-full border rounded px-3 py-2 h-28"
              placeholder="Tell me about the project or inquiry"
            ></textarea>
            <div className="flex gap-3">
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded hover:cursor-pointer"
              >
                Send
              </button>
              <a
                href="mailto:you@youremail.com"
                className="px-4 py-2 border rounded"
              >
                Email directly
              </a>
            </div>
          </form>
        ) : (
          <div className="mt-4 p-4 bg-green-50 border rounded">
            Thanks — your message was queued. I will get back to you within 3
            business days.
          </div>
        )}
      </section>
    )
}