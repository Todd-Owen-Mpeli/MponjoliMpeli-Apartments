import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import Paragraph from "./Elements/Paragraph";
import {fadeIn} from "../animations/animations";
import styles from "../styles/components/textImage.module.scss";

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
			className={`flex flex-col items-center lg:flex-row bg-darkBlue bg-cover bg-center bg-no-repeat ${styles.textImage}`}
		>
			<div className="w-full px-4 py-20 lg:w-1/2">
				<div className="flex flex-col items-center justify-center">
					<h2 className="text-white text-center w-fit mx-auto font-[600] text-8xl sm:text-8xl border-b-goldPrime border-b-2 mb-20">
						MponjoliMpeli
					</h2>
					<motion.h2
						variants={fadeIn}
						className="text-white text-center font-[400] text-2xl sm:text-3xl lg:text-5xl"
					>
						{title}
					</motion.h2>
					<Paragraph
						content={paragraph}
						tailwindStyling="w-full lg:max-w-2xl mx-auto mt-4 py-8 text-white text-center sm:text-left text-medium"
					/>
				</div>
			</div>
			<div className="flex w-full lg:w-1/2">
				<div className="flex flex-col">
					<Image
						alt={image?.altText}
						src={image?.sourceUrl}
						width={image?.mediaDetails?.width}
						height={image?.mediaDetails?.height}
						className="object-cover object-center w-full h-full min-h-[450px]"
					/>
					<Image
						alt={imageTwo?.altText}
						src={imageTwo?.sourceUrl}
						width={imageTwo?.mediaDetails?.width}
						height={imageTwo?.mediaDetails?.height}
						className="object-cover object-center w-full h-full min-h-[450px]"
					/>
				</div>
				<div>
					<Image
						alt={imageLarge?.altText}
						src={imageLarge?.sourceUrl}
						width={imageLarge?.mediaDetails?.width}
						height={imageLarge?.mediaDetails?.height}
						className="object-cover object-center w-full h-full min-h-[450px]"
					/>
				</div>
			</div>
		</section>
	);
};

export default TextImage;
