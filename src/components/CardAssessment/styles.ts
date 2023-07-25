import { styled } from '@/styles'

export const CardContainer = styled('article', {
  padding: '$6',
  borderRadius: '$md',
  background: '$gray700',
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  alignItems: 'flex-start',
})

export const Title = styled('strong', {
  lineHeight: '$short',

  span: {
    display: 'block',
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray400',
    fontWeight: '$regular',
  },
})

export const Hero = styled('div', {
  display: 'flex',
  gap: '$4',
  alignItems: 'flex-start',
  width: '100%',

  span: {
    flex: 1,

    strong: {
      display: 'block',
      fontSize: '$sm',
      color: '$gray400',
    },
  },
})

export const ContentBook = styled('section', {
  display: 'flex',
  gap: '$5',

  p: {
    fontSize: '$sm',
    color: '$gray300',
    marginTop: '$4',
  },
})

export const ShowMore = styled('strong', {
  fontSize: '$sm',
  color: '$purple100',
  transition: 'color 0.2s',

  '&:hover': {
    color: '$purple200',
    cursor: 'pointer',
  },
})
