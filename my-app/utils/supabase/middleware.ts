// import { createServerClient } from '@supabase/ssr'
// import { NextResponse, type NextRequest } from 'next/server'

// export async function updateSession(request: NextRequest) {
//   let supabaseResponse = NextResponse.next({
//     request,
//   })

//   // const supabase = createServerClient(
//   //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//   //   {
//   //     cookies: {
//   //       getAll() {
//   //         return request.cookies.getAll()
//   //       },
//   //       setAll(cookiesToSet) {
//   //         cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
//   //         supabaseResponse = NextResponse.next({
//   //           request,
//   //         })
//   //         cookiesToSet.forEach(({ name, value, options }) =>
//   //           supabaseResponse.cookies.set(name, value, options)
//   //         )
//   //       },
//   //     },
//   //   }
//   // )
//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return request.cookies.getAll()
//         },
//         setAll(cookiesToSet) {
//           supabaseResponse = NextResponse.next({ request })
//           cookiesToSet.forEach(({ name, value, options }) => {
//             supabaseResponse.cookies.set(name, value, options)
//           })
//         },
//       },
//     }
//   )

//   // Do not run code between createServerClient and
//   // supabase.auth.getUser(). A simple mistake could make it very hard to debug
//   // issues with users being randomly logged out.

//   // IMPORTANT: DO NOT REMOVE auth.getUser()

//   const {
//     data: { user },
//   } = await supabase.auth.getUser()

//   // if (
//   //   !user &&
//   //   !request.nextUrl.pathname.startsWith('/login') &&
//   //   !request.nextUrl.pathname.startsWith('/auth')
//   // ) {
//   //   // no user, potentially respond by redirecting the user to the login page
//   //   const url = request.nextUrl.clone()
//   //   url.pathname = '/login'
//   //   return NextResponse.redirect(url)
//   // }

//   // IMPORTANT: You *must* return the supabaseResponse object as it is.
//   // If you're creating a new response object with NextResponse.next() make sure to:
//   // 1. Pass the request in it, like so:
//   //    const myNewResponse = NextResponse.next({ request })
//   // 2. Copy over the cookies, like so:
//   //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
//   // 3. Change the myNewResponse object to fit your needs, but avoid changing
//   //    the cookies!
//   // 4. Finally:
//   //    return myNewResponse
//   // If this is not done, you may be causing the browser and server to go out
//   // of sync and terminate the user's session prematurely!

//   return supabaseResponse
// }

import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  // Forward incoming headers to the response so Next can see any mutations we make
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  try {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (!url || !anon) {
      throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY')
    }

    const supabase = createServerClient(url, anon, {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          // Keep the in-flight request cookies in sync
          cookiesToSet.forEach(({ name, value }) => {
            // Some Next.js versions treat request cookies as readonly – if so, this is a no-op
            try {
              request.cookies.set(name, value)
            } catch {
              /* ignore for compatibility */
            }
          })
          // And make sure the browser receives them
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options)
          })
        },
      },
    })

    // This will refresh/propagate the session and call cookies.setAll when needed
    await supabase.auth.getUser()

    return response
  } catch (err) {
    // Surface the error in dev; fail-open in prod
    if (process.env.NODE_ENV !== 'production') {
      return new NextResponse(
        JSON.stringify({ middleware: 'updateSession', error: String(err) }),
        { status: 500, headers: { 'content-type': 'application/json' } }
      )
    }
    console.error('updateSession middleware failed:', err)
    return response
  }
}
