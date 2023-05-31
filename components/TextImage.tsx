import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import Paragraph from "./Elements/Paragraph";
import {fadeInUp, initial} from "../animations/animations";

interface IProps {
	title: string;
	subtitle: string;
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
	subtitle,
	imageTwo,
	paragraph,
	imageLarge,
}) => {
	return (
		<section
			className={`flex flex-col items-center lg:flex-row bg-green-dark bg-cover bg-center bg-no-repeat`}
			style={{
				backgroundImage: `url("/svg/backgroundStackedWaves.svg")`,
			}}
		>
			<div className="flex flex-col items-center justify-center w-full px-4 py-20 lg:w-1/2">
				<h2 className="pb-8 mx-auto mb-12 text-6xl font-semibold tracking-normal text-center border-b-2 text-goldPrime w-fit sm:text-7xl lg:text-8xl border-b-goldPrime lg:mb-20">
					{subtitle}
				</h2>
				<motion.h2
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="text-white text-center tracking-normal leading-[2.75rem] font-semibold text-2xl sm:text-3xl lg:text-5xl"
				>
					{title}
				</motion.h2>
				<Paragraph
					content={paragraph}
					tailwindStyling="w-full lg:max-w-2xl mx-auto mt-4 py-8 text-white text-center text-base"
				/>
			</div>
			<div className="flex flex-col w-full sm:flex-row lg:w-1/2">
				<div className="flex flex-row items-center justify-center lg:flex-col">
					<Image
						alt={image?.altText}
						src={image?.sourceUrl}
						width={image?.mediaDetails?.width}
						height={image?.mediaDetails?.height}
						className="object-cover object-center w-1/2 min-h-[250px] lg:w-full h-full"
					/>
					<Image
						alt={imageTwo?.altText}
						src={imageTwo?.sourceUrl}
						width={imageTwo?.mediaDetails?.width}
						height={imageTwo?.mediaDetails?.height}
						className="object-cover object-center w-1/2 min-h-[250px] lg:w-full h-full"
					/>
				</div>
				<div className="hidden lg:block">
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
