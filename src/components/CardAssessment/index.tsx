import { Hero, CardContainer, ContentBook, Title, ShowMore } from './styles'
import Image from 'next/image'
import { Rating } from '@/components/Rating'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useState } from 'react'

dayjs.extend(relativeTime)

interface CardAssessmentProps {
  comment: {
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
  }
}

export function CardAssessment({ comment }: CardAssessmentProps) {
  const { user, book } = comment

  const dateTimeToNow = dayjs(comment.created_at).toNow(true)
  const [showMore, setShowMore] = useState(true)

  function showMoreComment(comment: string) {
    const totalLetter = comment.length

    if (totalLetter > 210 && showMore) {
      const commentRender = comment.slice(0, 229)

      const commentFinal = `${commentRender}`

      setShowMore((state) => !state)

      return commentFinal
    }

    return comment
  }

  function handleShowMore() {
    setShowMore((state) => !state)
  }
  return (
    <CardContainer>
      <Hero>
        <div>
          <Image width={40} height={40} alt={user.name} />
        </div>
        <span>
          {user.name}
          <strong>{dateTimeToNow}</strong>
        </span>

        <Rating rate={comment.rate} />
      </Hero>
      <ContentBook>
        <div>
          <Image src={book.cover_url} width={108} height={152} alt="Book" />
        </div>
        <div>
          <Title>
            {book.name}
            <span>{book.author}</span>
          </Title>
          <p>
            {showMoreComment(comment.description)}{' '}
            {!showMore && (
              <ShowMore onClick={() => handleShowMore()}>...ver mais</ShowMore>
            )}
          </p>
        </div>
      </ContentBook>
    </CardContainer>
  )
}
