import styled from "styled-components"
import { device } from "styles"

export const MarketingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 13rem;
	background: ${({ theme }) => theme.colors.blueBgLight};
	border-radius: ${({ theme }) => theme.radius.container};
	
	@media ${device.md} {
		flex-direction: row;
	}
`

export const MarketingContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 2rem 1rem;
	width: 110%;
	margin-left: -5%;
	background: ${({ theme }) => theme.colors.blueBgLight};
	border-radius: ${({ theme }) => theme.radius.container};

	@media ${device.md} {
		max-width: 60%;
		margin-left: 5rem;
	}
`

export const MarketingTitle = styled.h1`
`

export const MarketingTextWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 1.5rem 0;
`

export const MarketingBoxLine = styled.div`
	@media ${device.md} {
		display: none;
	}
`

export const MarketingText = styled.p`
	font-size: 16px;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.white};
	max-width: 60%;
	margin-left: -5%;

	@media ${device.md} {
		&.smallScreenOnly {
			display: none
		}
	}
`

export const MarketingDescriptionContainer = styled.div`
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: ${({ theme }) => theme.radius.container};
	align-items: center;
	padding: 2rem;
	margin: 2rem 0 4rem 0;
	gap: 1.5rem;

	@media ${device.md} {
		flex-direction: row;
	}
`

export const MarketingDescriptionWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
	width: 100%;
`

export const MarketingDescriptionIconContainer = styled.div`
	display: flex;
	align-items: center;
`

export const MarketingDescriptionText = styled.p`
	color: ${({ theme }) => theme.colors.blueBgDark};
	font-size: 0.8em;
`

export const MarketingBoxScreenMedium = styled.div`
	display: none;

	@media ${device.md} {
		display: flex;
		position: relative;
		width: 40%;
		justify-content: space-around;
		align-items: center;
		padding: 2rem 4rem 2rem 2rem;
		margin-top: 7rem;
	}
`
