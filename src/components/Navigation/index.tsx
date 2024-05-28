import { Button } from "components/Button"
import { LineSpan } from "components/LineSpan"
import { OvalCircle } from "components/OvalCircle"
import { ArrowLargeRightIcon, ArrowRightIcon, HorizontalRectangleIcon } from "config/icons/icons"
import * as S from "./style"

export const Navigation = () => {
	return (
		<S.NavigationContainer>
			<S.NavigationBoxDescription>
				<S.NavigationWrapper>
					<S.NavigationTitle>We are Prioritizes Mutual Development</S.NavigationTitle>
					<S.NavigationBoxText>
						<p style={{ letterSpacing: ".3px" }}>Let's build and succeed together with the services we provide</p>
						<LineSpan className="column" width="2px" bgcolor="var(--line-blue)" height="5rem" />
						<LineSpan className="row" width="6rem" bgcolor="var(--line-blue)" />
						<Button>contact us</Button>
					</S.NavigationBoxText>
				</S.NavigationWrapper>
				<S.NavigationBoxContact>
					<S.NavigationCircle>
						<OvalCircle style={{ border: "5px solid var(--white)" }} />
					</S.NavigationCircle>
					<S.NavigationArrowMediumDownLeft />
					<S.NavigationArrowMediumRightDownRight />
					<Button>contact us</Button>
				</S.NavigationBoxContact>
			</S.NavigationBoxDescription>
			<S.NavigationBoxMain>
				<S.NavigationFlexBox>
					<ArrowLargeRightIcon className="icon-arrow-large" />
					<ArrowRightIcon className="icon-arrow" width={250} />
					<HorizontalRectangleIcon />
				</S.NavigationFlexBox>
			</S.NavigationBoxMain>
		</S.NavigationContainer>
	)
}
