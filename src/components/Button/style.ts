import styled from "styled-components"

export const Button = styled.button<{ bgcolor?: string; textcolor?: string; bordercolor?: string }>`
  background: ${({ theme, bgcolor }) => bgcolor ?? theme.colors.blueBgLight};
  cursor: pointer;
  color: ${({ theme, textcolor }) => textcolor ?? theme.colors.white};
  border: 2px solid ${({ theme, bordercolor }) => bordercolor ?? theme.colors.borderDark};
  border-radius: 1.5rem;
  padding: 0.7rem 1.5rem;
  white-space: nowrap;
  font-size: 1em;
  font-weight: 500;
  text-transform: uppercase;

  &:hover, &:focus, &:active {
    opacity: .8;
  }
`
