// Import
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IApartmentCard} from "@/types/components";
import {fadeInUp, stagger, initial} from "@/animations/animations";

const ApartmentCard: FC<IApartmentCard> = ({title, link, backgroundImage}) => {
	return (
		<div>
			<Link href={link} target={``}>
				<div
					className="flex items-end bg-cover bg-no-repeat bg-center w-full lg:w-[550px] h-[550px] py-8 px-16"
					style={{
						backgroundImage: `linear-gradient(
							0deg,
							rgba(1, 42, 45, 0.95),
							rgba(1, 42, 45, 0.80),
							rgba(1, 42, 45, 0.55),
							rgba(1, 42, 45, 0.30)
						),url("${backgroundImage}")`,
					}}
				>
					<motion.h2
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="font-bold text-left text-lg mb-4 text-white"
					>
						{title}
					</motion.h2>
				</div>
			</Link>
		</div>
	);
};

export default ApartmentCard;
