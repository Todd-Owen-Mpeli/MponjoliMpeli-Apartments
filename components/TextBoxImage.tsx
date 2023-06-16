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
import {ITextBoxImage} from "./types";

// Components
import Paragraph from "./Elements/Paragraph";

const TextBoxImage: FC<ITextBoxImage> = ({
	title,
	image,
	subtitle,
	paragraph,
}) => {
	return (
		<section className="py-0 bg-white lg:py-24 lg:px-8">
			<div className="px-0 mx-auto lg:container">
				<div className="relative flex flex-col-reverse lg:flex-row">
					<div className="w-full xl:w-4/5 xl:ml-auto bg-green-dark lg:bg-white">
						<motion.div
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
						>
							<Image
								alt={image?.altText}
								src={image?.sourceUrl}
								width={image?.mediaDetails?.width}
								height={image?.mediaDetails?.height}
								className={
									image?.sourceUrl
										? `relative object-cover object-center mx-auto mt-0 rounded-none lg:rounded-lg max-h-[650px] xl:max-h-full lg:mt-5 max-w-full lg:max-w-3xl xl:max-w-4xl`
										: `hidden`
								}
							/>
						</motion.div>
						<motion.div
							initial={initialTwo}
							whileInView={stagger}
							viewport={{once: true}}
							className="top-0 left-0 max-w-3xl px-6 py-20 mx-auto text-center rounded-none lg:rounded-lg bg-green-dark lg:absolute lg:mx-0 lg:px-12 lg:py-20"
						>
							<motion.span
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="text-base font-medium tracking-widest text-goldPrime"
							>
								{subtitle}
							</motion.span>
							<motion.h2
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="max-w-lg mx-auto my-8 text-5xl font-semibold leading-tight text-white"
							>
								{title}
							</motion.h2>
							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-2xl pt-8 mx-auto leading-loose text-left text-white text-base"
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TextBoxImage;
