// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {ITitleParagraph} from "@/types/components";
import {fadeInUp, initial} from "../animations/animations";
import styles from "../styles/components/TitleParagraph.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const TitleParagraph: FC<ITitleParagraph> = ({title, paragraph}) => {
	return (
		<section className={`bg-white ${styles.titleParagraph}`}>
			<div className="container p-0 mx-auto">
				<div className="flex flex-col px-4">
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="py-16 sm:py-20 md:py-28 px-4"
					>
						<motion.h2
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className={
								title
									? "text-black text-center font-semibold text-4xl lg:text-6xl"
									: "hidden"
							}
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling={
								paragraph
									? "w-full lg:max-w-[75rem] mx-auto mt-4 py-8 text-black text-left text-base"
									: "hidden"
							}
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default TitleParagraph;
