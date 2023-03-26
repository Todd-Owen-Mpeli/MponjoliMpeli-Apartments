import {FC} from "react";
import {motion} from "framer-motion";
import Paragraph from "./../Elements/Paragraph";
import {fadeInUp} from "../../animations/animations";

interface IProps {
	title: string;
	paragraph: string;
	backgroundImage: string;
}

const ContentImageCard: FC<IProps> = ({title, backgroundImage, paragraph}) => {
	return (
		<div
			className="relative py-20 px-8 bg-cover bg-center bg-no-repeat"
			style={{
				backgroundImage: `url("${backgroundImage}")`,
			}}
		>
			<div className="max-w-7xl mx-auto flex flex-col items-end justify-center">
				<div className="p-10 max-w-2xl bg-white">
					<motion.h2
						variants={fadeInUp}
						className="text-flatGreen text-center lg:text-left tracking-normal leading-[2.75rem] font-semibold text-2xl sm:text-3xl lg:text-5xl"
					>
						{title}
					</motion.h2>
					<Paragraph
						content={paragraph}
						tailwindStyling="w-full lg:max-w-2xl mx-auto mt-6 text-black text-left text-medium"
					/>
				</div>
			</div>
		</div>
	);
};

export default ContentImageCard;
