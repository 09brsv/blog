import { Check } from "components/Check"
import { LineSpan } from "components/LineSpan"
import { VlogList } from "components/VlogList"
import { ArrowDownLeftIcon, ArrowMediumRightDownIcon, RectangleMediumLeftIcon } from "config/icons/icons"
import * as S from "./style"

export const Marketing = () => {
	return (
		<S.MarketingWrapper>
			<S.MarketingContainer>
				<S.MarketingTitle>THE GREAT WORK</S.MarketingTitle>
				<S.MarketingTextWrapper>
					<S.MarketingText className="smallScreenOnly">
						Collaborating with our agency is an effective marketing strategy to achieve goals.
					</S.MarketingText>
					<S.MarketingBoxLine>
						<ArrowDownLeftIcon />
					</S.MarketingBoxLine>
				</S.MarketingTextWrapper>
				<S.MarketingBoxLine>
					<LineSpan bgcolor="var(--white)" width="200px" />
				</S.MarketingBoxLine>
				<VlogList />
				<VlogList isinfinitelist />
				<S.MarketingDescriptionContainer>
					<S.MarketingDescriptionWrapper>
						<S.MarketingDescriptionIconContainer>
							<span style={{ backgroundColor: "var(--blue-bg-dark)", height: "2px", width: "1rem" }} />
							<Check fill="var(--blue-bg-dark)" textcolor="var(--white)" size={23} />
						</S.MarketingDescriptionIconContainer>
						<S.MarketingDescriptionText>
							Our agency has been in the business for over 10 years. We have a team of professional and friendly people
							who are always ready to help you.
						</S.MarketingDescriptionText>
					</S.MarketingDescriptionWrapper>
					<S.MarketingDescriptionWrapper>
						<S.MarketingDescriptionIconContainer>
							<span style={{ backgroundColor: "var(--blue-bg-dark)", height: "2px", width: "1rem" }} />
							<Check fill="var(--blue-bg-dark)" textcolor="var(--white)" size={23} />
						</S.MarketingDescriptionIconContainer>
						<S.MarketingDescriptionText>
							Every precious moment will be captured by our professional photographers and videographers.
						</S.MarketingDescriptionText>
					</S.MarketingDescriptionWrapper>
				</S.MarketingDescriptionContainer>
			</S.MarketingContainer>
			<S.MarketingBoxScreenMedium>
				<ArrowMediumRightDownIcon
					width={240}
					height={200}
					style={{ position: "absolute", top: "-32%", right: "70%" }}
				/>
				<RectangleMediumLeftIcon width={60} height={60} style={{ position: "absolute", top: "-16%", right: "30%" }} />
				<LineSpan bgcolor="var(--white)" width="2px" height="100px" direction="column" />
				<S.MarketingText>
					Collaborating with our agency is an effective marketing strategy to achieve goals.
				</S.MarketingText>
			</S.MarketingBoxScreenMedium>
		</S.MarketingWrapper>
	)
}
