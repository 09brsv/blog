import { Button } from "components/Button"
import styled from "styled-components"

export const ServicesListContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 4rem auto;
	padding: 0 1rem;
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
	overflow-y: hidden;
`

export const ServicesButton = styled(Button)`
	font-family: ${({ theme }) => theme.fonts.rammettoOne};
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 220px;
	border: none;
	text-transform: initial;
	letter-spacing: 0.8px;
	&:active {
		background-color: ${({ theme }) => theme.colors.blueBgDark};
	}
`

export const ServicesListBox = styled.div<{ closed: string }>`
	display: flex;
	align-items: center;
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
`

export const ServicesListItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`

export const ServicesListItem = styled.li`
	color: #444444;
`
