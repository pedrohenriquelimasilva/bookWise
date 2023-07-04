import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const ratingsSchedule = z.array(
  z.object({
    id: z.string().uuid(),
    rate: z.number().min(0).max(5),
    description: z.string(),
    created_at: z.date(),
    book: z.object({
      name: z.string(),
      author: z.string(),
      cover_url: z.string(),
    }),
    user: z.object({
      name: z.string(),
      avatar_url: z.string().nullable(),
    }),
  }),
)

type RatingsProps = z.infer<typeof ratingsSchedule>

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const ratings = await prisma.rating.findMany({
    orderBy: {
      created_at: 'desc',
    },
    include: {
      book: true,
      user: true,
    },
    take: 10,
  })

  if (!ratings) {
    return res.status(401)
  }

  const coments: RatingsProps = ratings.map((rating) => {
    return {
      id: rating.id,
      rate: rating.rate,
      description: rating.description,
      created_at: rating.created_at,
      book: {
        name: rating.book.name,
        author: rating.book.author,
        cover_url: rating.book.cover_url,
      },
      user: {
        name: rating.user.name,
        avatar_url: rating.user.avatar_url,
      },
    }
  })

  return res.json({
    coments,
  })
}
