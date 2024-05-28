import { Attempts } from "components/Attempts"
import { Button } from "components/Button"
import { RectangleSmallRightIcon } from "config/icons/icons"
import * as S from "./style"

export const Presentation = () => {
	return (
		<S.ContainerPresentationWrapper>
			<S.ContainerPresentation>
				<S.ContainerPresentationDescription>
					<h1>Let's turn your vlogging passion</h1>
					<p style={{ fontSize: "16px" }} className="description">
						Join Us on Our Blog and Enjoy <strong style={{ color: "#66B2C2" }}>High-Quality Content</strong> that
						Inspires and Provides Solutions
					</p>
				</S.ContainerPresentationDescription>
				<RectangleSmallRightIcon style={{ position: "absolute", top: "15%", right: "-3%" }} />
				<Button className="button">Join be Partner</Button>
			</S.ContainerPresentation>
			<Attempts />
		</S.ContainerPresentationWrapper>
	)
}
