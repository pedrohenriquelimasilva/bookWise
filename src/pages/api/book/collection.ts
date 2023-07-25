import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const categores = await prisma.category.findMany({
    include: {
      books: true,
    },
  })

  if (!categores) {
    return res.status(401).end()
  }

  return res.json({ categore: categores })
}
