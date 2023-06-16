import {FC} from "react";
import Image from "next/image";
import {IStatsCard} from "../types";
import {motion} from "framer-motion";
import {fadeInUp, initial} from "../../animations/animations";

// Components
import Paragraph from ".././Elements/Paragraph";

const StatsCard: FC<IStatsCard> = ({icon, title, paragraph}) => {
	return (
		<motion.div
			initial={initial}
			whileInView={fadeInUp}
			viewport={{once: true}}
			className="w-full px-4 mb-16 md:w-1/2 lg:w-1/4 lg:mb-0"
		>
			<div className="px-12 text-center">
				<Image
					alt={icon?.altText}
					src={icon?.sourceUrl}
					width={icon?.mediaDetails?.width}
					height={icon?.mediaDetails?.height}
					className={
						icon?.sourceUrl ? `object-cover w-16 h-16 mx-auto` : `hidden`
					}
				/>
				<div className="max-w-xs px-6 mx-auto mt-4 lg:px-0">
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="mb-2 text-lg font-medium"
					>
						{title}
					</motion.h3>
					<Paragraph
						content={paragraph}
						tailwindStyling="mb-2 mt-4 text-base"
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default StatsCard;
