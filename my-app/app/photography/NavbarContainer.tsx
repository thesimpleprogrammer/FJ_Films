import Navbar from "../src/components/Navbar";
import { createClient } from "@/utils/supabase/server";

export default async function NavbarContainer () {    
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

    return <Navbar user_page={user_page} links={links} />
}