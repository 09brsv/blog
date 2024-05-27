import "styled-components"

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			primaryText: string
			secondaryText: string
			blueBgLight: string
			blueBgDark: string
			bgCircle: string
			titleText: string
			border: string
			borderDark: string
			white: string
			black: string
			dark: string
			spanColor: string
		}
		fonts: {
			roboto: "Roboto"
			rammettoOne: "RammettoOne"
		}
		paddings: {
			container: string
			pageTop: string
		}
		margins: {
			pageTop: string
		}
		radius: {
			circular: string
			container: string
		}
	}
}
