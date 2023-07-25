import { styled } from '@/styles'
import Image from 'next/image'

export const Container = styled('section', {
  padding: '$4 $5',
  background: '$gray700',
  borderRadius: '$md',
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
  height: '100%',
  width: '100%',
  maxHeight: 130,
})

export const Datails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
  width: '100%',
  gap: 'inherit',

  strong: {
    lineHeight: '$short',
    Maxheight: 200,

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
