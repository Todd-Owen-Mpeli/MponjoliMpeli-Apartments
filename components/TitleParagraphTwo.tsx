/* eslint-disable @next/next/no-img-element */
import {FC} from "react";
import {motion} from "framer-motion";
import {ITitleParagraphTwo} from "./types";
import {fadeInUp, initial} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

const TitleParagraphTwo: FC<ITitleParagraphTwo> = ({title, paragraph}) => {
	return (
		<section className="bg-white">
			<div className="container p-0 mx-auto">
				<div className="flex flex-col px-4">
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="py-16 sm:py-20 md:py-28"
					>
						<h2 className="text-black text-center tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
							{title}
						</h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="w-full lg:max-w-[75rem] mx-auto mt-4 py-8 text-black text-left text-base"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default TitleParagraphTwo;
