import { prisma } from '@/lib/prisma'

import { getServerSession } from "next-auth/next"

export default async function GET() {
  const session = getServerSession()
  
  const user = await prisma.session.findUnique({})
}
