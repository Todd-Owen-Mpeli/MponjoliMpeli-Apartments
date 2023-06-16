// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IHighlightImagesCard} from "../types";
import {initial, fadeInUp} from "../../animations/animations";

const HighlightImagesCard: FC<IHighlightImagesCard> = ({
	image,
	tailwindStyling,
}) => {
	return (
		<motion.div
			initial={initial}
			whileInView={fadeInUp}
			viewport={{once: true}}
		>
			<Link href={image?.sourceUrl} target=" ">
				<Image
					alt={image?.altText}
					src={image?.sourceUrl}
					width={image?.mediaDetails?.width}
					height={image?.mediaDetails?.height}
					className={image?.sourceUrl ? `block ${tailwindStyling}` : `hidden`}
				/>
			</Link>
		</motion.div>
	);
};

export default HighlightImagesCard;
