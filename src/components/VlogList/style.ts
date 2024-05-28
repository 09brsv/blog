import styled from "styled-components"
import { device } from "styles"

export const VlogListContainer = styled.div<{ isInfiniteList?: boolean }>`
	border: 2px solid ${({ theme }) => theme.colors.white};
	border-left: none;
	margin: 3rem auto 1rem -5%;
	overflow-x: hidden;
	display: ${({ isInfiniteList }) => (isInfiniteList ? "block" : "none")};

	@media ${device.md} {
		overflow-x: auto;
		margin: auto;
		border: 2px solid ${({ theme }) => theme.colors.white};
		border-radius: 1.5rem;
		display: ${({ isInfiniteList }) => (isInfiniteList ? "none" : "block")};
	}
`

export const VlogFlatList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0 0.7rem;
	display: flex;
	animation: rotate 5s infinite linear;

	@media ${device.md} {
		animation: unset;
	}

	@keyframes rotate {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
`

export const VlogListItem = styled.li<{ selected: string }>`
	color: ${({ theme, selected }) => (selected === "true" ? theme.colors.titleText : theme.colors.white)};
	background: ${({ theme, selected }) => (selected === "true" ? theme.colors.white : theme.colors.blueBgLight)};
	font-weight: ${({ selected }) => (selected === "true" ? "bold" : "normal")};
	border-left: 3px solid ${({ theme }) => theme.colors.white};
	border-radius: ${({ selected }) => (selected === "true" ? "1.5rem 0 0 1.5rem" : "1.5rem")};
	margin-right: ${({ selected }) => (selected === "true" ? "-.7rem" : "0")};
	padding: ${({ selected }) => (selected === "true" ? ".5rem 1.5rem" : ".5rem 1rem")};
	font-size: 0.8em;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;

	&:nth-of-type(1) {
		border-left: none;
	}
	&:nth-last-of-type(1) {
		padding-right: 0;
	}

	@media ${device.md} {
		font-size: 1em;
		letter-spacing: 0.05em;
		background: ${({ theme }) => theme.colors.blueBgLight};
	}
`
