import { Advantages, Attempts, Header, Presentation } from "components"
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
		</S.HomeContainer>
	)
}

export default Home
