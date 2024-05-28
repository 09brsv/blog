import { Button } from "components/Button"
import { RectangleMediumRightIcon, RectangleSmallRightIcon } from "config/icons/icons"
import styled from "styled-components"
import { device } from "styles"

export const CampaignContainer = styled.div`
	position: relative;
	padding-top: ${({ theme }) => theme.paddings.pageTop};
	padding-bottom: 3rem;
	margin-right: 2rem;

	@media ${device.lg} {
		padding-right: 3rem;
		padding-left: 3rem;
	}
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
	justify-content: space-evenly;
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
	align-items: end;
	justify-content: center;
	padding: 2rem 0;
	flex-direction: column;

	@media ${device.lg} {
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 5rem;
		align-items: center;
	}
`

export const CampaignScreenMediumOnly = styled.div`
	display: none;

	@media ${device.lg} {
		display: flex;
	}
`

export const CampaignSmallScreenOnly = styled.div`
	@media ${device.md} {
		padding-right: 15rem;
	}
	@media ${device.lg} {
		display: none;
	}
`

export const CampaignWrapperLine = styled.div`
	position: absolute;
	width: 60%;
	top: 7rem;
	left: 5%;
	height: 95%;
	z-index: -1;
	border-radius: ${({ theme }) => theme.radius.container};
	border: 3px solid ${({ theme }) => theme.colors.border};

	&::after {
		content: "";
		position: absolute;
		right: -2%;
		bottom: 20rem;
		width: 100px;
		height: 100%;
		background: white;
	}

	@media ${device.lg} {
		width: 85%;
		top: 3rem;
		height: 97%;
		border-top: none;

		&::after {
			content: "";
			position: absolute;
			top: 0;
			height: 50px;
			left: -2%;
			background-color: var(--white);
		}
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
	bottom: -4rem;
	padding-left: 3rem;
	padding-right: 3rem;
`

export const CampaingBoxCircle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 2rem;
	margin-right: 0;

	@media ${device.md} {
		padding-right: 15rem;
	}
`

export const CampaignRectangleSmallRight = styled(RectangleSmallRightIcon)`
	display: none;

	@media ${device.lg} {
		display: block;
		position: absolute;
		top: 23%;
		left: -1%;
		z-index: 2;
	}
`

export const CampaignCircle = styled.div`
	position: relative;
	width: 170px;
	height: 170px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.bgCircle};
`

export const CampaignBifurcation = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: absolute;
	top: 2.5rem;
	left: -0.5rem;
	width: 40px;
	height: 90px;
	box-shadow: 0 0 0 4px white;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.white};
`
