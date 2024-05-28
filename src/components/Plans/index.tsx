import { getPlansList } from "actions"
import { Button } from "components/Button"
import { Card } from "components/Card"
import { Check } from "components/Check"
import { LineSpan } from "components/LineSpan"
import { useEffect, useState } from "react"
import * as S from "./style"

export const Plans = () => {
	const [plansList, setPlansList] = useState<{ id: number; title: string; price: number; items: string[] }[]>([])

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await getPlansList()
				setPlansList(data)
			} catch (error) {
				window.alert(error)
			}
		}

		getData()
	}, [])

	let bgcolor = ""
	let textcolor = ""
	let bordercolor = ""

	const setStyleButton = (index: number) => {
		if (index === 1) {
			bgcolor = "var(--blue-bg-dark)"
			textcolor = "var(--white)"
			bordercolor = "var(--white)"
		} else {
			bgcolor = "var(--white)"
			textcolor = "var(--secondary-text)"
			bordercolor = "var(--blue-bg-dark)"
		}
	}

	return (
		<S.PlansContainer>
			<S.PlansBoxIconOnlySmall>
				<S.PlansRectangleSmallLeft />
				<h1 style={{ padding: "0 1.5rem" }}>Choose a Package According to Your Needs</h1>
				<S.PlansRectangleSmallLeft />
			</S.PlansBoxIconOnlySmall>
			<S.PlansCardContainer>
				{plansList.length &&
					plansList.map((plan, index) => {
						setStyleButton(index)
						return (
							<S.PlansCardBox key={plan.id}>
								<Card
									title={plan.title}
									style={{ border: "3px solid var(--blue-bg-dark)", position: "relative" }}
									className={index === 1 ? "second-card" : ""}>
									<S.PlansBoxItems>
										{plan.items.map((item, idx) => (
											<S.PlansItem key={idx}>
												<Check fill={index === 1 ? "var(--white)" : "var(--blue-bg-light)"} size={20} />
												<small />
												<span style={{ marginLeft: ".5rem" }}>{item}</span>
											</S.PlansItem>
										))}
									</S.PlansBoxItems>
									<S.PlansPrice>
										<LineSpan bgcolor="var(--border)" width="60%" />
										{Intl.NumberFormat("en-US", {
											style: "currency",
											currency: "USD",
											maximumFractionDigits: 0,
										}).format(plan.price)}
									</S.PlansPrice>
								</Card>
								<Button bgcolor={bgcolor} textcolor={textcolor} bordercolor={bordercolor}>
									get now
								</Button>
							</S.PlansCardBox>
						)
					})}
			</S.PlansCardContainer>
		</S.PlansContainer>
	)
}
