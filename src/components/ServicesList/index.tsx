import { CaretDown } from "@phosphor-icons/react"
import { getServicesList } from "actions"
import { LineSpan } from "components/LineSpan"
import { LogoIcon } from "config/icons/icons"
import { useResizeObserver } from "hooks/useResizeObserver"
import { useEffect, useState } from "react"
import { dataSocialsNetwork } from "utils/social-networks"
import * as S from "./style"

export const ServicesList = () => {
	const [toggleItem, setToggleItem] = useState({ id: 1, opened: true })
	const [services, setServices] = useState<{ id: number; title: string; items: string[] }[]>([])
	const [fadeIn, setFadeIn] = useState(true)
	const [isMobile, setIsMobile] = useState(window.screen.width >= 900)

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

	const handleResize = () => {
		if (window.screen.width >= 900) {
			setIsMobile(window.innerWidth >= 900)
		} else {
			setIsMobile(window.screen.width >= 900)
		}
	}

	// Usa o hook useResizeObserver para monitorar o redimensionamento do DOM
	useResizeObserver(handleResize)

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await getServicesList()
				setServices(data)
			} catch (error) {
				window.alert(error)
			}
		}
		getData()
	}, [])

	return (
		<S.ServicesListContainer>
			<S.ServicesSocialNetworks>
				<LogoIcon className="logo-icon" width={170} height={80} />
				<S.ServicesBoxSocialsContact>
					{dataSocialsNetwork.map(social => (
						<S.ServicesSocialsBoxIcons key={social.id} className="social-box-icon">
							<social.icon width={27} height={27} />
						</S.ServicesSocialsBoxIcons>
					))}
				</S.ServicesBoxSocialsContact>
			</S.ServicesSocialNetworks>

			{services.length &&
				services.map((service, idx) => (
					<S.ServicesListWrapper key={service.id}>
						<S.ServicesButton
							onClick={e => handleClick(service.id, e)}
							style={{
								borderRadius: idx === 0 ? "1rem 0 0 1rem" : idx === services.length - 1 ? "0 1rem 1rem 0" : "0",
							}}>
							{service.title}
							{!isMobile && (
								<CaretDown
									size={20}
									color="var(--white)"
									weight="bold"
									style={{
										transform: toggleItem.id === service.id ? "rotate(180deg)" : "rotate(0deg)",
										transition: "transform .3s ease-out",
									}}
								/>
							)}
						</S.ServicesButton>
						{((service.id === toggleItem.id && toggleItem.opened) || isMobile) && (
							<S.ServicesListBox closed={fadeIn || !isMobile ? "" : "closed"}>
								<LineSpan bgcolor="var(--line-blue)" width="3px" height="6rem" direction="column" />
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
