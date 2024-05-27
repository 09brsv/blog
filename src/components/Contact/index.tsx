import { Button } from "components/Button"
import { Check } from "components/Check"
import { ArrowSmallDownRightIcon, ArrowSmallRightIcon } from "config/icons/icons"
import * as S from "./style"

export const Contact = () => {
	const data = [
		{
			id: 1,
			description: "01",
			icon: ArrowSmallDownRightIcon,
		},
		{
			id: 2,
			description: "02",
			icon: ArrowSmallRightIcon,
		},
		{
			id: 3,
			description: "03",
			icon: ArrowSmallRightIcon,
		},
	]
	return (
		<S.ContactContainer>
			<h1 style={{ marginBottom: "1rem" }}>Let’s Begin the Journey with Us</h1>
			<p style={{ textAlign: "center", letterSpacing: "1px" }}>
				Make Your Choice, our partners are very experienced in their field and have the potential to increase your
				business
			</p>
			<S.ContactCircleContainer>
				{data.map(item => (
					<S.ContactCircle key={item.id}>
						<S.ContactCircleText>{item.description}</S.ContactCircleText>
						<item.icon width={30} height={24} />
					</S.ContactCircle>
				))}
			</S.ContactCircleContainer>
			<S.ContactRectangleIcon />
			<S.ContactForm>
				<S.ContactBoxInput>
					<Check fill="var(--border)" textColor="var(--white)" size={24} />
					<span />
					<S.ContactInput type="text" placeholder="Name" />
				</S.ContactBoxInput>

				<S.ContactBoxInput>
					<Check fill="var(--border)" textColor="var(--white)" size={24} />
					<span />
					<S.ContactInput type="text" placeholder="Email" />
				</S.ContactBoxInput>
				<Button style={{ marginTop: "1rem" }}>get started</Button>
			</S.ContactForm>
		</S.ContactContainer>
	)
}
