import { styled } from '..'

export const Container = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  minHeight: '100vh',
})

export const Schedule = styled('div', {
  display: 'flex',
  alingnItems: 'center',
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
    alingnItems: 'center',
    justifyContent: 'center',
    gap: '$3',
    color: '$gradient-horizontal',
    zIndex: '999',
  },

  div: {
    maxWidth: 600,
    position: 'relative',

    div: {
      position: 'absolute',
      backgroundColor: '$gradient-horizontal',
      opacity: 0.7,
      width: '100%',
      height: '100%',
      backgroundClip: 'contentBox',
    },

    img: {
      width: '100%',
      borderRadius: '$md',
      objectFit: 'contain',
      backgroundColor: '$gradient-horizontal',
    },
  },
})

export const ButtonConect = styled('button', {
  all: 0,
  display: 'flex',
  alingnItems: 'center',
  gap: '$5',
  padding: '$5 $6',
  width: '100%',
  background: '$gray600',
  color: '$gray200',
  transition: 'background-color 0.2s',
  borderRadius: '$sm',
  border: '1px solid $gray600',
  cursor: 'pointer',
  fontSize: '$lg',
  fontWeight: '700',

  '&:not(:disabled):hover, &:not(:disabled):focus': {
    background: '$gray500',
    border: '1px solid $purple200',
  },
})
