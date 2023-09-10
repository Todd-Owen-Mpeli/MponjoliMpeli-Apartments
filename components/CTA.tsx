import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {ICTA} from "@/types/components";
import {fadeIn, initialTwo} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

const CTA: FC<ICTA> = ({title, paragraph, buttonLink, backgroundImage}) => {
	return (
		<section
			className="px-4 my-2 py-20 bg-center bg-no-repeat bg-cover lg:px-0"
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
						<motion.h2
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="mb-4 text-white text-center py-0 lg:text-left text-4xl lg:text-5xl"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-lg mx-auto lg:mx-0 text-white text-center lg:text-left text-base"
						/>
					</div>

					<motion.button
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className={buttonLink?.url ? "block" : "hidden"}
					>
						<Link
							href={buttonLink?.url}
							target={buttonLink?.target}
							className="px-12 py-6 mb-3 text-center text-white transition duration-200 xl:px-20 bg-green-default hover:bg-goldPrimeDarker"
						>
							{buttonLink?.title}
						</Link>
					</motion.button>
				</div>
			</div>
		</section>
	);
};

export default CTA;
