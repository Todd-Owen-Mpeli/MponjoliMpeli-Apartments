import Image from "next/image";
import {FC} from "react";
import Paragraph from "./Elements/Paragraph";

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
			className={`py-16 bg-greenTwo bg-cover bg-center bg-no-repeat ${styles.sustainability}`}
		>
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-36">
					<div className="flex flex-col">
						<span className="mb-4 text-goldPrime text-base font-[400] uppercase tracking-[0.25rem]">
							{subtitle}
						</span>
						<h2 className="mb-8 text-3xl font-[400] leading-tight text-white sm:text-4xl lg:text-5xl">
							{title}
						</h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="text-medium text-white"
						/>
					</div>

					<div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
						<div className="relative">
							<Image
								alt={image?.altText}
								src={image?.sourceUrl}
								width={image?.mediaDetails?.width}
								height={image?.mediaDetails?.height}
								className="mx-auto object-cover object-center w-full lg:w-[700px] h-full min-h-[450px]"
							/>

							<div className="absolute bg-white -bottom-10 -left-16">
								<div className="px-8 py-10">
									<span className="block text-4xl font-bold text-black lg:text-5xl">
										{percentage}
									</span>
									<span className="block max-w-xs mt-2 text-base leading-tight text-black">
										{imageText}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Sustainability;