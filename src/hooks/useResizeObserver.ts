import { useEffect } from "react"

export const useResizeObserver = (callback: () => void) => {
	useEffect(() => {
		const handleResize = () => {
			callback()
		}

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [callback])

	return callback
}
