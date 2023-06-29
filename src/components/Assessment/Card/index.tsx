import { Hero, CardContainer, ContentBook, Title } from './styles'
import Image from 'next/image'
import { Rating } from '@/components/Rating'

export function Card() {
  return (
    <CardContainer>
      <Hero>
        <div>
          <Image width={40} height={40} alt="avatar pepple" />
        </div>
        <span>
          Pedro Henrique
          <strong>Hoje</strong>
        </span>

        <Rating>Rating</Rating>
      </Hero>
      <ContentBook>
        <div>
          <Image width={108} height={152} alt="Book" />
        </div>
        <div>
          <Title>
            O guia do mochileiro das galáxias
            <span>Douglas Adams</span>
          </Title>
          <p>
            Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
            Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit
            porta eget nec vitae sit vulputate eget
          </p>
        </div>
      </ContentBook>
    </CardContainer>
  )
}
