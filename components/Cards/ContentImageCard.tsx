// Import
import {FC} from "react";
import {
	initial,
	stagger,
	fadeInUp,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "../../animations/animations";
import {motion} from "framer-motion";
import styled from "styled-components";
import {IContentImageCard} from "../types";

// Components
import Paragraph from "./../Elements/Paragraph";

const ContentImageCard = styled.div`
	ol,
	ul {
		padding-left: 30px;

		li {
			padding: 0px 10px;
			position: relative;
			list-style-type: decimal;

			strong {
				font-family: $fontStyle_main;
				@apply text-darkBlue font-bold tracking-wider uppercase text-medium py-4;
			}
		}
	}
`;

const contentImageCard: FC<IContentImageCard> = ({
	title,
	paragraph,
	contentLocation,
	backgroundImage,
}) => {
	return (
		<ContentImageCard
			className="relative min-h-[450PX] px-8 py-20 bg-center bg-no-repeat bg-cover"
			style={{
				backgroundImage: `linear-gradient(
							0deg,
							rgba(1, 42, 45, 0),
							rgba(1, 42, 45, 0.65)
						),url("${
							backgroundImage
								? backgroundImage
								: `/svg/backgroundSVG/stacked-waves-haikei-blue.svg`
						}")`,
			}}
		>
			<motion.div
				initial={
					contentLocation === "Left" ? slideInLeftInitial : slideInRightInitial
				}
				whileInView={slideInRightFinish}
				viewport={{once: true}}
				className={
					contentLocation === "Left"
						? `flex flex-col items-baseline justify-center mx-auto max-w-7xl`
						: `flex flex-col items-end justify-center mx-auto max-w-7xl`
				}
			>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="max-w-2xl p-10 bg-white"
				>
					<motion.h2
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="text-flatGreen text-center lg:text-left tracking-normal leading-[2.75rem] font-semibold text-3xl md:text-4xl"
					>
						{title}
					</motion.h2>
					<Paragraph
						content={paragraph}
						tailwindStyling="w-full lg:max-w-2xl mx-auto mt-6 text-black text-left text-base"
					/>
				</motion.div>
			</motion.div>
		</ContentImageCard>
	);
};

export default contentImageCard;
