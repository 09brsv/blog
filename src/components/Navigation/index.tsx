import { Button } from "components/Button"
import { LineSpan } from "components/LineSpan"
import { OvalCircle } from "components/OvalCircle"
import {
	ArrowRightIcon,
	HorizontalRectangleIcon,
	InstagramIcon,
	LinkedinIcon,
	LogoIcon,
	TwitterIcon,
} from "config/icons/icons"
import * as S from "./style"

export const Navigation = () => {
	const data = [
		{
			id: 1,
			name: "Twitter",
			icon: TwitterIcon,
		},
		{
			id: 2,
			name: "Instagram",
			icon: InstagramIcon,
		},
		{
			id: 3,
			name: "Linkedin",
			icon: LinkedinIcon,
		},
	]

	return (
		<S.NavigationContainer>
			<S.NavigationBoxMain>
				<S.NavigationWrapper>
					<h1>We are Prioritizes Mutual Development</h1>
					<p style={{ letterSpacing: ".3px" }}>Let's build and succeed together with the services we provide</p>
					<LineSpan width="6rem" bgColor="var(--line-blue)" />
				</S.NavigationWrapper>
				<S.NavigationBoxContact>
					<S.NavigationCircle>
						<OvalCircle style={{ border: "5px solid var(--white)" }} />
					</S.NavigationCircle>
					<S.NavigationArrowMediumDownLeft />
					<Button>contact us</Button>
				</S.NavigationBoxContact>
				<S.NavigationFlexBox>
					<ArrowRightIcon width={250} />
					<HorizontalRectangleIcon />
				</S.NavigationFlexBox>

				<S.NavigationSocials>
					<LogoIcon width={170} height={80} />
					<S.NavigationBoxSocialsContact>
						{data.map(social => (
							<S.NavigationSocialsBoxIcons key={social.id}>
								<social.icon width={27} height={27} />
							</S.NavigationSocialsBoxIcons>
						))}
					</S.NavigationBoxSocialsContact>
				</S.NavigationSocials>
			</S.NavigationBoxMain>
		</S.NavigationContainer>
	)
}
