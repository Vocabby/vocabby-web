import { injectGlobal } from 'styled-components'
import theme from './theme'

export default injectGlobal`
  body {
    background: #f1f4fd;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    line-height: 1;
    margin: 0;
  }

  * {
    outline: none;
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  li,
  figcaption,
  div {
    font-family: 'Cairo', sans-serif;
  }

  h1,
  h2,
  h3 {
    color: ${theme.color.header};
  }

  h1 {
    font-size: 28px;
    margin: 25px 0;
  }

  h2 {
    font-size: 20px;
  }

  p,
  li {
    font-size: 15px;
    color: $text-color;
  }

  ul {
    line-height: 1.8;
  }

  b {
    font-weight: bold;
  }

  hr {
    margin-top: 22px;
    margin-bottom: 22px;
    border: 0;
    border-top: 1px solid #e4eaec;
  }

  a {
    color: #337ab7;
    text-decoration: none;

    &:hover {
      color: #23527c;
      text-decoration: underline;
    }
  }
`
