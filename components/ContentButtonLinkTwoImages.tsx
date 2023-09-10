// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IContentButtonLinkTwoImages} from "@/types/components";
import {fadeInUp, initialTwo, fadeIn, initial} from "../animations/animations";

// Components
import Paragraph from "../components/Elements/Paragraph";

const ContentButtonLinkTwoImages: FC<IContentButtonLinkTwoImages> = ({
	title,
	paragraph,
	buttonLink,
	smallImage,
	largeImage,
	paragraphTwo,
}) => {
	return (
		<>
			<div className="py-10 px-4 bg-white">
				<div className="container mx-auto px-0">
					<div className="flex flex-wrap -mx-2">
						<div className="w-full lg:w-1/2 px-0 mb-4 lg:mb-0">
							<div className="py-10 px-8 sm:px-20 rounded-3xl">
								<div className="lg:max-w-2xl mx-auto">
									<div className="lg:max-w-xl mb-10">
										<motion.h2
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="lg:max-w-md mx-auto text-center lg:text-left lg:mx-0 text-4xl lg:text-6xl tracking-tight mb-6"
										>
											{title}
										</motion.h2>
										<Paragraph
											content={paragraph}
											tailwindStyling="text-black text-center lg:text-left text-base mb-10"
										/>
										<motion.button
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											aria-label="Download Tenancy Agreement Button"
											className={
												buttonLink?.url ? "block mx-auto lg:mx-0" : "hidden"
											}
										>
											<Link
												href={buttonLink?.url}
												target={buttonLink?.target}
												download="MponjoliMpeli - Tenancy Agreement.pdf"
												className="group inline-flex py-5 px-8 items-center justify-center leading-none font-medium text-goldPrimeDarker hover:text-white border border-goldPrimeDarker rounded-full hover:bg-goldPrimeDarker transition duration-200"
											>
												<span className="mr-2">{buttonLink?.title}</span>
												<span className="group-hover:rotate-45 transform transition duration-100">
													<svg
														width="10"
														height="10"
														viewBox="0 0 10 10"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M9 1L1 9"
															stroke="currentColor"
															stroke-width="1.3"
															stroke-miterlimit="10"
															stroke-linecap="round"
															stroke-linejoin="round"
														></path>
														<path
															d="M9 8.33571V1H1.66429"
															stroke="currentColor"
															stroke-width="1.3"
															stroke-miterlimit="10"
															stroke-linecap="round"
															stroke-linejoin="round"
														></path>
													</svg>
												</span>
											</Link>
										</motion.button>
									</div>
									<div className="lg:max-w-lg ml-auto">
										<Paragraph
											content={paragraphTwo}
											tailwindStyling="text-black text-center lg:text-right text-base"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="w-5/12 lg:w-2/12 px-2">
							<Image
								decoding="async"
								alt={smallImage?.altText}
								src={smallImage?.sourceUrl}
								width={smallImage?.mediaDetails?.width}
								height={smallImage?.mediaDetails?.height}
								className={
									smallImage?.sourceUrl
										? "w-full h-full max-h-[650px] rounded-3xl object-cover object-center"
										: "hidden"
								}
							/>
						</div>
						<div className="w-7/12 lg:w-4/12 px-2">
							<Image
								decoding="async"
								alt={largeImage?.altText}
								src={largeImage?.sourceUrl}
								width={largeImage?.mediaDetails?.width}
								height={largeImage?.mediaDetails?.height}
								className={
									largeImage?.sourceUrl
										? "w-full h-full max-h-[500px] rounded-3xl object-cover object-center"
										: "hidden"
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContentButtonLinkTwoImages;
