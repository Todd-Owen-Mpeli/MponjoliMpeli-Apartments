import {FC} from "react";
import {motion} from "framer-motion";
import {initial, stagger} from "../animations/animations";

// Components
import StatsCard from "./Cards/StatsCard";

interface IProps {
	stats: [
		{
			card: {
				id: string;
				icon: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						height: number;
						width: number;
					};
				};
				title: string;
				paragraph: string;
			};
		}
	];
}

const Stats: FC<IProps> = ({stats}) => {
	return (
		<section className="py-20 bg-white">
			<div className="container px-4 mx-auto">
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="flex flex-wrap -mx-4"
				>
					{stats?.length > 0 ? (
						stats.map((keys) => (
							<StatsCard
								title={keys?.card?.title}
								icon={keys?.card?.icon}
								paragraph={keys?.card?.paragraph}
								key={keys?.card?.id || keys?.card?.title}
							/>
						))
					) : (
						<h2 className="mx-auto text-3xl text-center text-black md:text-4xl">
							No Details
						</h2>
					)}
				</motion.div>
			</div>
		</section>
	);
};

export default Stats;
