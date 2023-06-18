'use client'
import {
  Container,
  Hero,
  AvatarRoot,
  // AvatarImage,
  AvatarFallback,
  MenuContent,
  Navegation,
} from '@/styles/pages/init'
import logoImage from '../../assets/logo.svg'
import Image from 'next/image'
import { ChartLineUp, User, Binoculars, SignOut } from '@phosphor-icons/react'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <MenuContent>
        <span>
          <Image src={logoImage} width={24} height={24} alt="BookWise logo" />
          BookWise
        </span>
        <Navegation>
          <Link href="/home" className="active">
            <ChartLineUp size={24} weight="bold" />
            Início
          </Link>
          <Link href="/explorer">
            <Binoculars size={24} weight="bold" />
            Explorar
          </Link>
          <Link href="/profile">
            <User size={24} weight="bold" />
            Perfil
          </Link>
        </Navegation>
        <Hero>
          <AvatarRoot>
            <AvatarFallback delayMs={600}>
              <User />
            </AvatarFallback>
          </AvatarRoot>
          <strong>Pedro</strong>
          <SignOut size={28} />
        </Hero>
      </MenuContent>
    </Container>
  )
}
