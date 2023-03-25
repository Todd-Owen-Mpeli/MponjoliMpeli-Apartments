import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import Paragraph from "./Elements/Paragraph";
import {fadeIn} from "../animations/animations";

interface IProps {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
}

const ContactBanner: FC<IProps> = ({
	title,
	paragraph,
	buttonLink,
	backgroundImage,
}) => {
	return (
		<section
			className="px-4 py-20 bg-center bg-no-repeat bg-cover lg:px-0"
			style={{
				backgroundImage: `linear-gradient(
							0deg,
							rgba(1, 42, 45, 0.85),
							rgba(1, 42, 45, 0.85)
						),url("${backgroundImage}")`,
			}}
		>
			<div className="container p-0 mx-auto">
				<div className="flex flex-col items-center justify-between gap-10 px-0 py-8 lg:flex-row lg:px-8">
					<div className="flex flex-col items-center justify-between gap-4 lg:items-start">
						<h2 className="mb-4 text-3xl font-semibold leading-tight text-center lg:text-left text-white sm:text-4xl lg:text-5xl">
							{title}
						</h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="w-full lg:max-w-[40rem] mt-4 text-center lg:text-left text-white font-[400] text-medium"
						/>
					</div>
					<Link href={`${buttonLink?.url}`} target={`${buttonLink?.target}`}>
						<motion.button
							variants={fadeIn}
							className="py-4 px-12 md:py-6 xl:px-20 tracking-widest uppercase font-[400] text-white text-base bg-green hover:bg-[#d1a855] transition-all ease-in-out duration-500"
						>
							{buttonLink?.title}
						</motion.button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ContactBanner;
