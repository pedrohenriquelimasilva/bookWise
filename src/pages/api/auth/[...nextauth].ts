import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider, { GithubProfile } from 'next-auth/providers/github'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'
import { PrismaAdapter } from '../../../lib/auth/prisma-adapter'
import { NextApiRequest, NextApiResponse, NextPageContext } from 'next'

export function buildNextAuthOptions(
  req: NextApiRequest | NextPageContext['req'],
  res: NextApiResponse | NextPageContext['res'],
): NextAuthOptions {
  return {
    adapter: PrismaAdapter(req, res),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        profile(profile: GoogleProfile) {
          return {
            id: profile.sub,
            name: profile.name,
            avatar_url: profile.picture,
          }
        },
      }),
      GithubProvider({
        clientSecret: process.env.GITHUB_SECRET ?? '',
        clientId: process.env.GITHUB_ID ?? '',
        profile(profile: GithubProfile) {
          return {
            id: `${profile.id}`,
            name: profile.name!,
            avatar_url: profile.avatar_url,
          }
        },
      }),
    ],
    callbacks: {
      async session({ session, user }) {
        return {
          ...session,
          user,
        }
      },
    },
  }
}

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, buildNextAuthOptions(req, res))
}
