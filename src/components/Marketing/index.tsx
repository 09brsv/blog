import { Check } from "components/Check"
import { LineSpan } from "components/LineSpan"
import { VlogList } from "components/VlogList"
import { ArrowDownLeftIcon } from "config/icons/icons"
import * as S from "./style"

export const Marketing = () => {
	return (
		<S.MarketingContainer>
			<h1>THE GREAT WORK</h1>
			<S.MarketingTextWrapper>
				<S.MarketingText>
					Collaborating with our agency is an effective marketing strategy to achieve goals.
				</S.MarketingText>
				<ArrowDownLeftIcon />
			</S.MarketingTextWrapper>
			<LineSpan bgColor="var(--white)" width="200px" />
			<VlogList />
			<S.MarketingDescriptionContainer>
				<S.MarketingDescriptionWrapper>
					<S.MarketingDescriptionIconContainer>
						<span style={{ backgroundColor: "var(--blue-bg-dark)", height: "2px", width: "1rem" }} />
						<Check fill="var(--blue-bg-dark)" textColor="var(--white)" size={23} />
					</S.MarketingDescriptionIconContainer>
					<S.MarketingDescriptionText>
						Our agency has been in the business for over 10 years. We have a team of professional and friendly people
						who are always ready to help you.
					</S.MarketingDescriptionText>
				</S.MarketingDescriptionWrapper>
				<S.MarketingDescriptionWrapper>
					<S.MarketingDescriptionIconContainer>
						<span style={{ backgroundColor: "var(--blue-bg-dark)", height: "2px", width: "1rem" }} />
						<Check fill="var(--blue-bg-dark)" textColor="var(--white)" size={23} />
					</S.MarketingDescriptionIconContainer>
					<S.MarketingDescriptionText>
						Our agency has been in the business for over 10 years. We have a team of professional and friendly people
						who are always ready to help you.
					</S.MarketingDescriptionText>
				</S.MarketingDescriptionWrapper>
			</S.MarketingDescriptionContainer>
		</S.MarketingContainer>
	)
}
