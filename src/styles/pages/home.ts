import { styled } from '..'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  minHeight: '100vh',
})

export const Schedule = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: 400,
  width: '100%',
  margin: 'auto 0',
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  width: '100%',

  div: {
    marginBottom: '$6',
    display: 'flex',
    flexDirection: 'column',

    strong: {
      fontSize: '$xl',
      lineHeight: '$short',
      color: '$gray100',
    },
  },
})

export const Hero = styled('div', {
  padding: '$5',
  position: 'relative',

  h1: {
    position: 'absolute',
    top: '45%',
    left: '25%',
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
    backgroundImage: '$gradient-horizontal',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',

    zIndex: '999',
  },

  div: {
    maxWidth: 650,
    position: 'relative',
    borderRadius: '$md',

    div: {
      position: 'absolute',
      background:
        'linear-gradient(0deg, rgba(42, 40, 121, 0.6), rgba(42, 40, 121, 0.6)), rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(1px)',
      opacity: 1,
      width: '100%',
      height: '100%',
      backgroundClip: 'contentBox',
    },

    img: {
      width: '100%',
      objectFit: 'cover',
      borderRadius: '$md',
      backgroundColor: '$gradient-horizontal',
    },
  },
})

export const ButtonConect = styled('button', {
  all: 'none',
  display: 'flex',
  alingnItems: 'center',
  gap: '$5',
  padding: '$5 $6',
  width: '100%',
  background: '$gray600',
  color: '$gray200',
  transition: 'background-color 0.2s',
  borderRadius: '$sm',
  border: '2px solid $gray600',
  cursor: 'pointer',
  fontSize: '$lg',
  fontWeight: '700',

  '&:not(:disabled):hover, &:not(:disabled):focus': {
    background: '$gray500',
    border: '2px solid $gray200',
  },
})

export const TextError = styled('p', {
  fontSize: '$sm',
  color: '#f75a68',
})
