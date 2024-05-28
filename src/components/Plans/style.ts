import { RectangleSmallLeftIcon } from "config/icons/icons"
import styled from "styled-components"
import { device } from "styles"

export const PlansContainer = styled.div`
	padding-top: ${({ theme }) => theme.paddings.pageTop};
	margin-top: 10rem;
`

export const PlansBoxIconOnlySmall = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: space-evenly;

	@media ${device.md} {
		& h1 {
			margin-right: 0;
			text-align: center;
			max-width: 800px;
		}
	}
`

export const PlansCardContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	border: 3px solid ${({ theme }) => theme.colors.blueBgDark};
	border-radius: ${({ theme }) => theme.radius.container};
	padding: 2rem;
	width: 108%;
	margin-left: -4%;
	height: 1050px;
	margin-top: 11rem;
	background-color: ${({ theme }) => theme.colors.blueBgLight};

	@media ${device.md} {
		width: 80%;
		margin: 10rem auto;
		height: 230px;
		flex-direction: row;
		gap: 0;
	}
`

export const PlansRectangleSmallLeft = styled(RectangleSmallLeftIcon)`
	display: none;

	@media ${device.md} {
		display: block;
	}
`

export const PlansCardBox = styled.div`
	gap: 1.5rem;
	display: flex;
	flex-direction: column;
	position: absolute;

	&:nth-child(1) {
		top: -13%;
	}

	&:nth-child(2) {
		top: 28%;
	}

	&:nth-child(3) {
		top: 68%;
	}

	@media ${device.md} {
		margin-top: -7rem;
		position: static;
		gap: 2.8rem;
	}
`

export const PlansBoxItems = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: self-start;
	gap: 0.5rem;
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
	position: absolute;
	bottom: 0;
	left: 50%;
	text-align: center;
	transform: translateX(-50%);
	font-family: "RammettoOne";
	font-size: 1.8em;
	font-weight: 800;
	width: 100%;
	color: ${({ theme }) => theme.colors.titleText};
`
