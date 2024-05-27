import * as S from "./style"

type TCardProps = {
	title: string
	description?: string
	style?: React.CSSProperties
	className?: string
	children?: React.ReactNode
}

export const Card = ({ title, description, style, className, children }: TCardProps) => {
	return (
		<S.Card style={style} className={className}>
			<S.CardTitle>{title}</S.CardTitle>
			{description ? <S.CardDescription>{description}</S.CardDescription> : children}
		</S.Card>
	)
}
