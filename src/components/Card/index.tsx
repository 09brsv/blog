import * as S from "./style"

type TCardProps = {
	title: string
	description: string
}

export const Card = ({ title, description }: TCardProps) => {
	return (
		<S.Card>
			<S.CardTitle>{title}</S.CardTitle>
			<S.CardDescription>{description}</S.CardDescription>
		</S.Card>
	)
}
