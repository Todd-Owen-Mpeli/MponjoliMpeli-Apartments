import {FC} from "react";
import {motion} from "framer-motion";
import Paragraph from "./../Elements/Paragraph";
import {fadeInUp} from "../../animations/animations";

interface IProps {
	title: string;
	paragraph: string;
	contentLocation: string;
	backgroundImage: string;
}

const ContentImageCard: FC<IProps> = ({
	title,
	paragraph,
	contentLocation,
	backgroundImage,
}) => {
	return (
		<div
			className="relative px-8 py-20 bg-center bg-no-repeat bg-cover"
			style={{
				backgroundImage: `url("${backgroundImage}")`,
			}}
		>
			<div
				className={
					contentLocation === "Left"
						? `flex flex-col items-end justify-center mx-auto max-w-7xl`
						: `flex flex-col items-baseline justify-center mx-auto max-w-7xl`
				}
			>
				<div className="max-w-2xl p-10 bg-white">
					<motion.h2
						variants={fadeInUp}
						className="text-flatGreen text-center lg:text-left tracking-normal leading-[2.75rem] font-semibold text-2xl sm:text-3xl lg:text-5xl"
					>
						{title}
					</motion.h2>
					<Paragraph
						content={paragraph}
						tailwindStyling="w-full lg:max-w-2xl mx-auto mt-6 text-black text-left text-base sm:text-medium"
					/>
				</div>
			</div>
		</div>
	);
};

export default ContentImageCard;
