// Import
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "../animations/animations";
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {IIntroTitleImage} from "@/types/components";

// Components
import Paragraph from "./Elements/Paragraph";

const IntroTitleImage: FC<IIntroTitleImage> = ({
	title,
	image,
	subtitle,
	titleEnd,
	paragraph,
	titleStart,
	imageLarge,
	titleMiddle,
	smallImageOne,
	smallImageTwo,
}) => {
	return (
		<>
			<article className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<motion.h2
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="text-center max-w-3xl mx-auto text-4xl lg:text-6xl pb-24 tracking-tighter"
					>
						{titleStart}
						<Image
							decoding="async"
							alt={smallImageOne?.altText}
							src={smallImageOne?.sourceUrl}
							width={smallImageOne?.mediaDetails?.width}
							height={smallImageOne?.mediaDetails?.height}
							className="inline my-2 mx-3 w-[120px] h-[40px] lg:h-[50px] object-cover object-center rounded-full"
						/>
						{titleMiddle}
						<Image
							decoding="async"
							alt={smallImageTwo?.altText}
							src={smallImageTwo?.sourceUrl}
							width={smallImageTwo?.mediaDetails?.width}
							height={smallImageTwo?.mediaDetails?.height}
							className="inline w-[120px] my-2 mx-3 h-[40px] lg:h-[50px] object-cover object-center rounded-full"
						/>
						{titleEnd}
					</motion.h2>
					<div className="flex flex-wrap -mx-4">
						<div className="w-full lg:w-5/12 px-4 mb-6 lg:mb-0">
							<div className="flex flex-col h-full">
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className=""
								>
									<Image
										alt={image?.altText}
										src={image?.sourceUrl}
										width={image?.mediaDetails?.width}
										height={image?.mediaDetails?.height}
										className="w-full h-[150px] object-cover object-center rounded-lg"
									/>
								</motion.div>
								<motion.div
									initial={initial}
									whileInView={stagger}
									viewport={{once: true}}
									className="py-10 px-10 h-full bg-white rounded-5xl"
								>
									<motion.h2
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="flex gap-x-[2px] max-w-xs md:max-w-md text-4xl lg:text-5xl mb-4 tracking-tighter"
									>
										{title}
									</motion.h2>
									<div className="max-w-sm ml-auto text-right">
										<motion.h3
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="flex gap-1 mb-1 text-base font-bold items-center justify-end"
										>
											{subtitle}
										</motion.h3>
										<Paragraph
											content={paragraph}
											tailwindStyling="text-right text-base text-black"
										/>
									</div>
								</motion.div>
							</div>
						</div>
						<div className="w-full lg:w-7/12 px-4">
							<motion.div
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="relative h-full"
							>
								<Image
									alt={imageLarge?.altText}
									src={imageLarge?.sourceUrl}
									width={imageLarge?.mediaDetails?.width}
									height={imageLarge?.mediaDetails?.height}
									// src={imageTwo?.sourceUrl}
									className="w-full h-full max-h-[550px] object-cover object-center rounded-lg"
								/>
							</motion.div>
						</div>
					</div>
				</div>
			</article>
		</>
	);
};

export default IntroTitleImage;
