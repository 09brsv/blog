import { Check } from "components/Check"
import { OvalCircle } from "components/OvalCircle"
import { CurvedArrowRightDownIcon } from "config/icons/icons"
import * as S from "./style"

export const Advantages = ({ text, radius }: { text: string; radius: number }) => {
	const textArray = text.split("")
	const listAdvantages = ["trusted", "actual", "professional", "actual"]
	return (
		<S.AdvantagesContainer>
			<S.AdvantagesCircularTextContainer style={{ width: radius * 1.2, height: radius * 2 }}>
				{textArray.map((letter, index) => (
					<S.AdvantagesCircularText
						key={letter}
						style={{ "--i": index, "--total": textArray.length, "--radius": `${radius}px` } as React.CSSProperties}>
						{letter}
					</S.AdvantagesCircularText>
				))}
				<OvalCircle rotate={-45} />
				<S.AdvantagesWrapperArrow>
					<CurvedArrowRightDownIcon width={55} />
				</S.AdvantagesWrapperArrow>
				<S.AdvantagesWrapper>
					<S.AdvantagesWrapperList>
						{listAdvantages.map((item, index) => (
							<S.AdvantagesWrapperListItem key={index}>
								<Check fill="white" textColor="black" />
								<span>{item}</span>
							</S.AdvantagesWrapperListItem>
						))}
					</S.AdvantagesWrapperList>
				</S.AdvantagesWrapper>
			</S.AdvantagesCircularTextContainer>
		</S.AdvantagesContainer>
	)
}
