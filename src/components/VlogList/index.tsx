import { getVlogsList } from "actions"
import { useEffect, useState } from "react"
import * as S from "./style"

export const VlogList = ({ isinfinitelist }: { isinfinitelist?: boolean }) => {
	const [listVlogs, setListVlogs] = useState<string[]>([])

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await getVlogsList()
				setListVlogs(data)
			} catch (error) {
				window.alert(error)
			}
		}
		getData()
	}, [])

	if (!listVlogs) return null
	const data = isinfinitelist ? listVlogs.concat(listVlogs) : listVlogs.slice(0, 4)

	return (
		<S.VlogListContainer isinfinitelist={isinfinitelist === true}>
			<S.VlogFlatList>
				{data.map((item, idx) => (
					<S.VlogListItem selected={item === "Wedding Party"} key={idx}>
						{item}
					</S.VlogListItem>
				))}
			</S.VlogFlatList>
		</S.VlogListContainer>
	)
}
