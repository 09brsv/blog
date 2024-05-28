import styled from "styled-components"
import { device } from "styles"

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .2rem;
  margin-bottom: 3rem;

  @media ${device.md} {
    padding: 0 4rem;
  }
`

export const HeaderBoxMobile = styled.div`
  display: flex;
  @media ${device.md} {
    display: none;
  }
`
