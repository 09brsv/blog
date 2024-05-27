import { CSSProperties } from "react"
import * as S from "./style"

export const OvalCircle = ({ rotate, style }: { rotate?: number; style?: CSSProperties }) => {
	return <S.OvalCircle rotate={rotate} style={style} />
}
