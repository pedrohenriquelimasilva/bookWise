import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const booksSchedule = z.object({
  id: z.string().uuid(),
  name: z.string(),
  author: z.string().min(3),
  summary: z.string(),
  cover_url: z.string(),
  rating: z.array(
    z.object({
      id: z.string().uuid(),
      rate: z.number().min(0).max(5),
      description: z.string(),
      created_at: z.date(),
    }),
  ),
})

type BooksProps = z.infer<typeof booksSchedule>
export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const bookId = String(req.query.bookId)

  const ratingsOfBook = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
    include: {
      rating: true,
    },
  })

  if (!ratingsOfBook) {
    return res.status(401)
  }
  // refazer rota

  const { rating } = ratingsOfBook

  const comments: BooksProps = {
    ...ratingsOfBook,
    rating: rating.map((rating) => {
      return {
        id: rating.id,
        rate: rating.rate,
        description: rating.description,
        created_at: rating.created_at,
      }
    }),
  }

  return res.json({
    comments,
  })
}
