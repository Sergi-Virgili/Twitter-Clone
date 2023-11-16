import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse, type NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET (requesti: NextRequest) {
  const requestURL = new URL(requesti.url)
  const code = requestURL.searchParams.get('code')
  if (code !== null) {
    const supabase = createRouteHandlerClient({ cookies })
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(requestURL.origin, { status: 303 })
}
