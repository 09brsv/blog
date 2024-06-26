import styled from "styled-components"
import { device } from "styles"

export const Nav = styled.nav`
`

export const NavList = styled.ul<{ isopen: string }>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  list-style: none;
  padding: 0;
  transform: ${({ isopen }) => (isopen === "true" ? "translateX(0)" : "translateX(500%)")};
  transition: transform 0.5s ease-in-out;

  & :last-child {
    & button {
      padding: .5rem 0.9rem; text-transform: none
    }
  }

  @media ${device.md} {
    flex-direction: row;
    transform: translateX(0);
    & button {
      margin-left: 5rem
    }
  }
`

export const NavItem = styled.li`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryText};

  & .contact {
    &:hover {
      opacity: .8;
    }
  }
`
