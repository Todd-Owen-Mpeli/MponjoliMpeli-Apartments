import Image from "next/image";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import {fadeInUp, stagger} from "../../animations/animations";

interface IProps {
	title: string;
	jobPosition: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}
const ProfileCard: FunctionComponent<IProps> = ({
	title,
	image,
	jobPosition,
}) => {
	return (
		<div className="w-full lg:w-1/3 rounded-lg py-6 lg:p-3">
			<div className="mb-6 overflow-hidden">
				<Image
					alt={image?.altText}
					src={image?.sourceUrl}
					width={image?.mediaDetails?.width}
					height={image?.mediaDetails?.height}
					className="w-full h-full max-h-[500px] object-cover object-center transform hover:scale-105 transition ease-in-out duration-500"
				/>
			</div>
			<motion.div variants={stagger}>
				<motion.h3
					variants={fadeInUp}
					className="mb-4 text-goldPrime text-left tracking-normal leading-[2.75rem] font-bold text-2xl sm:text-4xl"
				>
					{title}
				</motion.h3>
				<motion.h4
					variants={fadeInUp}
					className="text-medium text-white tracking-wider"
				>
					{jobPosition}
				</motion.h4>
			</motion.div>
		</div>
	);
};

export default ProfileCard;
