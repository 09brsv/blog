import styled from "styled-components"

export const ContainerPresentation = styled.div`
  position: relative;
  padding: 2rem;
  padding-bottom: 5rem;
  border: 3px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.container};
  text-align: center;
`