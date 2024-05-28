import { ArrowMediumDownLeftIcon, ArrowMediumRightDownRightIcon } from "config/icons/icons"
import styled from "styled-components"
import { device } from "styles"

export const NavigationContainer = styled.div`
	padding-top: ${({ theme }) => theme.paddings.pageTop};
`

export const NavigationBoxMain = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
`

export const NavigationBoxDescription = styled(NavigationBoxMain)`
	@media ${device.md} {
		flex-direction: row;
		justify-content: center;
		gap: 10rem;
		align-items: center;
	}
`

export const NavigationTitle = styled.h1`
	text-align: left;
	margin-right: 0;
`

export const NavigationBoxText = styled(NavigationBoxMain)`
	& > button,
	.column {
		display: none;
	}
	@media ${device.md} {
		text-align: left;
		flex-direction: row;

		& .column {
			display: flex;
		}

		& .row {
			display: none;
		}

		& > button {
			display: block;
		}
	}
`

export const NavigationWrapper = styled(NavigationBoxMain)`
	max-width: 23rem;
	text-align: justify;
`

export const NavigationBoxContact = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2.5rem;

	@media ${device.md} {
		& > button {
			display: none;
		}
	}
`

export const NavigationCircle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 266px;
	height: 301px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.blueBgLight};

	@media ${device.md} {
	}
`

export const NavigationArrowMediumDownLeft = styled(ArrowMediumDownLeftIcon)`
	position: absolute;
	top: 45%;
	right: -20%;

	@media ${device.md} {
		display: none;
	}
`

export const NavigationArrowMediumRightDownRight = styled(ArrowMediumRightDownRightIcon)`
	display: none;

	@media ${device.md} {
		display: block;
		position: absolute;
		top: 30%;
		width: 7rem;
		left: -45%;
	}
`

export const NavigationLine = styled.div`
	height: 2px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.border};
`

export const NavigationFlexBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3rem 0;
	width: 100%;
	gap: 0.5rem;

	& .icon-arrow-large {
		display: none;
	}

	@media ${device.md} {
		& .icon-arrow-large {
			display: block;
		}

		& .icon-arrow {
			display: none;
		}
	}
`

export const NavigationSocials = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 2.5rem;
`

export const NavigationBoxSocialsContact = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;
`

export const NavigationSocialsBoxIcons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
	border: 4px solid ${({ theme }) => theme.colors.borderDark};
`
