'use client'

import Image from 'next/image'
import backgroundImageBookWise from '../assets/bookwise-background.png'
import logoImage from '../assets/logo.svg'
import google from '../assets/googleLogo.svg'
import github from '../assets/logoGithub.svg'
import rocketLaunch from '../assets/RocketLaunch.svg'
import { useSearchParams, useRouter } from 'next/navigation'
import {
  Container,
  Hero,
  ButtonConect,
  Schedule,
  Form,
  TextError,
} from '../styles/pages/home'
import { signIn, useSession } from 'next-auth/react'

export default function Home() {
  const urlQuery = useSearchParams()
  const router = useRouter()
  const session = useSession()

  const isSignIn = session.status === 'authenticated'

  const hasAuthError = urlQuery.has('error')

  // sign in bookwise in google account or github account
  async function handleConnect(profile: 'google' | 'github') {
    await signIn(profile)
  }

  // redirect user visitor fom home page
  async function handleRedirectVisitor() {
    await router.push('/home')
  }

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
          {isSignIn ? (
            <>
              <div>
                <strong>Você está conectado!</strong>
                <span>Entrar na plataforma</span>
              </div>

              <ButtonConect type="button" onClick={handleRedirectVisitor}>
                <Image src={rocketLaunch} alt="RocketLaunch logo" />
                Acessar Platafornma
              </ButtonConect>
            </>
          ) : (
            <>
              <div>
                <strong>Boas vindas!</strong>
                <span>Faça seu login ou acesse como visitante</span>
              </div>

              {hasAuthError && (
                <TextError>Aceite as permissões para se autenticar!</TextError>
              )}

              <ButtonConect onClick={() => handleConnect('google')}>
                <Image src={google} alt="Google logo" />
                Entrar com Google
              </ButtonConect>

              <ButtonConect onClick={() => handleConnect('github')}>
                <Image src={github} alt="Github logo" />
                Entrar com Github
              </ButtonConect>

              <ButtonConect type="button" onClick={handleRedirectVisitor}>
                <Image src={rocketLaunch} alt="RocketLaunch logo" />
                Acessar como visitante
              </ButtonConect>
            </>
          )}
        </Form>
      </Schedule>
    </Container>
  )
}
