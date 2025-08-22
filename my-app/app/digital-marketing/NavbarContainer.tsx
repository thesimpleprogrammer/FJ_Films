// import SignOutButton from "../src/components/SignOutButton";
import { createClient } from "@/utils/supabase/server";
import Navbar from "../src/components/Navbar";

export default async function NavbarContainer() {
  const supabase = await createClient();
  const { data: user_page } = await supabase.auth.getUser();

  const links = [
    { name: "Home", url: "#Home" },
    { name: "Clients", url: "#Clients" },
    { name: "About", url: "#About" },
    { name: "Services", url: "#Services" },
    { name: "Projects", url: "#Projects" },
    { name: "Pricing", url: "#Pricing" },
    { name: "Contact", url: "#Contact-Us" },
  ];
  return <Navbar user_page={user_page} links={links} />;
}

