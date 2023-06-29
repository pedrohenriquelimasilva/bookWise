import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../../styles'

export const Hero = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',

  svg: {
    cursor: 'pointer',
    transition: 'filter 0.2s',

    '&:hover': {
      filter: 'brightness(0.8)',
    },
  },
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
