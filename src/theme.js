import { css } from 'styled-components'

export default {
  colors: {
    ASTRONAUT_BLUE: '#004165',
    BURGUNDY: '#772432',
    CARDINAL: '#CD202C',
    EDWARD: '#A9B2B1',
    GOLDEN_SAND: '#F2DF74',
    WHITE: '#FFFFFF'
  },
  shadow: {
    BOTTOM: '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)'
  },
  fontFamily: {
    MONSERRAT: '"Monserrat", sans-serif',
    LATO: '"Lato", sans-serif'
  },
  fontSize: {
    H1: 64,
    H2: 36,
    H3: 24,
    M: 18,
    S: 15
  },
  media: {
    mobile: (...args) =>
      css`@media (max-width: 600px) {
        ${css(...args)}
      }
    `,
    desktop: (...args) =>
      css`@media (min-width: 601px) {
        ${css(...args)}
      }`
  }
}