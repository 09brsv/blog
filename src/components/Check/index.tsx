import * as S from "./style"

export const Check = ({ fill, textColor, size }: { fill?: string; textColor?: string; size?: number }) => {
	return <S.Check fill={fill} color={textColor} weight="fill" size={size} />
}
