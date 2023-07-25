'use client'
import { NavegationContainer, NavItemContent } from './styles'
import { ChartLineUp, Binoculars, User } from '@phosphor-icons/react'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

const navLinks = [
  {
    href: '/home',
    children: 'Início',
    icon: <ChartLineUp size={24} weight="bold" />,
  },
  {
    href: '/home/explorer',
    children: 'Explorar',
    icon: <Binoculars size={24} weight="bold" />,
  },
]
export function Navegation() {
  const pathNameNow = usePathname()
  const session = useSession()

  const authenticatedLinks = useMemo(() => {
    if (session.status === 'authenticated') {
      return navLinks.concat({
        href: '/home/profile',
        children: 'Perfil',
        icon: <User size={24} weight="bold" />,
      })
    }

    return navLinks
  }, [session])

  return (
    <NavegationContainer>
      {authenticatedLinks.map(({ href, children, icon }) => {
        return (
          <NavItemContent
            key={children}
            href={href}
            active={pathNameNow === href}
          >
            {icon}
            {children}
          </NavItemContent>
        )
      })}
    </NavegationContainer>
  )
}
