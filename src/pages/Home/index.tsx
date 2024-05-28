import {
	Advantages,
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
				<section className="section-presentation" id="home">
					<Presentation />
					<Advantages text="Our Advantages" radius={150} />
				</section>
				<section id="about">
					<Marketing />
				</section>
				<section id="services">
					<Campaign />
					<section id="contact">
						<Contact />
					</section>
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
