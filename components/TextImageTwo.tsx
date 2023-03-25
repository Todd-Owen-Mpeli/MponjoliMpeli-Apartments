import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import Paragraph from "./Elements/Paragraph";
import {fadeInUp, fadeIn} from "../animations/animations";

interface IProps {
	title: string;
	paragraph: string;
	imageText: string;
	imageTextTwo: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

const TextImageTwo: FC<IProps> = ({
	title,
	image,
	paragraph,
	imageText,
	imageTextTwo,
}) => {
	return (
		<section className="py-10 sm:py-16 lg:py-24">
			<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
				<div className="flex flex-col-reverse items-center justify-center gap-y-8 lg:flex-row gap-x-16 xl:gap-x-24">
					<div className="relative mb-12 w-full lg:w-1/2">
						<Image
							alt={image?.altText}
							src={image?.sourceUrl}
							width={image?.mediaDetails?.width}
							height={image?.mediaDetails?.height}
							className="w-full rounded-none"
						/>

						<div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
							<div className="overflow-hidden bg-white rounded">
								<div className="px-10 py-6">
									<div className="flex items-center">
										<p className="text-3xl font-bold sm:text-4xl">
											{imageText}
										</p>
										<p className="pl-6 text-sm font-medium text-black sm:text-lg">
											{imageTextTwo}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="w-full lg:w-1/2">
						<div className="flex items-center mx-auto md:mx-0 justify-center w-16 h-16 bg-flatGreen rounded-full">
							<svg
								className="w-8 h-8 text-goldPrime"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg>
						</div>
						<h2 className="mt-10 text-3xl font-bold leading-tight text-goldPrime sm:text-4xl lg:text-5xl lg:leading-tight">
							{title}
						</h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="w-full lg:max-w-2xl mx-auto mt-4 py-8 text-white text-center leading-relaxed sm:text-left text-medium"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TextImageTwo;
