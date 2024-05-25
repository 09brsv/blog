import styled from "styled-components"

export const OvalCircle = styled.div<{ rotate?: number }>`
  width: 160px;
  height: 180px;
  border-radius: 46%;
  border: 5px solid ${({ theme }) => theme.colors.blueBgDark};
  background-color: ${({ theme }) => theme.colors.bgCircle};
  transform: rotate(${({ rotate }) => rotate ?? 0}deg);
`
