"use client"

import { User } from "@supabase/supabase-js"
import { useState } from "react"
import { toast, Bounce, ToastContainer } from "react-toastify"
import logOut from "./logOut"

interface signOutProps {
    // handleSubmit: () => Promise<void>
    // loading: boolean
    // user: { user: User;} | { user: null; }
    user: User | null
}

export default function SignOutButton ({user}: signOutProps) {

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
        {user && <div onClick={handleSubmit} className="bg-rose-600 z-100 px-3 py-1 absolute top-5 right-5 text-white border border-transparent hover:cursor-pointer hover:bg-transparent hover:border hover:border-rose-600">
      {loading ? "Signing Out" : "Sign Out"}
    </div>}
    </>
    )
}