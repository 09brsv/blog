import { CheckCircle } from "@phosphor-icons/react"
import styled from "styled-components"

export const Check = styled(CheckCircle)<{ fill?: string; color?: string }>`
  color: ${props => props.color ?? props.theme.colors.white};
  fill: ${props => props.fill ?? props.theme.colors.blueBgLight};
`
