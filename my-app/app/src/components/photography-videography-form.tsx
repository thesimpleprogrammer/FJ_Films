// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function BookingForm() {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     packageType: "preset",
//     selectedPackage: "Bronze",
//     customDetails: "",
//     budget: "",
//     eventType: "",
//     eventDate: "",
//     consultationMethod: "Phone Call",
//     notes: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const res = await fetch("/api/book-consultation", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     if (res.ok) {
//       router.push("/booking-confirmation");
//     } else {
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <input
//         name="name"
//         placeholder="Full Name"
//         onChange={handleChange}
//         required
//         className="input"
//       />

//       <input
//         name="email"
//         type="email"
//         placeholder="Email"
//         onChange={handleChange}
//         required
//         className="input"
//       />

//       <input
//         name="phone"
//         placeholder="Phone"
//         onChange={handleChange}
//         className="input"
//       />

//       <select name="packageType" onChange={handleChange} className="input">
//         <option value="preset">Predefined Package</option>
//         <option value="custom">Custom Package</option>
//       </select>

//       {/* Preset Packages */}
//       {form.packageType === "preset" && (
//         <div>
//           <label className="block text-sm font-medium mb-1">
//             Select Package
//           </label>
//           <select
//             name="selectedPackage"
//             onChange={handleChange}
//             className="input"
//           >
//             <option>Bronze</option>
//             <option>Silver</option>
//             <option>Gold</option>
//           </select>
//         </div>
//       )}

//       {/* Custom Package */}
//       {form.packageType === "custom" && (
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               What services do you need?
//             </label>
//             <textarea
//               rows={4}
//               placeholder="Photography, videography, duration, number of crew, etc."
//               className="w-full border rounded-lg px-4 py-2"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Estimated Budget (Optional)
//             </label>
//             <input
//               type="text"
//               placeholder="₦"
//               className="w-full border rounded-lg px-4 py-2"
//             />
//           </div>
//         </div>
//       )}

//       {/* Event Type */}
//       <div>
//         <label className="block text-sm font-medium mb-1">Event Type</label>
//         <input
//           type="text"
//           placeholder="Wedding, concert, corporate, birthday..."
//           className="w-full border rounded-lg px-4 py-2"
//         />
//       </div>

//       {/* Event Date */}
//       <div>
//         <label className="block text-sm font-medium mb-1">Event Date</label>
//         <input type="date" className="w-full border rounded-lg px-4 py-2" />
//       </div>

//       {/* Consultation Method */}
//       <div>
//         <label className="block text-sm font-medium mb-1">
//           Preferred Consultation Method
//         </label>
//         <select className="w-full border rounded-lg px-4 py-2">
//           <option>Phone Call</option>
//           <option>Video Call</option>
//           <option>In-Person Meeting</option>
//         </select>
//       </div>

//       {/* Additional Notes */}
//       <div>
//         <label className="block text-sm font-medium mb-1">
//           Additional Notes
//         </label>
//         <textarea
//           name="notes"
//           placeholder="Comments"
//           onChange={handleChange}
//           rows={3}
//           className="w-full border rounded-lg px-4 py-2"
//         />
//       </div>

//       <button
//         type="submit"
//         className="bg-black text-white px-6 py-3 rounded-lg"
//       >
//         Book Consultation
//       </button>
//     </form>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function BookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const pkg = searchParams.get("package");

    if (pkg && PACKAGE_PRESETS[pkg]) {
      setForm((prev) => ({
        ...prev,
        ...PACKAGE_PRESETS[pkg],
      }));
    }

    if (pkg === "custom") {
      setForm((prev) => ({
        ...prev,
        packageType: "custom",
        selectedPackage: "",
        customDetails: "",
        budget: "",
      }));
    }
  }, [searchParams]);

  const PACKAGE_PRESETS: Record<string, Partial<typeof form>> = {
    BRONZE: {
      packageType: "preset",
      selectedPackage: "Bronze",
      notes: "Bronze package selected",
    },
    SILVER: {
      packageType: "preset",
      selectedPackage: "Silver",
      notes: "Silver package selected",
    },
    GOLD: {
      packageType: "preset",
      selectedPackage: "Gold",
      notes: "Gold package selected",
    },
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    packageType: "preset",
    selectedPackage: "Bronze",
    customDetails: "",
    budget: "",
    eventType: "",
    eventDate: "",
    consultationMethod: "Phone Call",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/email-send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    // const response = await res.json();
    // console.log("This is the response: ", response)

    if (res.ok) {
      router.push("/booking-confirmation");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-20">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-10 space-y-8"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Book a Consultation
          </h2>
          <p className="text-sm text-white/60">
            Tell us about your event and we’ll get back within 24 hours.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            name="name"
            required
            onChange={handleChange}
          />

          <Input
            label="Email Address"
            name="email"
            type="email"
            required
            onChange={handleChange}
          />

          <Input label="Phone Number" name="phone" onChange={handleChange} />

          <Input
            label="Event Type"
            name="eventType"
            placeholder="Wedding, concert, corporate..."
            onChange={handleChange}
          />

          <Input
            label="Event Date"
            name="eventDate"
            type="date"
            onChange={handleChange}
          />

          <Select
            label="Consultation Method"
            name="consultationMethod"
            onChange={handleChange}
          >
            <option>Phone Call</option>
            <option>Video Call</option>
            <option>In-Person Meeting</option>
          </Select>

          <Select
            label="Package Type"
            name="packageType"
            onChange={handleChange}
          >
            <option value="preset">Predefined Package</option>
            <option value="custom">Custom Package</option>
          </Select>

          {form.packageType === "preset" && (
            <Select
              label="Select Package"
              name="selectedPackage"
              onChange={handleChange}
            >
              <option>Bronze</option>
              <option>Silver</option>
              <option>Gold</option>
            </Select>
          )}
        </div>

        {/* Custom Package */}
        {form.packageType === "custom" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Textarea
              label="Custom Requirements"
              name="customDetails"
              rows={4}
              placeholder="Photography, videography, duration, crew size..."
              onChange={handleChange}
            />

            <Input
              label="Estimated Budget (Optional)"
              name="budget"
              placeholder="₦"
              onChange={handleChange}
            />
          </div>
        )}

        {/* Notes */}
        <Textarea
          label="Additional Notes"
          name="notes"
          rows={4}
          onChange={handleChange}
        />

        {/* CTA */}
        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 py-4 text-sm font-semibold tracking-wide hover:opacity-90 transition hover:cursor-pointer"
        >
          Book Consultation
        </button>
      </form>
    </section>
    </Suspense>
  );
}

/* ---------------- Reusable UI ---------------- */

function Input({ label, ...props }: any) {
  return (
    <div className="space-y-1">
      <label className="text-xs text-white/60">{label}</label>
      <input
        {...props}
        className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-white/30"
      />
    </div>
  );
}

function Select({ label, children, ...props }: any) {
  return (
    <div className="space-y-1">
      <label className="text-xs text-white/60">{label}</label>
      <select
        {...props}
        className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
      >
        {children}
      </select>
    </div>
  );
}

function Textarea({ label, ...props }: any) {
  return (
    <div className="space-y-1 md:col-span-2">
      <label className="text-xs text-white/60">{label}</label>
      <textarea
        {...props}
        className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-white/30"
      />
    </div>
  );
}
