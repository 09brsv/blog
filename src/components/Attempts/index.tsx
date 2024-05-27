import * as S from "./style"

export const Attempts = () => {
	const customersFormat = (value: number) => {
		if (value >= 1000) {
			return `${value / 1000}k`
		}
		if (value >= 1000000) {
			return `${value / 1000000}m`
		}
		if (value >= 1000000000) {
			return `${value / 1000000000}b`
		}
		return value
	}

	return (
		<S.AttemptsContainer>
			<S.AttemptsBox>
				<S.AttemptsQuantity>
					35.2 <S.AttemptsOperator>+</S.AttemptsOperator>
				</S.AttemptsQuantity>
				<S.AttemptsDescription>Reviews</S.AttemptsDescription>
			</S.AttemptsBox>
			<S.AttemptsBox>
				<S.AttemptsQuantity>
					{customersFormat(20000)} <S.AttemptsOperator>+</S.AttemptsOperator>
				</S.AttemptsQuantity>
				<S.AttemptsDescription>Customers</S.AttemptsDescription>
			</S.AttemptsBox>
			<S.AttemptsBox>
				<S.AttemptsQuantity>
					89 <S.AttemptsOperator>%</S.AttemptsOperator>
				</S.AttemptsQuantity>
				<S.AttemptsDescription>Agency Rate</S.AttemptsDescription>
			</S.AttemptsBox>
			<S.AttemptsBox>
				<S.AttemptsQuantity>2016</S.AttemptsQuantity>
				<S.AttemptsDescription>Begin on</S.AttemptsDescription>
			</S.AttemptsBox>
		</S.AttemptsContainer>
	)
}
