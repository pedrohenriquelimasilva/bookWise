import { Star } from '@phosphor-icons/react'
import { Container, StarContainer } from './styles'

interface RatingProps {
  rate: number
}

export function Rating({ rate }: RatingProps) {
  const ratingStarFill = Array.from({
    length: 5,
  })

  return (
    <Container>
      {ratingStarFill.map((_, index) => {
        return (
          <StarContainer key={index} type="button">
            <Star size={16} weight={index + 1 <= rate ? 'fill' : 'bold'} />
          </StarContainer>
        )
      })}
    </Container>
  )
}
