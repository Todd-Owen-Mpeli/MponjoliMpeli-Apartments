import Image from "next/image";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import {fadeIn, stagger} from "../../animations/animations";

interface IProps {
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}
const LogoCard: FunctionComponent<IProps> = ({image}) => {
	return (
		<motion.div variants={fadeIn} className="mx-auto">
			<Image
				alt={image?.altText}
				src={image?.sourceUrl}
				width={image?.mediaDetails?.width}
				height={image?.mediaDetails?.height}
				className="w-full h-[75px] sm:h-[125px] object-contain object center"
			/>
		</motion.div>
	);
};

export default LogoCard;
