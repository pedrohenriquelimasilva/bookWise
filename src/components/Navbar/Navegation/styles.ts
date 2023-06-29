import { styled } from '@/styles'
import Link from 'next/link'

export const NavegationContainer = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$4',
  margin: '4rem auto 0',
})

export const NavItemContent = styled(Link, {
  color: '$gray400',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.2s',

  svg: {
    marginRight: '$3',
  },

  '&:hover': {
    color: '$gray100',
  },

  '&::before': {
    content: '',
    width: 4,
    height: 24,
    borderRadius: '$full',
    marginRight: '$4',
    background: '$gradient-vertical',
    transition: '0.2s',
    opacity: 0,
  },

  variants: {
    active: {
      true: {
        fontWeight: '$bold',
        color: '$gray100',

        '&::before': {
          opacity: 1,
        },
      },
    },
  },
})
