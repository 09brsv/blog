import { CaretDown } from "@phosphor-icons/react"
import { LineSpan } from "components/LineSpan"
import { useEffect, useState } from "react"
import * as S from "./style"

export const ServicesList = () => {
	const [toggleItem, setToggleItem] = useState({ id: 1, opened: true })
	const [services, setServices] = useState<{ id: number; title: string; items: string[] }[]>([])
	const [fadeIn, setFadeIn] = useState(true)

	const handleClick = (id: number, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault()

		if (toggleItem.id !== id && toggleItem.opened) {
		} else setFadeIn(!toggleItem.opened)

		setTimeout(() => {
			if (toggleItem.id === id && toggleItem.opened) {
				setToggleItem({ id: -1, opened: false })
			} else {
				setToggleItem({ id, opened: true })
				if (!fadeIn) setFadeIn(true)
			}
		}, 300)
	}

	useEffect(() => {
		const data = [
			{
				id: 1,
				title: "Influencers",
				items: ["Content", "About Inluencers", "Performance", "Work"],
			},
			{
				id: 2,
				title: "Service",
				items: ["Upgrade Rate", "Copy Writing", "Vlogging", "Publishing"],
			},
			{
				id: 3,
				title: "Community",
				items: ["Influencers Form", "Sharing Session", "Meet & Greet"],
			},
			{
				id: 4,
				title: "About",
				items: ["Work on", "Profile", "Privacy"],
			},
		]

		setServices(data)
	}, [])

	return (
		<S.ServicesListContainer>
			{services.length &&
				services.map(service => (
					<S.ServicesListWrapper key={service.id}>
						<S.ServicesButton onClick={e => handleClick(service.id, e)}>
							{service.title}
							<CaretDown
								size={20}
								color="var(--white)"
								weight="bold"
								style={{
									transform: toggleItem.id === service.id ? "rotate(180deg)" : "rotate(0deg)",
									transition: "transform .3s ease-out",
								}}
							/>
						</S.ServicesButton>
						{service.id === toggleItem.id && toggleItem.opened && (
							<S.ServicesListBox closed={fadeIn ? "" : "closed"}>
								<LineSpan bgColor="var(--line-blue)" width="3px" height="6rem" direction="column" />
								<S.ServicesListItemWrapper>
									{service.items.map(item => (
										<S.ServicesListItem key={item}>{item}</S.ServicesListItem>
									))}
								</S.ServicesListItemWrapper>
							</S.ServicesListBox>
						)}
					</S.ServicesListWrapper>
				))}
		</S.ServicesListContainer>
	)
}
