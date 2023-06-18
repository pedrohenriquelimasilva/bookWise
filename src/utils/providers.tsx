'use client'

import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

type NextProps = {
  children?: ReactNode
  session: any
}

export function NextAuthProvider({ children, session }: NextProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
