import { ReactNode } from 'react'
import { Nunito_Sans as NunitoSans } from 'next/font/google'
import { getCssText } from '../styles'
import { stylesGlobalCss } from '@/styles/global'
import { NextAuthProvider } from '../utils/providers'

const nunitoSans = NunitoSans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--text-default',
})

export const metadata = {
  title: 'Book Wise',
  description: 'Website for generating and reading reviews',
}

stylesGlobalCss()

export default function RootLayout({
  children,
  session,
}: {
  children: ReactNode
  session: any
}) {
  return (
    <html lang="pt-br">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body className={nunitoSans.className}>
        <NextAuthProvider session={session}>
          <main>{children}</main>
        </NextAuthProvider>
      </body>
    </html>
  )
}
