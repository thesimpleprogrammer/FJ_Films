"use client"

// import { User } from "@supabase/supabase-js"
import { useState } from "react"
import { toast, Bounce, ToastContainer } from "react-toastify"
import logOut from "./logOut"

export default function SignOutButton ({user}: any) {

    const [loading, setLoading] = useState(false)
    
      const handleSubmit = async () => {
        setLoading(true)
    
        toast('Signing Out...', {
          theme: 'dark',
          transition: Bounce,
        })
    
        const result = await logOut()
    
        if (result.success) {
          toast.success('Sign Out Successful!', {
            theme: 'dark',
            transition: Bounce,
          })
    
          // Optional: delay for user feedback
          setTimeout(() => {
            window.location.href = '/'
          }, 1000)
        } else {
          toast.error(`Sign Out Failed Failed: ${result.message}`, {
            theme: 'dark',
            transition: Bounce,
          })
        }
    
        setLoading(false)
      }

    return (
    <>
    <ToastContainer />
        {user && <button onClick={handleSubmit} className="bg-rose-600 px-3 py-2 w-fit items-center justify-center whitespace-nowrap text-white hover:text-rose-600 border border-transparent transition-colors duration-300 hover:cursor-pointer hover:bg-transparent hover:border hover:border-rose-600">
      {loading ? "Signing Out" : "Sign Out"}
    </button>}
    </>
    )
}