import * as S from "./style"

type TButton = {
	children: string
	style?: React.CSSProperties
	bgColor?: string
	textColor?: string
	borderColor?: string
}

export const Button = ({ children, bgColor, textColor, borderColor, style }: TButton) => {
	return (
		<S.Button style={style} bgColor={bgColor} textColor={textColor} borderColor={borderColor}>
			{children}
		</S.Button>
	)
}
