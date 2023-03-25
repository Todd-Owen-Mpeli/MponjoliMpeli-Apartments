import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import Paragraph from "./Elements/Paragraph";
import {fadeInUp, fadeIn} from "../animations/animations";
import styles from "../styles/components/IntroSection.module.scss";

interface IProps {
	title: string;
	subtitle: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
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

const IntroSection: FC<IProps> = ({
	title,
	image,
	subtitle,
	imageTwo,
	paragraph,
	imageLarge,
	buttonLink,
}) => {
	return (
		<section
			className={`flex flex-col justify-center items-center lg:flex-row bg-greenTwo bg-cover bg-center bg-no-repeat ${styles.introSection}`}
		>
			<div className="flex flex-col items-center justify-center w-full px-4 py-20 lg:w-1/2">
				<h2 className="text-goldPrime text-center w-fit mx-auto tracking-normal font-semibold text-6xl sm:text-8xl border-b-goldPrime border-b-2 pb-8 mb-12 lg:mb-20">
					{subtitle}
				</h2>
				<motion.h2
					variants={fadeIn}
					className="text-white text-center tracking-normal leading-[2.75rem] font-semibold text-2xl sm:text-3xl lg:text-5xl"
				>
					{title}
				</motion.h2>
				<Paragraph
					content={paragraph}
					tailwindStyling="w-full lg:max-w-2xl mx-auto mt-4 py-8 text-white text-center text-medium"
				/>
				<motion.div variants={fadeInUp} className="mt-10">
					<Link
						href={buttonLink?.url}
						target={buttonLink?.target}
						className="px-10 py-3 mx-auto uppercase font-semibold tracking-[0.35rem] text-center text-white transition duration-200 bg-transparent border-2 border-goldPrime hover:bg-goldPrime hover:text-darkGreen hover:font-bold"
					>
						{buttonLink?.title}
					</Link>
				</motion.div>
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

export default IntroSection;
