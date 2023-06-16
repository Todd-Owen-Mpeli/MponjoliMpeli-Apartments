import {FC} from "react";
import Image from "next/image";
import {ITextImage} from "./types";
import {motion} from "framer-motion";
import {fadeInUp, initial} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

const TextImage: FC<ITextImage> = ({
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
					<div className="relative w-full mb-12 lg:w-1/2">
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
						<div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full lg:mx-0 bg-green-flat">
							<svg
								className="w-8 h-8 text-goldPrime"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg>
						</div>
						<motion.h2
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="mt-10 text-3xl font-bold leading-tight text-center lg:text-left text-goldPrime sm:text-4xl lg:text-5xl lg:leading-tight"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="w-full lg:max-w-2xl mx-auto mt-4 py-8 text-white text-center leading-relaxed sm:text-left text-base"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TextImage;
