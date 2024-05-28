import { getCampaignsList } from "actions"
import { Card } from "components/Card"
import { ArrowDownRightIcon, CursorLeftDownIcon, CursorRightDownIcon, IntersectIcon } from "config/icons/icons"
import { useEffect, useState } from "react"
import * as S from "./style"

export const Campaign = () => {
	const [campaignsList, setCampaignsList] = useState<{ id: number; title: string; description: string }[]>([])

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await getCampaignsList()
				setCampaignsList(data)
			} catch (error) {
				window.alert(error)
			}
		}

		getData()
	}, [])

	return (
		<S.CampaignContainer>
			<S.CampaignWrapper />
			<h1 style={{ textAlign: "left", margin: 0 }}>Improve your Business</h1>
			<S.CampaignBoxDescription>
				<ArrowDownRightIcon width={70} />
				<S.CampaignDescription>
					Improve the Quality of your Business and Feel the Benefits with Us
				</S.CampaignDescription>
			</S.CampaignBoxDescription>

			<S.CampaignCardContainer>
				<S.CampaignWrapperLine>
					<S.CampaignRectangleLine />
				</S.CampaignWrapperLine>
				<S.CampaignButtonLine>view more</S.CampaignButtonLine>
				<S.CampaingBoxCircle>
					<S.CampaignRectangleSmallRight width={100} />
					<S.CampaignCircle />
					<S.CampaignCircle style={{ marginLeft: "-1.5rem" }}>
						<S.CampaignBifurcation>
							<IntersectIcon width={200} height={100} style={{ position: "relative" }} />
							<CursorRightDownIcon width={13} style={{ position: "absolute", top: "30%" }} />
							<CursorLeftDownIcon width={13} style={{ position: "absolute", top: "50%" }} />
						</S.CampaignBifurcation>
					</S.CampaignCircle>
				</S.CampaingBoxCircle>
				<S.CampaignScreenMediumOnly>
					{campaignsList.length &&
						campaignsList.map(item => (
							<Card
								key={item.id}
								title={item.title}
								description={item.description}
								style={{ marginRight: ".7rem", placeSelf: "end" }}
							/>
						))}
				</S.CampaignScreenMediumOnly>
				<S.CampaignSmallScreenOnly>
					{campaignsList.length &&
						campaignsList.map(item => (
							<Card
								key={item.id}
								title={item.title}
								description={item.description}
								style={{ marginRight: ".7rem", placeSelf: "end" }}
							/>
						))}
				</S.CampaignSmallScreenOnly>
			</S.CampaignCardContainer>
		</S.CampaignContainer>
	)
}
