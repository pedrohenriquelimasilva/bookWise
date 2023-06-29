import Image from 'next/image'
import { Container, Datails } from './styles'
import { Rating } from '../Rating'

export function BookRating() {
  return (
    <Container>
      <Image alt="book" width={64} height={94} />

      <Datails>
        <strong>
          A revolução dos bichos
          <span>George Orwell</span>
        </strong>

        <Rating />
      </Datails>
    </Container>
  )
}
