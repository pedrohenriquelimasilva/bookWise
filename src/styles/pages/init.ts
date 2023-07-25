import { styled } from '..'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '264px 1fr',
  gap: '4rem',
  position: 'relative',
  maxHeight: '100vh',
})

export const HomeContainer = styled('div', {
  marginTop: '4.5rem',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '4rem',
  paddingRight: '6rem',
})

export const MainContent = styled('div', {
  maxHeight: '92vh',
  overflow: 'scroll',

  '&::-webkit-scrollbar': {
    width: 0,
  },

  h1: {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
  },
})

export const RatingBook = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '3.4rem',
  gap: '$4',
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
})

export const AssessmentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '$4',
  marginTop: '$10',
  maxHeight: '100%',

  h2: {
    fontSize: '$sm',
  },
})

export const CardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '$3',
})
