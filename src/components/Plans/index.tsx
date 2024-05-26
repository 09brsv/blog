import { Button } from "components/Button"
import { Card } from "components/Card"
import { Check } from "components/Check"
import { LineSpan } from "components/LineSpan"
import * as S from "./style"

export const Plans = () => {
	const data = [
		{
			id: 1,
			title: "Basic",
			price: 56,
			items: ["Singel Post Package", "Story Package", "Collaboration Package"],
		},
		{
			id: 2,
			title: "Basic",
			price: 120,
			items: ["6 Post Package", "Story Package", "Collaboration Package", "Free Second Week"],
		},
		{
			id: 3,
			title: "Basic",
			price: 56,
			items: ["12 Post Package", "12 Story Package", "Collaboration Package", "Free Second Week"],
		},
	]
	let bgColor = ""
	let textColor = ""
	let borderColor = ""

	const setStyleButton = (index: number) => {
		if (index === 1) {
			bgColor = "var(--blue-bg-dark)"
			textColor = "var(--white)"
			borderColor = "var(--white)"
		} else {
			bgColor = "var(--white)"
			textColor = "var(--secondary-text)"
			borderColor = "var(--blue-bg-dark)"
		}
	}

	return (
		<S.PlansContainer>
			<h1>Choose a Package According to Your Needs</h1>
			<S.PlansCardContainer>
				{data.map((plan, index) => {
					setStyleButton(index)
					return (
						<S.PlansCardBox key={plan.id}>
							<Card
								title={plan.title}
								style={{ border: "3px solid var(--blue-bg-dark)" }}
								className={index === 1 ? "second-card" : ""}>
								<S.PlansBoxItems>
									{plan.items.map((item, idx) => (
										<S.PlansItem key={idx}>
											<Check fill={index === 1 ? "var(--white)" : "var(--blue-bg-light)"} />
											<small />
											<span>{item}</span>
										</S.PlansItem>
									))}
								</S.PlansBoxItems>
								<LineSpan bgColor="var(--border)" width="60%" />
								<S.PlansPrice>
									{Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(
										plan.price,
									)}
								</S.PlansPrice>
							</Card>
							<Button bgColor={bgColor} textColor={textColor} borderColor={borderColor}>
								get now
							</Button>
						</S.PlansCardBox>
					)
				})}
			</S.PlansCardContainer>
		</S.PlansContainer>
	)
}
