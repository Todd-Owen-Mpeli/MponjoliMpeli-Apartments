// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {fadeInUp, initial} from "../animations/animations";
import {IContentLargeBackgroundImage} from "@/types/components";

// Components
import Paragraph from "../components/Elements/Paragraph";

const ContentLargeBackgroundImage: FC<IContentLargeBackgroundImage> = ({
	title,
	paragraph,
	contentBlockOne,
	contentBlockTwo,
	backgroundImage,
}) => {
	return (
		<>
			<div className="py-20 px-4 lg:px-0 bg-white">
				<div
					className="container mx-auto px-0 rounded-3xl bg-cover bg-no-repeat bg-center"
					style={{
						backgroundImage: `url("${backgroundImage?.sourceUrl}")`,
					}}
				>
					<div className="flex flex-col items-center gap-16 lg:gap-8">
						<div className="bg-white p-16 flex flex-col gap-2 rounded-br-3xl border-t-2 border-l-2 rounded-tl-3xl border-r-2 lg:border-r-0 rounded-tr-3xl lg:rounded-tr-0 border-goldPrime w-full lg:w-fit self-start">
							<motion.h2
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="text-center font-semibold py-0 lg:text-left text-lg lg:text-2xl"
							>
								{title}
							</motion.h2>
							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-lg text-black text-center lg:text-left text-base"
							/>
						</div>
						<div className="bg-white p-16 flex flex-col gap-2 rounded-l-3xl border-r-2 border-goldPrime w-full lg:w-fit self-end">
							<span className="text-goldPrimeDarker text-center lg:text-left font-semibold mb-2 text-2xl lg:text-4xl">
								{contentBlockOne?.subtitle}
							</span>
							<motion.h2
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="text-center font-semibold py-0 lg:text-left text-lg lg:text-2xl"
							>
								{contentBlockOne?.title}
							</motion.h2>
							<Paragraph
								content={contentBlockOne?.paragraph}
								tailwindStyling="max-w-lg text-black text-center lg:text-left text-base"
							/>
						</div>
						<div className="bg-white p-16 flex flex-col gap-2 rounded-tr-3xl border-r-2 lg:border-r-0 rounded-bl-3xl rounded-br-3xl lg:rounded-br-0 border-b-2 border-l-2 border-goldPrime w-full lg:w-fit self-start">
							<span className="text-goldPrimeDarker text-center lg:text-left font-semibold mb-2 text-2xl lg:text-4xl">
								{contentBlockTwo?.subtitle}
							</span>
							<motion.h2
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="text-center font-semibold py-0 lg:text-left text-lg lg:text-2xl"
							>
								{contentBlockTwo?.title}
							</motion.h2>
							<Paragraph
								content={contentBlockTwo?.paragraph}
								tailwindStyling="max-w-lg text-black text-center lg:text-left text-base"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContentLargeBackgroundImage;
