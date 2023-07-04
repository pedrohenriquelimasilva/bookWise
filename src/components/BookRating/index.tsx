import { BookImage, Container, Datails } from './styles'
import { Rating } from '../Rating'

interface BookRatingProps {
  book: {
    id: string
    name: string
    author: string
    total_pages: number
    summary: string
    cover_url: string
    created_at: string
    avgRating: number
  }
}

export function BookRating({ book }: BookRatingProps) {
  return (
    <Container>
      <BookImage src={book.cover_url} alt={book.name} width={64} height={94} />

      <Datails>
        <strong>
          {book.name}
          <span>{book.author}</span>
        </strong>

        <Rating />
      </Datails>
    </Container>
  )
}
