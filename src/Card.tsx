export default function Card({
	title,
	description,
	color,
	iconURL,
}: {
	title: string;
	description: string;
	color: string;
	iconURL: string;
}) {
	return (
		<article className="relative h-[250px] w-fit rounded-lg bg-white p-8 shadow-2xl">
			<div
				className={`${color} absolute -top-0 right-0 left-0 h-1 w-full rounded-t-lg`}
			></div>
			<section className="relative w-[250px]">
				<h1 className="text-preset-3 text-grey-500">{title}</h1>
				<p className="text-preset-5 text-grey-400 mt-[6px]">{description}</p>
			</section>
			<img
				src={iconURL}
				alt={`${title} icon`}
				width="64px"
				height="64px"
				className="mt-8 ml-auto"
			/>
		</article>
	);
}
