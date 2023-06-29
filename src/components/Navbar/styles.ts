import { styled } from '../../styles'

export const MenuContent = styled('div', {
  margin: '$5 $5 $4 $5',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '$green200',
  borderRadius: 12,
  padding: '$6 0',
  maxHeight: 'calc(100vh - 36px)',

  header: {
    display: 'flex',
    gap: '$3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '$4',
    fontWeight: 'bold',
    fontSize: '$xl',
    backgroundImage: '$gradient-horizontal',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
  },
})
