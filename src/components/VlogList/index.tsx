import * as S from "./style"

export const VlogList = () => {
	const data = ["Influence & Followers", "Wedding Party", "Business Rxpansin", "Publishing Business"]

	return (
		<S.VlogListContainer>
			<S.VlogFlatList>
				{data.concat(data).map(item => (
					<S.VlogListItem selected={item === "Wedding Party" ? "true" : "false"} key={item}>
						{item}
					</S.VlogListItem>
				))}
			</S.VlogFlatList>
		</S.VlogListContainer>
	)
}
