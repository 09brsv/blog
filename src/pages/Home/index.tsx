import { Advantages, Attempts, Header, Marketing, Presentation } from "components"
import * as S from "./style"

const Home = () => {
	return (
		<S.HomeContainer>
			<Header />
			<section>
				<div>
					<Presentation />
					<Attempts />
				</div>
				<Advantages text="Our Advantages" radius={150} />
			</section>
			<section>
				<Marketing />
			</section>
		</S.HomeContainer>
	)
}

export default Home
