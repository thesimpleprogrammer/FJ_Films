// app/podcast-services/page.tsx
export default function PodcastServices() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Podcast Engineering Services
          </h1>
          <p className="mt-6 text-lg text-white/80">
            We specialize exclusively in podcast engineering — from studio setup
            to professional session handling.  
            <span className="block mt-2 text-white/60">
              Music production & recording services are not offered.
            </span>
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {/* Service Card */}
          <ServiceCard
            title="Podcast Studio Setup"
            description="End-to-end setup for creators who want a professional podcast environment. From equipment planning to acoustic considerations and workflow optimization."
            items={[
              "Studio layout guidance",
              "Equipment recommendations",
              "Signal flow & workflow setup",
              "Remote / in-house configuration",
            ]}
          />

          <ServiceCard
            title="Podcast Series Sessions"
            description="Ongoing engineering support for podcast series. Ideal for creators producing multiple episodes consistently."
            items={[
              "Multi-episode session handling",
              "Live monitoring & quality control",
              "Session continuity",
              "Technical consistency across episodes",
            ]}
          />

          <ServiceCard
            title="Podcast Interview Sessions"
            description="Professional engineering for interview-based podcasts, both in-person and remote."
            items={[
              "Guest audio setup",
              "Remote interview routing",
              "Audio clarity & balance",
              "Session supervision",
            ]}
          />
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-white/10 px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold md:text-3xl">
            How It Works
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 text-white/80">
            <Step number="01" title="Consultation">
              We understand your podcast vision, format, and technical needs.
            </Step>
            <Step number="02" title="Setup / Session">
              We handle the engineering while you focus on the conversation.
            </Step>
            <Step number="03" title="Delivery">
              You walk away with professionally handled sessions, ready for use.
            </Step>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
          <h3 className="text-2xl font-semibold md:text-3xl">
            Ready to Start Your Podcast?
          </h3>
          <p className="mt-4 text-white/80">
            Contact us to discuss the podcast service you’d like us to render.
          </p>

          <a
            href="/podcast-engineering/contact-us"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}

/* ---------- Components ---------- */

function ServiceCard({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-4 text-sm text-white/80">{description}</p>

      <ul className="mt-6 space-y-2 text-sm text-white/70">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function Step({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <span className="text-sm font-semibold text-white/50">{number}</span>
      <h4 className="mt-2 text-lg font-medium text-white">{title}</h4>
      <p className="mt-2 text-sm">{children}</p>
    </div>
  );
}