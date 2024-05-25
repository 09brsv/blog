import styled from "styled-components"

export const Card = styled.div`
  border: ${({ theme }) => theme.colors.border};
  border-radius: 2rem;
  height: 280px;
  width: 215px;
  background-color: ${({ theme }) => theme.colors.white};
`

export const CardTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  padding: 1rem;
  padding-top: 1.8rem;
  color: ${({ theme }) => theme.colors.titleText};
  border-bottom: ${({ theme }) => theme.colors.border};
  text-align: center;
`

export const CardDescription = styled.p`
  padding: 2rem;
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondaryText};
`
