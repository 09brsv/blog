import styled from "styled-components"

export const VlogListContainer = styled.div`
	border: 2px solid ${({ theme }) => theme.colors.white};
	border-left: none;
	margin: 3rem auto 1rem -5%;
	overflow-x: hidden;
`

export const VlogFlatList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0 0.7rem;
	display: flex;
	animation: rotate 5s infinite linear;

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

	&:nth-of-type(1) {
		border-left: none;
	}
	&:nth-last-of-type(1) {
		padding-right: 0;
	}
`
