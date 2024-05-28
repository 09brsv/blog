import * as S from "./style"

export const VlogList = ({ isInfiniteList }: { isInfiniteList?: boolean }) => {
	const response = ["Influence & Followers", "Wedding Party", "Business Rxpansin", "Publishing Business"]

	const data = isInfiniteList ? response.concat(response) : response.slice(0, 4)

	return (
		<S.VlogListContainer isInfiniteList={isInfiniteList}>
			<S.VlogFlatList>
				{data.map(item => (
					<S.VlogListItem selected={item === "Wedding Party" ? "true" : "false"} key={item}>
						{item}
					</S.VlogListItem>
				))}
			</S.VlogFlatList>
		</S.VlogListContainer>
	)
}
