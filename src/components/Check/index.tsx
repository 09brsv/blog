import * as S from "./style"

export const Check = ({ fill, textcolor, size }: { fill?: string; textcolor?: string; size?: number }) => {
	return <S.Check fill={fill} color={textcolor} weight="fill" size={size} />
}
