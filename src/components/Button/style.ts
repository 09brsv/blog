import styled from "styled-components"

export const Button = styled.button<{ bgColor?: string; textColor?: string; borderColor?: string }>`
  background: ${({ theme, bgColor }) => bgColor ?? theme.colors.blueBgLight};
  cursor: pointer;
  color: ${({ theme, textColor }) => textColor ?? theme.colors.white};
  border: 2px solid ${({ theme, borderColor }) => borderColor ?? theme.colors.borderDark};
  border-radius: 1.5rem;
  padding: 0.7rem 1.5rem;
  white-space: nowrap;
  font-size: 1em;
  font-weight: 500;
  text-transform: uppercase;

  &:hover, &:focus, &:active {
    opacity: 1;
  }
`
