import Image from 'next/image'
import { z } from 'zod'
import backgroundImageBookWise from '../assets/bookwise-background.png'
import logoImage from '../assets/logo.svg'
import {
  Container,
  Hero,
  ButtonConect,
  Schedule,
  Form,
} from '../styles/pages/home'

const createUserSchedule = z.object({
  name: z.string().min(3),
})

type UserProps = z.infer<typeof createUserSchedule>

export default function Home() {
  return (
    <Container>
      <Hero>
        <h1>
          <Image src={logoImage} alt="Logo bookWise" />
          BookWise
        </h1>

        <div>
          <div />
          <Image src={backgroundImageBookWise} alt="lean book feedback" />
        </div>
      </Hero>

      <Schedule>
        <Form>
          <div>
            <strong>Boas vindas!</strong>
            <span>Faça seu login ou acesse como visitante</span>
          </div>

          <ButtonConect>Entrar com Google</ButtonConect>

          <ButtonConect>Entrar com Github</ButtonConect>

          <ButtonConect>Acessar como visitante</ButtonConect>
        </Form>
      </Schedule>
    </Container>
  )
}
