'use client'
import { Assessment } from '@/components/Assessment'
import { BookRating } from '@/components/BookRating'
import {
  MainContent,
  RatingBook,
  HeroRating,
  BooksContainer,
} from '@/styles/pages/init'
import { ArrowRight, ChartLineUp } from '@phosphor-icons/react'
import Link from 'next/link'
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

interface BooksRatingProps {
  books: {
    id: string
    name: string
    author: string
    total_pages: number
    summary: string
    cover_url: string
    created_at: string
    avgRating: number
  }[]
}

export default async function Home() {
  const { books, coments } = await getBooks()

  console.log(coments)
  return (
    <>
      <MainContent>
        <h1>
          <ChartLineUp size={32} weight="bold" />
          Início
        </h1>
        <Assessment />
      </MainContent>
      <RatingBook>
        <HeroRating>
          Livros populares
          <Link href="/home/explorer">
            Ver todos <ArrowRight size={16} />{' '}
          </Link>
        </HeroRating>
        <BooksContainer>
          {books.map((book) => {
            return <BookRating key={book.id} book={{ ...book }} />
          })}
        </BooksContainer>
      </RatingBook>
    </>
  )
}

const getBooks = async () => {
  const res = await fetch('http://localhost:3000/api/book/assenssiment', {
    cache: 'force-cache',
    next: { revalidate: 60 * 60 * 24 }, // 1 day
  })

  const coments = await fetch('http://localhost:3000/api/user/coments', {
    cache: 'force-cache',
    next: { revalidate: 60 * 60 * 24 }, // 1 day
  })

  const booksAll: BooksRatingProps = await res.json()
  const comentsAll: RatingsProps = await coments.json()

  return {
    books: [...booksAll.books],
    coments: comentsAll,
  }
}
