import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export default async function PrivatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div className='w-full h-[100vh] flex flex-row justify-center items-center'>
      <h1 className='text-white text-3xl'>We&apos;re still working on the current page...</h1>
    </div>
  )
}