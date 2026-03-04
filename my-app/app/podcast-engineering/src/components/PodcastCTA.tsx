export default function PodcastContactCTA() {
  return (
    <section className="w-full bg-black px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/2 to-transparent p-10 md:p-14">
          {/* Subtle Glow */}
          <div className="pointer-events-none absolute inset-0 bg-radial-gradient opacity-30" />

          <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Let’s Build Your Podcast
              </h2>

              <p className="text-base leading-relaxed text-white/80">
                Ready to elevate your voice? Contact us to discuss the podcast
                service you’d like us to render—from concept development and
                recording to editing, branding, and distribution.
              </p>

              <p className="text-sm text-white/60">
                Whether you’re starting fresh or scaling an existing show, we’ll
                help you create something impactful.
              </p>
            </div>

            {/* Right Action */}
            <div className="flex flex-col gap-4 sm:flex-row md:flex-col">
              <a
                href="/podcast-engineering/contact-us"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Contact Us
              </a>

              <a
                href="podcast-engineering/podcast-services"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                View Podcast Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}