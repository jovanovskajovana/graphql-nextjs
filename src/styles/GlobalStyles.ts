import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');

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
