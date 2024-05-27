import { ButtonHTMLAttributes, ReactNode } from "react"
import * as S from "./style"

type TButton = {
	children: ReactNode
	style?: React.CSSProperties
	className?: string
	bgColor?: string
	textColor?: string
	borderColor?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, bgColor, textColor, borderColor, style, className, ...props }: TButton) => {
	return (
		<S.Button
			className={className}
			style={style}
			bgColor={bgColor}
			textColor={textColor}
			borderColor={borderColor}
			{...props}>
			{children}
		</S.Button>
	)
}
