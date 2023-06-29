import { styled } from '@/styles'

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
