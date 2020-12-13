import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px 'Comfortaa', sans-serif;
  }
`
