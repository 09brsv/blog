import styled from "styled-components"

export const OvalCircle = styled.div<{ rotate?: number; border?: string }>`
  width: 165px;
  height: 200px;
  border-radius: 44%;
  border: 6px solid ${({ theme, border }) => border ?? theme.colors.blueBgDark};
  background-color: ${({ theme }) => theme.colors.bgCircle};
  transform: rotate(${({ rotate }) => rotate ?? 0}deg);
`
