import styled from "styled-components"

export const Card = styled.div<{ border?: string }>`
  border: 3px solid ${({ theme }) => theme.colors.border};
  border-radius: 2rem;
  height: 300px;
  width: 225px;
  background-color: ${({ theme }) => theme.colors.white};
  
  &:nth-child(2n), &.second-card {
    background-color: ${({ theme }) => theme.colors.blueBgDark};
    p, h4, small, span, h3 {
      color: ${({ theme }) => theme.colors.white};
    }
    small {
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
`

export const CardTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  padding: 1rem;
  padding-top: 1.8rem;
  color: ${({ theme }) => theme.colors.titleText};
  border-bottom: 3px solid ${({ theme }) => theme.colors.border};
  text-align: center;
`

export const CardDescription = styled.p`
  padding: 2rem;
  font-size: 14px;
  text-align: center;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.secondaryText};
`
