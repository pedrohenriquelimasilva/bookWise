import { globalCss } from '.'

export const stylesGlobalCss = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    'text-rendering': 'optimizeLegibility',
    background: '$gray800',
  },

  'body, input, button, textarea': {
    fontFamily: '$default',
    fontSize: '1rem',
    color: '$gray200',
    lineHeight: '$base',
  },
})
