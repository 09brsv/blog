import styled from "styled-components"

export const PlansContainer = styled.div`
  padding-top: ${({ theme }) => theme.paddings.pageTop};
`

export const PlansCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border: 3px solid ${({ theme }) => theme.colors.blueBgDark};
  border-radius: ${({ theme }) => theme.radius.container};
  padding: 2rem;
  width: 108%;
  margin-left: -4%;
  height: 1050px;
  margin-top: 11rem;
  background-color: ${({ theme }) => theme.colors.blueBgLight};
`

export const PlansCardBox = styled.div`
  position: absolute;
  gap: 1.5rem; 
  display: flex;
  flex-direction: column;

  &:nth-child(1) {
    top: -13%;
  }

  &:nth-child(2) {
    top: 28%;
  }

  &:nth-child(3) {
    top: 68%;
  }
`

export const PlansBoxItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: self-start;
  gap: .5rem;
  list-style: none;
  padding: 1.8rem;
`

export const PlansItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  small {
    width: 10px;
    height: 2px;
    background-color: var(--blue-bg-light);
  }
`

export const PlansPrice = styled.h3`
  font-family: "RammettoOne";
  font-size: 1.8em;
  font-weight: 800;
  padding-top: .5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.titleText};
`
