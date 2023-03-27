import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import Paragraph from "./Elements/Paragraph";
import {fadeInUp} from "../animations/animations";

interface IProps {
	title: string;
	paragraph: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

const TextImageThree: FC<IProps> = ({title, image, paragraph}) => {
	return (
		<section className="">
			<div className="flex flex-col items-center justify-center gap-y-8 lg:flex-row gap-x-16 xl:gap-x-24">
				<div className="flex flex-col items-center justify-center w-full py-10 sm:py-16 lg:py-24 lg:w-1/2">
					<div className="container w-full px-4 mx-auto lg:max-w-2xl">
						<motion.h2
							variants={fadeInUp}
							className="mt-10 text-3xl font-bold leading-tight text-center lg:text-left text-goldPrime sm:text-4xl lg:text-5xl lg:leading-tight"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="mt-4 py-8 text-white text-center leading-relaxed sm:text-left text-medium"
						/>
					</div>
				</div>
				<div className="flex flex-col w-full lg:flex-row lg:w-1/2">
					<Image
						alt={image?.altText}
						src={image?.sourceUrl}
						width={image?.mediaDetails?.width}
						height={image?.mediaDetails?.height}
						className="object-cover object-center w-full h-full lg:min-h-[450px] max-h-[650px]"
					/>
				</div>
			</div>
		</section>
	);
};

export default TextImageThree;
