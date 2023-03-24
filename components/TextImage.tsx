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
	imageTwo: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageLarge: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

const TextImage: FC<IProps> = ({
	title,
	image,
	imageTwo,
	paragraph,
	imageLarge,
}) => {
	return (
		<section
			className={`flex flex-col items-center lg:flex-row bg-darkGreen bg-cover bg-center bg-no-repeat`}
			style={{
				backgroundImage: `url("/svg/backgroundStackedWaves.svg")`,
			}}
		>
			<div className="flex flex-col items-center justify-center w-full px-4 py-20 lg:px-0 lg:w-1/2">
				<h2 className="text-white text-center w-fit mx-auto tracking-normal leading-[2.75rem] font-semibold text-8xl border-b-goldPrime border-b-2 pb-8 mb-12 lg:mb-20">
					Welcome
				</h2>
				<motion.h2
					variants={fadeInUp}
					className="text-white text-center tracking-normal leading-[2.75rem] font-semibold text-2xl sm:text-3xl lg:text-5xl"
				>
					{title}
				</motion.h2>
				<Paragraph
					content={paragraph}
					tailwindStyling="w-full lg:max-w-2xl mx-auto mt-4 py-8 text-white text-center text-medium"
				/>
			</div>
			<div className="flex flex-col w-full sm:flex-row lg:w-1/2">
				<div className="flex flex-col items-center justify-center">
					<Image
						alt={image?.altText}
						src={image?.sourceUrl}
						width={image?.mediaDetails?.width}
						height={image?.mediaDetails?.height}
						className="object-cover object-center w-full h-full"
					/>
					<Image
						alt={imageTwo?.altText}
						src={imageTwo?.sourceUrl}
						width={imageTwo?.mediaDetails?.width}
						height={imageTwo?.mediaDetails?.height}
						className="object-cover object-center w-full h-full"
					/>
				</div>
				<div>
					<Image
						alt={imageLarge?.altText}
						src={imageLarge?.sourceUrl}
						width={imageLarge?.mediaDetails?.width}
						height={imageLarge?.mediaDetails?.height}
						className="object-cover object-center w-full min-h-[110vh]"
					/>
				</div>
			</div>
		</section>
	);
};

export default TextImage;
