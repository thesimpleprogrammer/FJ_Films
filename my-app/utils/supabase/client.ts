import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    // process.env.NEXT_PUBLIC_SUPABASE_URL!,
    // process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    'https://xnpkkelfdsosehvkgfjr.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhucGtrZWxmZHNvc2VodmtnZmpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwODk3NjksImV4cCI6MjA2MTY2NTc2OX0.E5g9YwcJPpMSMTXO_LuTlWOHg-RVMBNvlcmPzLpSf0k'
  )
}