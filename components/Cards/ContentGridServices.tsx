// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {IContentGridServicesCard} from "@/types/components";
import {fadeInUp, initial} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const ContentGridServicesCard: FC<IContentGridServicesCard> = ({
	icon,
	title,
	paragraph,
}) => {
	return (
		<>
			<div className="flex flex-col gap-4">
				<Image
					alt={icon?.altText}
					src={icon?.sourceUrl}
					width={icon?.mediaDetails?.width}
					height={icon?.mediaDetails?.height}
					className={
						icon?.sourceUrl
							? "w-full mx-auto xl:mx-0 xl:w-[75px] h-[75px] object-contain object-center"
							: "hidden"
					}
				/>
				<motion.h2
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="text-center font-semibold py-0 lg:text-left text-lg lg:text-2xl"
				>
					{title}
				</motion.h2>
				<Paragraph
					content={paragraph}
					tailwindStyling="text-black text-center lg:text-left text-base"
				/>
			</div>
		</>
	);
};

export default ContentGridServicesCard;
