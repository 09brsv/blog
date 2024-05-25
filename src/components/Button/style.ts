import styled from "styled-components"

export const Button = styled.button<{ bgColor?: string; textColor?: string; borderColor?: string }>`
  background: ${({ theme, bgColor }) => bgColor ?? theme.colors.blueBgLight};
  cursor: pointer;
  color: ${({ theme, textColor }) => textColor ?? theme.colors.white};
  border: 2px ${({ theme, borderColor }) => borderColor ?? theme.colors.borderDark};
  border-radius: 1rem;
  padding: 0.7rem 1.3rem;
  font-size: 1.01em;
  font-weight: 500;
  text-transform: uppercase;
`
