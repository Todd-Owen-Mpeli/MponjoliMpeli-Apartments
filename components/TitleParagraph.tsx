/* eslint-disable @next/next/no-img-element */
import {FC} from "react";
import {motion} from "framer-motion";
import {fadeInUp} from "../animations/animations";
import styles from "../styles/components/TitleParagraph.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

interface IProps {
	title: string;
	paragraph: string;
}

const TitleParagraph: FC<IProps> = ({title, paragraph}) => {
	return (
		<section
			className={`bg-green-Two bg-cover bg-center bg-no-repeat ${styles.titleParagraph}`}
		>
			<div className="container p-0 mx-auto">
				<div className="flex flex-col px-4">
					<motion.div variants={fadeInUp} className="py-16 sm:py-20 md:py-28">
						<h2 className="text-white text-center tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
							{title}
						</h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="w-full lg:max-w-[75rem] mx-auto mt-4 py-8 text-white text-left text-base"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default TitleParagraph;
