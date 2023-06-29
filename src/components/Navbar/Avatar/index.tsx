'use client'
import { useSession, signOut } from 'next-auth/react'
import { AvatarRoot, Hero, AvatarFallback, AvatarImage } from './styles'
import { User, SignOut, SignIn } from '@phosphor-icons/react'
import { getFirstName } from '@/utils/getFirstName'

export function Avatar() {
  const session = useSession()
  const dataUser = session.data
    ? { src: session.data.user.avatar_url, alt: session.data.user.name }
    : { src: '', alt: '' }

  const loginUser = session.status === 'authenticated'

  async function handleSignOut() {
    await signOut()
  }
  return (
    <Hero>
      {loginUser ? (
        <>
          <AvatarRoot>
            <AvatarImage src={dataUser.src} alt={dataUser.alt} />

            <AvatarFallback delayMs={600}>
              <User />
            </AvatarFallback>
          </AvatarRoot>
          <strong>{getFirstName(session.data.user.name)}</strong>
          <SignOut size={28} color="#F75A68" onClick={handleSignOut} />
        </>
      ) : (
        <>
          <strong>Fazer login</strong>
          <SignIn size={28} color="#50B2C0" />
        </>
      )}
    </Hero>
  )
}
