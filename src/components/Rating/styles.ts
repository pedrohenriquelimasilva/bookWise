import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
})

export const StarContainer = styled('button', {
  all: 0,
  background: 'transparent',
  border: 0,
  width: '$4',
  height: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    color: '$purple100',
  },
})
