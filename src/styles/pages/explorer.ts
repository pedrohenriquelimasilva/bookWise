import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  minHeight: '100vh',
  marginTop: '4.5rem',
  marginRight: '6rem',
})
export const ExplorerContainer = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
})

export const SearchContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  h1: {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
    color: '$gray100',
    fontSize: '$2xl',

    svg: {
      width: 32,
      height: 32,
      color: '$green100',
    },
  },
})

export const SearchForm = styled('form', {
  background: 'transparent',

  label: {
    border: '1px solid $gray500',
    borderRadius: '$sm',
    minWidth: '430px',

    display: 'flex',
    alignItems: 'center',
    gap: '$2',

    padding: '14px $5',

    input: {
      color: '#fff',
      background: 'transparent',
      border: 'none',
      width: '100%',
      outline: 'none',

      '&::placeholder': {
        color: '$gray400',
      },
    },

    svg: {
      color: '$gray500',
      cursor: 'pointer',
    },
  },
})

export const ExplorerNavegation = styled('nav', {})

export const CardsContainer = styled('main', {})
