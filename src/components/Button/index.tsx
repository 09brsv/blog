import { ButtonHTMLAttributes, ReactNode } from "react"
import * as S from "./style"

type TButton = {
	children: ReactNode
	style?: React.CSSProperties
	className?: string
	bgcolor?: string
	textcolor?: string
	bordercolor?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, bgcolor, textcolor, bordercolor, style, className, ...props }: TButton) => {
	return (
		<S.Button
			className={className}
			style={style}
			bgcolor={bgcolor}
			textcolor={textcolor}
			bordercolor={bordercolor}
			{...props}>
			{children}
		</S.Button>
	)
}
