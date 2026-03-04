"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Info} from "lucide-react";
import { packages } from "./Packages"; // your packages array

export default function BookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [form, setForm] = useState({
    formType: "booking",
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
    business: "",
  });

  const [chosenPackage, setChosenPackage] = useState<string | null>("Bronze");
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    const pkg = searchParams.get("package");

    if (pkg && PACKAGE_PRESETS[pkg]) {
      setForm((prev) => ({ ...prev, ...PACKAGE_PRESETS[pkg] }));
      setChosenPackage(pkg.charAt(0) + pkg.slice(1).toLowerCase()); // Bronze/Silver/Gold
    }

    if (pkg === "custom") {
      setForm((prev) => ({
        ...prev,
        packageType: "custom",
        selectedPackage: "",
      }));
      setChosenPackage(null);
    }
  }, [searchParams]);

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

    if (res.ok) router.push("/booking-confirmation");
    else alert("Something went wrong. Please try again.");
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
              Tell us about your event and we’ll be in contact shortly.
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
            <Input
              label="Business Name"
              name="business"
              placeholder="Business (optional)"
              onChange={handleChange}
            />
            <Input label="Phone Number" name="phone" onChange={handleChange} />
            <Input
              label="Event Type"
              name="eventType"
              placeholder="Wedding, concert..."
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
                value={chosenPackage || ""}
                onChange={
                  // setChosenPackage(e.target.value);
                  handleChange
                }
                packages={packages} // Pass all package info for the modal
              >
                <option value="">Choose a package</option>
                <option value="Bronze">Bronze</option>
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
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
                placeholder="Photography, videography..."
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
            disabled={loading}
            type="submit"
            className={`w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 py-4 text-sm font-semibold tracking-wide hover:opacity-90 transition hover:cursor-pointer ${loading && `opacity-50 cursor-not-allowed hover:opacity-50`}`}
          >
            {loading ? "Booking..." : "Book Consultations"}
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

function Select({ label, children, packages }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-1 relative">
      {label == "Select Package" ? (
        <div className="flex justify-between items-center">
          <label className="text-xs text-white/60">{label}</label>
          <button
            type="button"
            onClick={() => {
              // Find the package that matches the selected value
              setIsOpen(!isOpen);
            }}
            // onMouseLeave={() => setIsOpen(false)}
            className="rounded-full border cursor-pointer border-white/20 p-1 text-white/60 transition hover:bg-white/10 hover:text-white"
            aria-label="View package details"
          >
            <Info size={14} />
          </button>
        </div>
      ) : (
        <label className="flex items-center justify-between text-xs text-white/60">
          {label}
        </label>
      )}

      <select className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/30">
        {children}
      </select>

      {/* Hover Modal */}
      {isOpen && packages && (
        <div
          ref={modalRef}
          className="absolute bottom-[120%] flex flex-col gap-5 left-0 mt-2 w-full max-w-md rounded-lg bg-black/90 p-4 text-white text-xs shadow-lg z-50"
        >
          {packages.map((p: any, index: number) => (
            <div key={index}>
              <h3 className="font-bold text-sm mb-2" style={{ color: p.color }}>
                {p.tier} Package Breakdown
              </h3>
              <p>
                <strong>Photographers:</strong> {p.photographers}
              </p>
              <p>
                <strong>Videographers:</strong> {p.videographers}
              </p>
              <p>
                <strong>Coverage:</strong> {p.coverage.join(" & ")}
              </p>
              <p>
                <strong>Access:</strong> {p.access}
              </p>
              <p>
                <strong>Delivery:</strong> {p.delivery}
              </p>
              <p>
                <strong>Turnaround Time:</strong> {p.timeframe}
              </p>
            </div>
          ))}
        </div>
      )}
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
