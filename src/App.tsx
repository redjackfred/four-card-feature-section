import "./App.css";
import Header from "./Header";
import Card from "./Card";
import IconSupervisor from "./assets/images/icon-supervisor.svg";
import IconTeamBuilder from "./assets/images/icon-team-builder.svg";
import IconKarma from "./assets/images/icon-karma.svg";
import IconCalculator from "./assets/images/icon-calculator.svg";

function App() {
	const cards = [
		{
			title: "Supervisor",
			description: "Monitors activity to identify project roadblocks",
			color: "bg-cyan",
			iconURL: IconSupervisor,
		},
		{
			title: "Team Builder",
			description:
				"Scans our talent network to create the optimal team for your project",
			color: "bg-red",
			iconURL: IconTeamBuilder,
		},
		{
			title: "Karma",
			description: "Regularly evaluates our talent to ensure quality",
			color: "bg-orange",
			iconURL: IconKarma,
		},
		{
			title: "Calculator",
			description:
				"Uses data from past projects to provide better delivery estimates",
			color: "bg-blue",
			iconURL: IconCalculator,
		},
	];
	return (
		<main className="mx-auto mt-14 mb-[46px] flex flex-col items-center md:mt-20 md:mb-[80px] xl:mt-[102px]">
			<Header />
			<section className="mt-[60px] flex flex-col items-center justify-center gap-8 md:mt-[74px] xl:flex-row">
				<Card
					title={cards[0].title}
					description={cards[0].description}
					color={cards[0].color}
					iconURL={cards[0].iconURL}
				/>
				<div className="flex flex-col gap-8 md:flex-row xl:flex-col">
					<Card
						title={cards[1].title}
						description={cards[1].description}
						color={cards[1].color}
						iconURL={cards[1].iconURL}
					/>
					<Card
						title={cards[2].title}
						description={cards[2].description}
						color={cards[2].color}
						iconURL={cards[2].iconURL}
					/>
				</div>
				<Card
					title={cards[3].title}
					description={cards[3].description}
					color={cards[3].color}
					iconURL={cards[3].iconURL}
				/>
			</section>
		</main>
	);
}

export default App;
