// Import
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IApartmentCard} from "@/types/components";
import {fadeInUp, initial} from "@/animations/animations";

const ApartmentCard: FC<IApartmentCard> = ({title, link, backgroundImage}) => {
	return (
		<>
			<Link href={link} target={``}>
				<div
					className="flex items-end bg-cover bg-no-repeat bg-center w-full h-[550px] py-8 px-16"
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
						className="font-medium hover:text-goldPrimeDark transition-all duration-200 ease-in-out uppercase tracking-[0.075rem] text-left text-base mb-4 text-white border-b-2 border-goldPrimeDark"
					>
						{title}
					</motion.h2>
				</div>
			</Link>
		</>
	);
};

export default ApartmentCard;
