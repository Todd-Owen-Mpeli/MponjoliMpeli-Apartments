import {FC} from "react";
import {ILogos} from "./types";
import {motion} from "framer-motion";
import {fadeIn, initial, initialTwo, stagger} from "../animations/animations";

// Components
import LogoCard from "../components/Cards/LogoCard";

const Logos: FC<ILogos> = ({title, logoGrid}) => {
	return (
		<section className={`py-20 px-4 lg:px-0 bg-white`}>
			<div className="container px-0 mx-auto">
				<motion.h2
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
					className=" mb-20 text-green-Two text-center tracking-normal leading-[2.75rem] font-semibold text-2xl sm:text-3xl lg:text-5xl"
				>
					{title}
				</motion.h2>
				<div className="max-w-6xl mx-auto">
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="grid items-center justify-center grid-cols-2 gap-4 lg:grid-cols-6 lg:justify-between"
					>
						{logoGrid.map((keys) => (
							<LogoCard
								image={keys?.image}
								key={keys?.id || keys?.image?.sourceUrl}
							/>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Logos;
