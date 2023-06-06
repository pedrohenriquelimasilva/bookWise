import Image from 'next/image'
import { z } from 'zod'
import backgroundImageBookWise from '../assets/bookwise-background.png'
import logoImage from '../assets/logo.svg'
import google from '../assets/googleLogo.svg'
import github from '../assets/logoGithub.svg'
import rocketLaunch from '../assets/RocketLaunch.svg'
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

          <ButtonConect>
            <Image src={google} alt="Google logo" />
            Entrar com Google
          </ButtonConect>

          <ButtonConect>
            <Image src={github} alt="Github logo" />
            Entrar com Github
          </ButtonConect>

          <ButtonConect type="button">
            <Image src={rocketLaunch} alt="RocketLaunch logo" />
            Acessar como visitante
          </ButtonConect>
        </Form>
      </Schedule>
    </Container>
  )
}
