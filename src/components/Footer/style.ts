import styled from "styled-components"

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 3rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

export const FooterText = styled.p`
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.secondaryText};
`
