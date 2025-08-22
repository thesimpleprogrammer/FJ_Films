import { createClient } from "@/utils/supabase/server";
import Navbar from "./navbar";

export default async function NavbarContainer() {
  const supabase = await createClient();
  const { data: user_page } = await supabase.auth.getUser();

  const links = [
    { name: "Projects", url: "#projects" },
    { name: "Events", url: "#events" },
    { name: "Press", url: "#press" },
    { name: "Contact", url: "#contact" },
  ];
  return <Navbar user_page={user_page} links={links} />;
}

