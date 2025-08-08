export default function Hero () {
    return (
        <section id="home" className="relative">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Multimedia Installations that move the body & memory
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              I create immersive experiences blending sound, projection and
              interactive sculpture. Based in Maryland USA — available for
              exhibitions and site-specific commissions.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="px-4 py-2 bg-black text-white rounded-md"
              >
                View Projects
              </a>
              <a href="#contact" className="px-4 py-2 border rounded-md">
                Book a project
              </a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            {/* Featured video fallback image */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-64 object-cover"
            >
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
              {/* Fallback image */}
            </video>
          </div>
        </div>
      </section>
    )
}