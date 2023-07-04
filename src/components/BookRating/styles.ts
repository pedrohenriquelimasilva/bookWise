import { styled } from '@/styles'
import Image from 'next/image'

export const Container = styled('section', {
  padding: '$4 $5',
  background: '$gray700',
  borderRadius: '$md',
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
  width: '100%',
  maxHeight: 130,
})

export const Datails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  strong: {
    lineHeight: '$short',

    span: {
      fontSize: '$sm',
      fontWeight: '400',
      lineHeight: '$base',
      color: '$gray400',
      display: 'block',
    },
  },
})

export const BookImage = styled(Image, {
  borderRadius: 4,
  objectFit: 'cover',
})
