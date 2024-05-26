import { Button } from "components/Button"
import { IntersectIcon, RectangleMediumRightIcon } from "config/icons/icons"
import styled from "styled-components"

export const CampaignContainer = styled.div`
	position: relative;
	padding-top: ${({ theme }) => theme.paddings.pageTop};
  margin-right: 2rem;
`

export const CampaignWrapper = styled.div`
	position: absolute;
	padding-top: ${({ theme }) => theme.paddings.pageTop};
	top: -1.8rem;
	left: -1rem;
	background-color: ${({ theme }) => theme.colors.white};
	width: 100vw;
	height: 3rem;
	border-radius: ${({ theme }) => theme.radius.container};
`

export const CampaignBoxDescription = styled.div`
	display: flex;
	align-items: end;
	justify-content: center;
	gap: 2.5rem;
	padding: 0 2rem 2rem 2rem;
`

export const CampaignDescription = styled.p`
	font-size: 14px;
	max-width: 50%;
	color: ${({ theme }) => theme.colors.primaryText};
`

export const CampaignCardContainer = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	padding: 2rem 0;
	flex-direction: column;
`

export const CampaignWrapperLine = styled.div`
	position: absolute;
	width: 60%;
	top: 7rem;
	left: 5%;
	height: 95%;
	z-index: -1;
	border-radius: ${({ theme }) => theme.radius.container};
	border: ${({ theme }) => theme.colors.border};

  &::after {
    content: "";
    position: absolute;
    right: -2%;
    bottom: 20rem;
    width: 100px;
    height: 100%;
    background: white;
  }
`

export const CampaignRectangleLine = styled(RectangleMediumRightIcon)`
  position: absolute;
  left: -2rem;
  top: 35%;
  width: 70px;
`

export const CampaignButtonLine = styled(Button)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -1rem;
  padding-left: 3rem;
  padding-right: 3rem;
`

export const CampaingBoxCircle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
  margin-bottom: 2rem;
  margin-right: 4rem;
`

export const CampaignCircle = styled.div`
	position: relative;
	width: 140px;
	height: 140px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.bgCircle};
`

export const CampaignBifurcation = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: absolute;
	top: 2rem;
	width: 27px;
	height: 75px;
	box-shadow: 0 0 0 4px white;
	border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
`
