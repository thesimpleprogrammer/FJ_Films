import SignOutButton from "../src/components/SignOutButton";
import { createClient } from "@/utils/supabase/server";

export default async function Navbar() {
  const supabase = await createClient();
  const { data: user_page } = await supabase.auth.getUser();

  const links = [
    { name: "Home", url: "#Home" },
    { name: "About", url: "#About" },
    { name: "Workflow", url: "#Workflow" },
    { name: "Projects", url: "#Projects" },
    { name: "Pricing", url: "#Pricing" },
    { name: "Contact", url: "#Contact-Us" },
  ];
  return (
    <div className="flex flex-row justify-between text-white absolute top-0 left-0 w-full z-80 px-20 py-10">
      <a
        href="#"
        className="text-5xl font-bold hover:text-slate-200 transition-colors duration-300 hover:cursor-pointer"
      >
        FJ Films
      </a>
      <div className="flex flex-row justify-between items-center w-[40%]">
        {links.map((link, index) => (
          <a
            key={index}
            className="w-fit hover:text-slate-200 transition-colors duration-300"
            href={link.url}
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex flex-row gap-3 items-center">
        <a href="#">
        <button className="border border-white hover:bg-white hover:text-black px-4 py-2 transition-colors duration-300 hover:cursor-pointer">
          Talk to Us
        </button>
      </a>
      {user_page && <SignOutButton user={user_page} />} {/*What I was doing was to make the sign out button only show when the user is logged in cuz on production (vercel) it wasn't like that*/}
      </div>
    </div>
  );
}

