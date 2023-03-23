import {FC} from "react";
import Link from "next/link";
import Paragraph from "./Elements/Paragraph";

interface IProps {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
}

const ArticleImageBanner: FC<IProps> = ({
	title,
	paragraph,
	buttonLink,
	backgroundImage,
}) => {
	return (
		<section
			className="overflow-hidden bg-fixed bg-black bg-center bg-no-repeat bg-cover py-28"
			style={{
				backgroundImage: `url('${backgroundImage}')`,
			}}
		>
			<div className="container px-4 mx-auto">
				<div
					className="px-12 pt-12 rounded-lg bg-darkGreen pb-9 md:max-w-xl bg-opacity-80"
					style={{backdropFilter: "blur(10px)"}}
				>
					<h2 className="mb-8 text-4xl font-medium leading-tight text-white 2xl:text-5xl">
						{title}
					</h2>
					<Paragraph
						content={paragraph}
						tailwindStyling="text-medium leading-normal text-white my-11"
					/>
					<Link
						href={buttonLink?.url}
						target={buttonLink?.target}
						className="inline-flex flex-wrap items-center text-white hover:text-darkGrey"
					>
						<span className="mr-2 font-semibold leading-normal tracking-wider">
							{buttonLink?.title}
						</span>
						<svg
							width="19"
							height="18"
							viewBox="0 0 19 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M11 3.75L16.25 9M16.25 9L11 14.25M16.25 9L2.75 9"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
						</svg>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ArticleImageBanner;
