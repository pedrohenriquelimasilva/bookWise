import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const books = await prisma.book.findMany({
    orderBy: {
      rating: {
        _count: 'desc',
      },
    },
    include: {
      rating: true,
    },
    take: 4,
  })

  if (!books) {
    return res.status(401)
  }

  const booksManyAssenssiment = await prisma.rating.groupBy({
    by: ['book_id'],
    where: {
      book_id: {
        in: books.map((book) => book.id),
      },
    },
    _avg: {
      rate: true,
    },
  })

  if (!booksManyAssenssiment) {
    return res.status(401)
  }

  const booksRating = books.map((book) => {
    const bookAvg = booksManyAssenssiment.find(
      (assenssiment) => assenssiment.book_id === book.id,
    )

    const { rating, ...bookDetails } = book

    return {
      ...bookDetails,
      avgRating: bookAvg?._avg.rate,
    }
  })

  return res.json({ books: booksRating })
}
