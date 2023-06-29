import logoImage from '../../assets/logo.svg'
import Image from 'next/image'
import { MenuContent } from './styles'
import { Navegation } from './Navegation'
import { Avatar } from './Avatar'

export function NavBar() {
  return (
    <MenuContent>
      <div>
        <header>
          <Image src={logoImage} width={24} height={24} alt="BookWise logo" />
          BookWise
        </header>

        <Navegation />
      </div>
      <Avatar />
    </MenuContent>
  )
}
