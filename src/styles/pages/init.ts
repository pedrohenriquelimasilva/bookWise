import { styled } from '..'
import * as Avatar from '@radix-ui/react-avatar'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '264px 1fr 324px',
  gap: '4rem',
  position: 'relative',
})

export const MenuContent = styled('aside', {
  margin: '$5 $5 $4 $5',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  background: '$green200',
  borderRadius: 12,
  padding: '$6 0',

  span: {
    display: 'flex',
    gap: '$3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '$4',
    fontWeight: 'bold',
    fontSize: '$xl',
    backgroundImage: '$gradient-horizontal',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
  },
})

export const Navegation = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginTop: '4rem',

  a: {
    color: '$gray400',
    textDecoration: 'none',
    display: 'flex',
    gap: '$3',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeft: '4px solid $gray700',

    '&.active': {
      color: '&gray100',
      fontWeight: '$bold',
      borderLeft: '4px solid $gradient-vertical',
      borderRadius: '$full',
    },
  },
})

export const Hero = styled('footer', {
  marginTop: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',
})

export const AvatarRoot = styled(Avatar.Root, {
  width: 32,
  height: 32,
  borderRadius: '$full',
  overflow: 'hidden',
  display: 'inline-block',
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6',
  },
})
