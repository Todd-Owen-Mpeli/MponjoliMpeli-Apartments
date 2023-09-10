// Import
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {ILargeTitleParagraph} from "@/types/components";
import {fadeInUp, stagger, initial} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

const LargeTitleParagraph: FC<ILargeTitleParagraph> = ({
	titleEnd,
	titleStart,
	titleMiddle,
	paragraph,
	smallImageOne,
	smallImageTwo,
}) => {
	return (
		<>
			<div className="bg-white">
				<div className="container p-0 mx-auto">
					<div className="flex flex-col px-4">
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="py-16 sm:py-20 md:py-28"
						>
							<motion.h2
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="text-center max-w-2xl mx-auto text-4xl lg:text-6xl tracking-tighter"
							>
								<span className={titleStart ? "mx-2" : "hidden"}>
									{titleStart}
								</span>
								<Image
									decoding="async"
									alt={smallImageOne?.altText}
									src={smallImageOne?.sourceUrl}
									width={smallImageOne?.mediaDetails?.width}
									height={smallImageOne?.mediaDetails?.height}
									className={
										smallImageOne?.sourceUrl
											? "inline my-2 mx-3 w-[120px] h-[40px] lg:h-[50px] object-cover object-center rounded-full"
											: "hidden"
									}
								/>
								<span className={titleMiddle ? "mx-2" : "hidden"}>
									{titleMiddle}
								</span>
								<Image
									decoding="async"
									alt={smallImageTwo?.altText}
									src={smallImageTwo?.sourceUrl}
									width={smallImageTwo?.mediaDetails?.width}
									height={smallImageTwo?.mediaDetails?.height}
									className={
										smallImageTwo?.sourceUrl
											? "inline w-[120px] my-2 mx-3 h-[40px] lg:h-[50px] object-cover object-center rounded-full"
											: "hidden"
									}
								/>
								<span className={titleEnd ? "mx-2" : "hidden"}>{titleEnd}</span>
							</motion.h2>
							<Paragraph
								content={paragraph}
								tailwindStyling={
									paragraph
										? "lg:max-w-2xl mx-auto py-8 text-black text-center lg:text-left text-base"
										: "hidden"
								}
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LargeTitleParagraph;
