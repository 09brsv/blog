import { Button } from "components/Button"
import * as S from "./style"

export const NavMenu = ({ isOpen = false }) => {
	return (
		<S.Nav>
			<S.NavList isopen={String(isOpen)}>
				<S.NavItem style={{ fontWeight: "bold" }}>
					<a style={{ textTransform: "uppercase" }} href="#home">
						Home
					</a>
				</S.NavItem>
				<S.NavItem>
					<a style={{ textTransform: "uppercase" }} href="#about">
						About
					</a>
				</S.NavItem>
				<S.NavItem>
					<a style={{ textTransform: "uppercase" }} href="#services">
						Services
					</a>
				</S.NavItem>
				<S.NavItem>
					<a href="#contact">
						<Button bgColor="var(--blue-bg-dark)" color="var(--white)">
							Contact Us
						</Button>
					</a>
				</S.NavItem>
			</S.NavList>
		</S.Nav>
	)
}
