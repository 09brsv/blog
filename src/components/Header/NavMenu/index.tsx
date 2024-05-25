import * as S from "./style"

export const NavMenu = ({ isOpen = false }) => {
	return (
		<S.Nav>
			<S.NavList isopen={String(isOpen)}>
				<S.NavItem style={{ fontWeight: "bold" }}>
					<a href="#home">Home</a>
				</S.NavItem>
				<S.NavItem>
					<a href="#about">About</a>
				</S.NavItem>
				<S.NavItem>
					<a href="#services">Services</a>
				</S.NavItem>
				<S.NavItem>
					<a href="#contact">Contact</a>
				</S.NavItem>
			</S.NavList>
		</S.Nav>
	)
}
