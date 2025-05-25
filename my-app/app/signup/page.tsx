import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import SignUpPage from './signup'

export default async function signUp () {
    const supabase = createServerComponentClient({ cookies })

    const { data: { session } } = await supabase.auth.getSession()    
    console.log("This is the user session: " + JSON.stringify(session))

    return (
        <SignUpPage session={session}/>
    )
}