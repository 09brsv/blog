import { createGlobalStyle } from "styled-components"

export const CssGlobal = createGlobalStyle`
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Roboto", sans-serif;
  }
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow-x: hidden;
  }
  body {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`
