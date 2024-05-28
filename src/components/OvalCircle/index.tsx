import { CSSProperties } from "react"
import * as S from "./style"

export const OvalCircle = ({
	rotate,
	style,
	oneSizeShow,
}: { rotate?: number; style?: CSSProperties; oneSizeShow?: string }) => {
	return <S.OvalCircle rotate={rotate} style={style} oneSizeShow={oneSizeShow} />
}
