import { Card } from "components/Card"
import { ArrowDownRightIcon, CursorLeftDownIcon, CursorRightDownIcon, IntersectIcon } from "config/icons/icons"
import * as S from "./style"

export const Campaign = () => {
	const data = [
		{
			id: 1,
			title: "Achieve Goals",
			description: "Setting goals is like creating a roadmap to our dreams. They give us direction and purpose",
		},
		{
			id: 2,
			title: "Campaign Manage",
			description: " Set clear and measurable objectives for your campaign. Know what you want to achieve.",
		},
		{
			id: 3,
			title: "Brand Development",
			description:
				"We build a strong personal brand identity with consistent writing style, visual appearance, and values.",
		},
	]

	return (
		<S.CampaignContainer>
			<S.CampaignWrapper />
			<h1>Improve your Business</h1>
			<S.CampaignBoxDescription>
				<ArrowDownRightIcon width={70} />
				<S.CampaignDescription>
					Improve the Quality of your Business and Feel the Benefits with Us
				</S.CampaignDescription>
			</S.CampaignBoxDescription>

			<S.CampaignCardContainer>
				<S.CampaignWrapperLine>
					<S.CampaignRectangleLine />
					<S.CampaignButtonLine>view more</S.CampaignButtonLine>
				</S.CampaignWrapperLine>
				<S.CampaingBoxCircle>
					<S.CampaignCircle />
					<S.CampaignCircle style={{ marginLeft: "-1.5rem" }}>
						<S.CampaignBifurcation>
							<IntersectIcon width={200} height={100} style={{ position: "relative" }} />
							<CursorRightDownIcon width={13} style={{ position: "absolute", top: "30%" }} />
							<CursorLeftDownIcon width={13} style={{ position: "absolute", top: "50%" }} />
						</S.CampaignBifurcation>
					</S.CampaignCircle>
				</S.CampaingBoxCircle>
				{data.length &&
					data.map(item => (
						<Card
							key={item.id}
							title={item.title}
							description={item.description}
							style={{ marginRight: ".7rem", placeSelf: "end" }}
						/>
					))}
			</S.CampaignCardContainer>
		</S.CampaignContainer>
	)
}
