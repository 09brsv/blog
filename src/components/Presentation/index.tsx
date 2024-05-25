import { Button } from "components/Button"
import { RectangleSmallRightIcon } from "config/icons/icons"
import * as S from "./style"

export const Presentation = () => {
	return (
		<S.ContainerPresentation>
			<h1>$Let's turn your vlogging passion</h1>
			<p style={{ fontSize: "16px" }}>
				Join Us on Our Blog and Enjoy <strong style={{ color: "#66B2C2" }}>High-Quality Content</strong> that Inspires
				and Provides Solutions
			</p>
			<RectangleSmallRightIcon style={{ position: "absolute", bottom: "50%", right: "-5%" }} />
			<Button style={{ position: "absolute", bottom: "-6%", translate: "-50%" }}>Join be Partner</Button>
		</S.ContainerPresentation>
	)
}
