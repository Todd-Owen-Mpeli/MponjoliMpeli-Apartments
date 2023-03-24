/* eslint-disable @next/next/no-img-element */
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import LogoCard from "../components/Cards/LogoCard";
import {fadeIn, stagger} from "../animations/animations";

interface IProps {
	title: string;
	logoGrid: [
		{
			id: string;
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
		}
	];
}

const Logos: FunctionComponent<IProps> = ({title, logoGrid}) => {
	return (
		<section className={`py-20 px-4 lg:px-0 bg-white`}>
			<div className="container px-0 mx-auto">
				<motion.h2
					variants={fadeIn}
					className=" mb-20 text-greenTwo text-center tracking-normal leading-[2.75rem] font-semibold text-2xl sm:text-3xl lg:text-5xl"
				>
					{title}
				</motion.h2>
				<div className="max-w-6xl mx-auto">
					<motion.div
						variants={stagger}
						className="grid items-center justify-center grid-cols-2 gap-6 lg:gap-4 lg:grid-cols-6 lg:justify-between gap-y-8"
					>
						{logoGrid.map((keys) => (
							<motion.div variants={fadeIn}>
								<LogoCard key={keys?.id} image={keys?.image} />
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Logos;
