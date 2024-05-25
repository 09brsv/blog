import * as S from "./style"

export const Check = ({ fill, textColor }: { fill?: string; textColor?: string }) => {
	return <S.Check fill={fill} color={textColor} weight="fill" />
}
