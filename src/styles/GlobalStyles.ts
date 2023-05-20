import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    word-wrap: break-word;
  }

  html {
    min-height: 100%;
  }

  html,
  body {
    font-size: 18px;
    font-style: normal;
    font-stretch: normal;
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-y: none;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  figure {
    margin: 0;
  }

  a,
  button {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  ul,
  menu,
  dir {
    padding-left: 0;
  }

  *:focus,
  *:active {
    outline: 0 !important;
  }

  ::-moz-selection { 
    color: #fff;
    background: #233869;
  }

  ::selection {
    color: #fff;
    background: #233869;
  }

  img {
    max-width: 100%;
  }
`

export default GlobalStyles
