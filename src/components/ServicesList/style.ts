import { Button } from "components/Button"
import styled from "styled-components"
import { device } from "styles"

export const ServicesListContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding:4rem;

	@media ${device.md} {
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		font-size: 0.8em;
	}
`

export const ServicesFlexBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3rem;
	gap: 0.5rem;

	@media ${device.md} {
		.arrow-completed {
			width: 80px;
		}
	}
`

export const ServicesSocialNetworks = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 2.5rem;
	padding-bottom: 3rem;

	@media ${device.md} {
		flex: 1;
		& .logo-icon {
			width: 6rem;
			height: 3.5rem;
		}
		& .social-box-icon {
			width: 2.5rem;
			height: 2.5rem;
			& svg {
				width: 1.3rem;
				height: 1.3rem;
			}
		}
	}
`

export const ServicesBoxSocialsContact = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;
`

export const ServicesSocialsBoxIcons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
	border: 4px solid ${({ theme }) => theme.colors.borderDark};
`

export const ServicesListWrapper = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	margin-bottom: 1rem;
	display: flex;
	flex-direction: column;
	align-items: self-start;
	gap: 1.5rem;
	overflow: hidden;

	@media ${device.md} {
		align-self: flex-end;
		
	}
`

export const ServicesButton = styled(Button)`
	font-family: ${({ theme }) => theme.fonts.rammettoOne};
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: none;
	width: 220px;
	text-transform: initial;
	letter-spacing: 0.8px;
	padding-right: 2.5rem;

	&:active {
		background-color: ${({ theme }) => theme.colors.blueBgDark};
	}
	@media screen and (max-width: 900px) {
		border-radius: 1rem !important;
	}

	@media ${device.md} {
		cursor: default;
		width: fit-content;
	}
`

export const ServicesListBox = styled.div<{ closed: string }>`
	display: flex;
	gap: 1rem;
	padding-left: .5rem;
	transition: all 0.4s ease;
	z-index: -2;
	${({ closed }) =>
		closed === "closed" &&
		`
		transform: translateY(-250%);
		pointer-events: none;
	`}
	animation: fadeIn .4s;

	@keyframes fadeIn {
		0% { transform: translateY(-250%); }
		100% { transform: translateY(0%); }
	}

	@media ${device.md} {
		transform: translateY(0%);
		animation: unset;

	}
`

export const ServicesListItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`

export const ServicesListItem = styled.li`
	color: #444444;
`
