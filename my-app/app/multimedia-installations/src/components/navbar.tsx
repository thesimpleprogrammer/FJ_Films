import { createClient } from "@/utils/supabase/server"
import SignOutButton from "@/app/src/components/SignOutButton"

export default async function NavBar () {
    const supabase = await createClient()
    const { data: user } = await supabase.auth.getUser();

    return (
        <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold text-xl">
            FJ • Installations
          </a>
          <nav className="flex justify-between text-sm w-[30%]">
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
          <SignOutButton user={user} />
        </div>
      </header>
    )
}