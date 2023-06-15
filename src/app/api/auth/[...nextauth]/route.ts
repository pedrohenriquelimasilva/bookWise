import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '../../../../lib/auth/prisma-adapter'

export function buildNextAuthOptions(): NextAuthOptions {
  return {
    adapter: PrismaAdapter(),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        authorization: {
          params: {
            prompt: 'consent',
            access_type: 'offline',
            response_type: 'code',
            scope:
              'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
          },
        },
      }),
      GithubProvider({
        clientSecret: process.env.GITHUB_SECRET ?? '',
        clientId: process.env.GITHUB_ID ?? '',
      }),
    ],
    callbacks: {
      async signIn({ account }) {
        if (
          !account?.scope?.includes(
            'https://www.googleapis.com/auth/userinfo.email',
          )
        ) {
          return '/?error=not permission'
        }

        return true
      },
      async session({ session, user }) {
        return {
          ...session,
          user,
        }
      },
    },
  }
}

const handler = NextAuth(buildNextAuthOptions())

export { handler as GET, handler as POST }
