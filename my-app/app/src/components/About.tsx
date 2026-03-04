export default function About() {
  return (
    <section className="w-full bg-black text-white px-6 pt-30 pb-16 md:py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            About FJ FILMS
          </h1>
          <div className="mt-4 h-1 w-20 bg-white mx-auto md:mx-0" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6 text-base leading-relaxed text-white/90">
            <p>
              <span className="font-semibold text-white">FJ FILMS</span> is a
              cutting-edge production outfit established with a bold vision to
              redefine the digital space through innovative storytelling,
              strategic media management, and forward-thinking digital solutions.
            </p>

            <p>
              We leverage creative concepts as powerful tools to help businesses
              connect meaningfully with their audiences, strengthen brand
              identity, and create measurable impact.
            </p>

            <p>
              Beyond content creation, we see media as a vehicle for
              transformation—stimulating nation building, empowering
              entrepreneurs, and shaping narratives that influence growth in
              today’s dynamic digital environment.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6 text-base leading-relaxed text-white/90">
            <p>
              We are driven by an unwavering zeal to deliver creative excellence
              in all we do. Our strength lies in a team of extraordinary,
              ingenious professionals committed to precision, innovation, and
              results.
            </p>

            <p>
              Imagination is the foundation of every great creation—past,
              present, and future. At <span className="font-semibold text-white">FJ FILMS</span>,
              imagination fuels strategy, and strategy drives execution.
            </p>

            <p>
              We believe deeply in synergy—the unification of forces to produce
              results that multiply far beyond the initial input.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-lg font-medium md:text-xl">
            At <span className="font-bold">FJ FILMS</span>, we don’t just produce
            content.
          </p>
          <p className="mt-2 text-xl font-bold md:text-2xl">
            We create impact. We build influence. We amplify vision.
          </p>
        </div>
      </div>
    </section>
  );
}