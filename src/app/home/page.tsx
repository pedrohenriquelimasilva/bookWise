'use client'
import { BookRating } from '@/components/BookRating'
import { CardAssessment } from '@/components/CardAssessment'
import {
  MainContent,
  RatingBook,
  HeroRating,
  BooksContainer,
  AssessmentContainer,
  CardContainer,
  HomeContainer,
} from '@/styles/pages/init'
import { ArrowRight, ChartLineUp } from '@phosphor-icons/react'
import Link from 'next/link'
// import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth]'

// import { z } from 'zod'

/* const ratingsSchedule = z.array(
  z.object({
    id: z.string().uuid(),
    rate: z.number().min(0).max(5),
    description: z.string(),
    created_at: z.date().transform((date) => date.toString()),
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
) */

export interface RatingsProps {
  coments: {
    id: string
    rate: number
    description: string
    created_at: string
    book: {
      name: string
      author: string
      cover_url: string
    }
    user: {
      name: string
      avatar_url: string
    }
  }[]
}

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
  const { books, comments } = await getBooks()

  return (
    <HomeContainer>
      <MainContent>
        <h1>
          <ChartLineUp size={32} weight="bold" />
          Início
        </h1>
        <AssessmentContainer>
          <h2>Avaliações mais recentes</h2>
          <CardContainer>
            {comments.map((comment) => {
              return <CardAssessment key={comment.id} comment={comment} />
            })}
          </CardContainer>
        </AssessmentContainer>
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
    </HomeContainer>
  )
}

const getBooks = async () => {
  const [books, comments] = await Promise.all([
    fetch('http://localhost:3000/api/book/assenssiment', {
      cache: 'force-cache',
      next: { revalidate: 60 * 60 * 24 }, // 1 day
    }),
    fetch('http://localhost:3000/api/user/coments', {
      cache: 'force-cache',
      next: { revalidate: 60 * 60 * 24 }, // 1 day
    }),
  ])

  const lastComents: RatingsProps = await comments.json()

  const booksAll: BooksRatingProps = await books.json()

  return {
    books: [...booksAll.books],
    comments: [...lastComents.coments],
  }
}
