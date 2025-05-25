import { login, signup } from './actions'
import { createClient } from '../../utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function LoginPage() {

    const supabase = await createClient()
    
    const { data, error } = await supabase.auth.getUser()
    
      if (data?.user) {
        console.log(JSON.stringify(data))
        redirect('/')
      }

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center gap-7'>
      <h1 className='text-white text-3xl w-[40%]'>Login</h1>
      <form className='text-white flex flex-col gap-3 w-[40%]'>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" className='border border-white p-3 focus:outline-none' required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" className='border border-white p-3 focus:outline-none' required />
      <button formAction={login} className='bg-white text-black hover:cursor-pointer w-full transition-colors border border-transparent duration-300 hover:text-white hover:bg-transparent hover:border hover:border-white text-center mt-7 py-3'>Log in</button>
      {/* <button formAction={signup} className='bg-white text-black hover:cursor-pointer'>Sign up</button> */}
    </form>
    </div>
  )
}