import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import Paragraph from "./Elements/Paragraph";
import ProfileCard from "./Cards/ProfileCard";
import {fadeIn, initial, initialTwo} from "../animations/animations";

interface IProps {
	title: string;
	paragraph: string;
	profileGrid: [
		{
			profileCard: {
				id: string;
				title: string;
				jobPosition: string;
				twitter: string;
				facebook: string;
				instagram: string;
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						height: number;
						width: number;
					};
				};
			};
		}
	];
}

const TeamMembers: FunctionComponent<IProps> = ({
	title,
	paragraph,
	profileGrid,
}) => {
	return (
		<section
			className="px-4 py-20 overflow-hidden bg-bottom bg-no-repeat bg-cover lg:px-0 bg-green-dark"
			style={{
				backgroundImage: `url("/svg/backgroundWaves.svg")`,
			}}
		>
			<div className="container px-0 mx-auto">
				<h2 className="text-goldPrime max-w-4xl mb-6 mx-auto text-center tracking-normal leading-[3.75rem] font-semibold text-6xl sm:text-7xl lg:text-8xl">
					{title}
				</h2>
				<motion.div
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
				>
					<Paragraph
						content={paragraph}
						tailwindStyling="w-full lg:max-w-2xl mx-auto mt-4 py-8 text-white text-center sm:text-left text-base"
					/>
				</motion.div>
				<div className="flex flex-col mt-24 lg:flex-row">
					{profileGrid.map((keys) => (
						<ProfileCard
							title={keys?.profileCard?.title}
							image={keys?.profileCard?.image}
							jobPosition={keys?.profileCard?.jobPosition}
							key={keys?.profileCard?.id || keys?.profileCard?.title}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default TeamMembers;
