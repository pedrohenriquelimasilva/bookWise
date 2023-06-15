'use client'

import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

type NextProps = {
  children?: ReactNode
}

export function NextAuthProvider({ children }: NextProps) {
  return <SessionProvider>{children}</SessionProvider>
}
