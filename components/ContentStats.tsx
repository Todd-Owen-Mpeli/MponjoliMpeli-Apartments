import {FC} from "react";
import {motion} from "framer-motion";
import Paragraph from "./Elements/Paragraph";
import {fadeInUp, stagger} from "../animations/animations";

interface IProps {
	title: string;
	paragraph: string;
	statsOne: {
		title: string;
		subtitle: string;
		paragraph: string;
	};
	statsTwo: {
		title: string;
		subtitle: string;
		paragraph: string;
	};
}

const ContentStats: FC<IProps> = ({title, statsOne, statsTwo, paragraph}) => {
	return (
		<section
			className="py-16 overflow-hidden bg-center bg-no-repeat bg-cover bg-darkGreen"
			style={{
				backgroundImage: `url("/svg/backgroundBlob.svg")`,
			}}
		>
			<div className="container px-0 mx-auto">
				<div className="flex flex-col items-center justify-between gap-4 px-8 lg:flex-row">
					<div className="flex flex-col items-center justify-center">
						<motion.h2
							variants={fadeInUp}
							className="text-white text-center tracking-normal leading-[2.75rem] font-semibold text-2xl sm:text-3xl lg:text-5xl"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="w-full lg:max-w-2xl mx-auto mt-4 py-8 text-white text-center sm:text-left text-medium"
						/>
					</div>
					<motion.div
						variants={stagger}
						className="flex flex-col items-center justify-center sm:flex-row"
					>
						<motion.div variants={fadeInUp} className="w-full p-4 lg:w-1/2">
							<div className="h-full px-8 text-center bg-gray-100 py-14 rounded-3xl">
								<div className="mx-auto md:max-w-xs">
									<h2 className="mb-6 text-5xl font-semibold md:text-6xl lg:text-7xl text-goldPrime">
										<span className="text-transparent bg-clip-text bg-gradient-green-dark">
											{statsOne?.subtitle}
										</span>
									</h2>
									<h3 className="mb-3.5 text-xl text-goldPrime font-bold">
										{statsOne?.title}
									</h3>
									<Paragraph
										content={statsOne?.paragraph}
										tailwindStyling="w-full lg:max-w-2xl mx-auto mt-4 py-8 text-white text-center sm:text-left text-medium"
									/>
								</div>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className="w-full p-4 lg:w-1/2">
							<div className="h-full px-8 text-center bg-gray-100 py-14 rounded-3xl">
								<div className="mx-auto md:max-w-xs">
									<h2 className="mb-6 text-5xl font-bold md:text-6xl lg:text-7xl text-goldPrime">
										<span className="text-transparent bg-clip-text bg-gradient-orange">
											{statsTwo?.subtitle}
										</span>
									</h2>
									<h3 className="mb-3.5 text-xl text-goldPrime font-bold">
										{statsTwo?.title}
									</h3>
									<Paragraph
										content={statsTwo?.paragraph}
										tailwindStyling="w-full lg:max-w-2xl mx-auto mt-4 py-8 text-white text-center sm:text-left text-medium"
									/>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ContentStats;
