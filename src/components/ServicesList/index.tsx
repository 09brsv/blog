import { CaretDown } from "@phosphor-icons/react"
import { LineSpan } from "components/LineSpan"
import { InstagramIcon, LinkedinIcon, LogoIcon, TwitterIcon } from "config/icons/icons"
import { useEffect, useState } from "react"
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

	const useResizeObserver = (callback: () => void) => {
		useEffect(() => {
			const handleResize = () => {
				callback()
			}

			window.addEventListener("resize", handleResize)

			return () => {
				window.removeEventListener("resize", handleResize)
			}
		}, [callback])

		return callback
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

	const dataSocialsNetwork = [
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
