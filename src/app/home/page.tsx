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

export default function Home() {
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
          <BookRating />
          <BookRating />
        </BooksContainer>
      </RatingBook>
    </>
  )
}
