import {
	Advantages,
	Attempts,
	Campaign,
	Contact,
	Footer,
	Header,
	Marketing,
	Navigation,
	Plans,
	Presentation,
	ServicesList,
} from "components"
import * as S from "./style"

const Home = () => {
	return (
		<S.HomeContainer>
			<Header />
			<main>
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
				<section>
					<Campaign />
					<Contact />
					<Plans />
				</section>
				<section>
					<Navigation />
					<ServicesList />
				</section>
			</main>
			<S.HomeLine />
			<Footer />
		</S.HomeContainer>
	)
}

export default Home
