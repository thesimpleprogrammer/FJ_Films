export default function NavBar () {
    return (
        <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold text-xl">
            FJ • Installations
          </a>
          <nav className="space-x-4 text-sm">
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#events" className="hover:underline">
              Events
            </a>
            <a href="#press" className="hover:underline">
              Press
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>
    )
}