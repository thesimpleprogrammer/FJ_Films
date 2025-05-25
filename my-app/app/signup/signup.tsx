'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

import type { Database } from '../../database.types'

export default function SignUpPage({session}: any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()

  console.log("This is the session outside the useEffect: " + JSON.stringify(session));

  useEffect(() => {
    if(session) {
      console.log("This is the session in the useEffect: " + JSON.stringify(session));
    }
  }, []);

  const handleSignUp = async () => {
    await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      })
      router.refresh()
    //   location.origin
    }

  return (
    <div className='w-fit flex flex-col h-[100vh] gap-5 mx-auto justify-center text-white'>
      <input name="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleSignUp} className='bg-white text-black'>Sign up</button>
      {/* <button onClick={handleSignIn} className='bg-white text-black'>Sign in</button> */}
      {/* <button onClick={handleSignOut}>Sign out</button> */}
    </div>
  )
}