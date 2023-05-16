import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import Paragraph from "./Elements/Paragraph";
import {fadeIn, fadeInTwo} from "../animations/animations";

// Styling
import styles from "../styles/components/IntroSection.module.scss";

interface IProps {
	title: string;
	subtitle: string;
	paragraph: string;
	percentage: string;
	imageText: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

const Sustainability: FC<IProps> = ({
	title,
	subtitle,
	paragraph,
	percentage,
	imageText,
	image,
}) => {
	return (
		<section
			className={`py-16 bg-green-Two bg-cover bg-center bg-no-repeat ${styles.sustainability}`}
		>
			<div className="px-4 mx-auto max-w-7xl">
				<div className="grid items-center grid-cols-1 gap-y-6 lg:grid-cols-2 md:gap-x-36">
					<div className="flex flex-col px-4">
						<span className="mb-4 text-goldPrime text-base font-[400] uppercase tracking-[0.25rem]">
							{subtitle}
						</span>
						<motion.h2
							variants={fadeIn}
							className="mb-8 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="text-base text-white"
						/>
					</div>

					<div className="relative p-0 lg:pl-6 lg:px-0">
						<div className="relative">
							<Image
								alt={image?.altText}
								src={image?.sourceUrl}
								width={image?.mediaDetails?.width}
								height={image?.mediaDetails?.height}
								className="mx-auto object-cover object-center w-full lg:w-[700px] h-full max-h-[450px] lg:max-h-full min-h-[450px]"
							/>

							<motion.div
								variants={fadeInTwo}
								className="absolute bg-white -bottom-10 lg:-left-16"
							>
								<div className="px-8 py-10">
									<span className="block text-4xl font-bold text-black lg:text-5xl">
										{percentage}
									</span>
									<span className="block max-w-xs mt-2 text-base leading-tight text-black">
										{imageText}
									</span>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Sustainability;
