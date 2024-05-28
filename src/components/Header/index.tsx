import { LogoIcon, MobileMenuIcon } from "config/icons/icons"
import { useState } from "react"
import { NavMenu } from "./NavMenu"
import * as S from "./style"

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	return (
		<S.Header>
			<LogoIcon />
			<NavMenu isOpen={isOpen} />
			<strong
				style={{ cursor: "pointer", display: isOpen ? "block" : "none", padding: ".5rem" }}
				onClick={handleClick}
				onKeyUp={handleClick}>
				X
			</strong>
			<S.HeaderBoxMobile>
				<MobileMenuIcon
					style={{ cursor: "pointer", display: isOpen ? "none" : "block" }}
					onClick={handleClick}
					onKeyUp={handleClick}
				/>
			</S.HeaderBoxMobile>
		</S.Header>
	)
}
