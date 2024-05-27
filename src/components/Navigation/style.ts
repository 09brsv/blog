import { ArrowMediumDownLeftIcon } from "config/icons/icons"
import styled from "styled-components"

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

export const NavigationWrapper = styled(NavigationBoxMain)`
	max-width: 15rem;
	text-align: center;
`

export const NavigationBoxContact = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2.5rem;
`

export const NavigationCircle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 228px;
	height: 216px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.blueBgLight};
`

export const NavigationArrowMediumDownLeft = styled(ArrowMediumDownLeftIcon)`
	position: absolute;
	top: 30%;
	right: -20%;
`

export const NavigationFlexBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3rem;
	gap: .5rem;
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
