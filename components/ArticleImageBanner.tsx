import {FC} from "react";
import Link from "next/link";
import {IArticleImageBanner} from "./types";

// Components
import Paragraph from "./Elements/Paragraph";

const ArticleImageBanner: FC<IArticleImageBanner> = ({
	title,
	paragraph,
	buttonLink,
	backgroundImage,
}) => {
	return (
		<section
			className="px-4 overflow-hidden bg-center bg-no-repeat bg-cover xl:bg-fixed bg-green-dark py-28"
			style={{
				backgroundImage: `url('${backgroundImage}')`,
			}}
		>
			<div className="container px-0 mx-auto">
				<div
					className="px-6 pt-12 rounded-lg sm:px-12 bg-green-dark pb-9 md:max-w-xl bg-opacity-80"
					style={{backdropFilter: "blur(10px)"}}
				>
					<h2 className="mb-8 text-4xl font-semibold leading-tight text-white 2xl:text-5xl">
						{title}
					</h2>
					<Paragraph
						content={paragraph}
						tailwindStyling="text-base leading-normal text-white my-11"
					/>
					<Link
						href={buttonLink?.url}
						target={buttonLink?.target}
						className="inline-flex flex-wrap items-center text-white hover:text-green-bright"
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
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
						</svg>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ArticleImageBanner;
