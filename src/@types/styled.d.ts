import "styled-components"

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			primaryText: "#607387"
			secondaryText: "#2D264B"
			blueBgLight: "#66B2C2"
			blueBgDark: "#344455"
			bgCircle: "#D9D9D9"
			titleText: "#344455"
			border: "#9EB5CF"
			white: "#FFFFFF"
			black: "#000000"
			dark: "#282526"
		}
		fonts: {
			roboto: "Roboto"
			rammettoOne: "RammettoOne"
		}
		paddings: {
			container: "15px"
			pageTop: "30px"
		}
		margins: {
			pageTop: "30px"
		}
	}
}
