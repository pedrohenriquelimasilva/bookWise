import { styled } from '..'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '264px 1fr 420px',
  gap: '4rem',
  position: 'relative',
  maxHeight: '100vh',
  overflow: 'hidden',
})

export const MainContent = styled('div', {
  marginTop: '4.5rem',
  minHeight: '100vh',
  overflow: 'scroll',

  h1: {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
  },
})

export const RatingBook = styled('aside', {
  margin: '146px 6rem 0 0',
})

export const HeroRating = styled('span', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '$sm',

  a: {
    fontWeight: 'bold',
    padding: '$2',
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
    color: '$purple100',
    textDecoration: 'none',
    transition: '0.2s',

    '&:hover, &:focus': {
      color: '$purple200',
    },
  },
})

export const BooksContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  marginTop: '$4',
})
