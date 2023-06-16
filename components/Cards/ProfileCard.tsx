import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {IProfileCard} from "../types";
import {fadeInUp, initial, stagger} from "../../animations/animations";

const ProfileCard: FC<IProfileCard> = ({title, image, jobPosition}) => {
	return (
		<div className="w-full py-6 rounded-lg lg:w-1/3 lg:p-3">
			<div className="mb-6 overflow-hidden">
				<Image
					alt={image?.altText}
					src={image?.sourceUrl}
					width={image?.mediaDetails?.width}
					height={image?.mediaDetails?.height}
					className="w-full h-full max-h-[500px] object-cover object-center transform hover:scale-105 transition ease-in-out duration-500"
				/>
			</div>
			<motion.div
				initial={initial}
				whileInView={stagger}
				viewport={{once: true}}
			>
				<motion.h3
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="mb-4 text-goldPrime text-left tracking-normal leading-[2.75rem] font-bold text-2xl sm:text-4xl"
				>
					{title}
				</motion.h3>
				<motion.h4
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="text-base tracking-wider text-white"
				>
					{jobPosition}
				</motion.h4>
			</motion.div>
		</div>
	);
};

export default ProfileCard;
