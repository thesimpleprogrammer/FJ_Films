import Hero from "./src/components/Hero"
import HomeContent from "./src/components/HomeContent"
import { ToastContainer, toast, Bounce } from "react-toastify";
import SignOutButton from "./src/components/SignOutButton";
import signOut from "./src/components/SignOut";
import { useState } from "react";


export default function Home () {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    const result = await signOut();

    if (result.success) {
      toast.success("Successfully Logged Out", {
        theme: "dark",
        transition: Bounce,
      });

      // Optional: delay for user feedback
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } else {
      toast.error(`Logout Failed: ${result.message}`, {
        theme: "dark",
        transition: Bounce,
      });
    }
    setLoading(false);
  };

  return (
    <div className="relative">
      <ToastContainer />
      <Hero />
      <HomeContent />
      <SignOutButton 
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  )
}
