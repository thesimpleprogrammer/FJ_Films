"use client"

// import { User } from "@supabase/supabase-js"
import { useState } from "react"
import { toast, Bounce, ToastContainer } from "react-toastify"
import logOut from "./logOut"

// interface User {
//     // handleSubmit: () => Promise<void>
//     // loading: boolean
//     // user: { user: User;} | { user: null; }
//     id: string;
//         app_metadata: any;
//         user_metadata: any;
//         aud: string;
//         confirmation_sent_at?: string;
//         recovery_sent_at?: string;
//         email_change_sent_at?: string;
//         new_email?: string;
//         new_phone?: string;
//         invited_at?: string;
//         action_link?: string;
//         email?: string;
//         phone?: string;
//         created_at: string;
//         confirmed_at?: string;
//         email_confirmed_at?: string;
//         phone_confirmed_at?: string;
//         last_sign_in_at?: string;
//         role?: string;
//         updated_at?: string;
//         identities?: any[];
//         is_anonymous?: boolean;
//         is_sso_user?: boolean;
//         factors?: any[];
//         deleted_at?: string;
// }

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
        {user && <div onClick={handleSubmit} className="bg-rose-600 px-3 py-2 flex items-center justify-center text-white border border-transparent transition-colors duration-300 hover:cursor-pointer hover:bg-transparent hover:border hover:border-rose-600">
      {loading ? "Signing Out" : "Sign Out"}
    </div>}
    </>
    )
}