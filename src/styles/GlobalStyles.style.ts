import { createGlobalStyle } from "styled-components"
import { device } from "./Breakpoints.style"

export const CssGlobal = createGlobalStyle`
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.primaryText};
  }
  body {
    font-family: "Roboto", sans-serif;
  }
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow-x: hidden;
  	scroll-behavior: smooth;
  }
  body {
    display: flex;
    overflow-x: hidden;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    color: ${({ theme }) => theme.colors.titleText};
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
  h1 {
    font-family: "RammettoOne", sans-serif;
    font-size: 28px;
    font-weight: 800;
    text-align: center;
    color: ${({ theme }) => theme.colors.titleText};
    text-transform: uppercase;

    @media ${device.md} {
			font-size: 2.2em;
      margin-right: 13rem;
    }
  }
`
