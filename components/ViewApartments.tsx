// Import
import Link from "next/link";
import Image from "next/image";
import {LazyMotion, domMax, motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {FC, useEffect, useRef, useState} from "react";
import {IApartmentImage, IViewApartments} from "@/types/components";
import {fadeInUp, stagger, initial} from "../animations/animations";

// Components
import ApartmentCard from "./Cards/ApartmentCard";
import useWindowSize from "@/Hooks/useWindowSize";

const ViewApartments: FC<IViewApartments> = ({
	title,
	image,
	subtitle,
	buttonLink,
}) => {
	const {width} = useWindowSize();
	const globalContext = useGlobalContext();
	const [activeSlide, setActiveSlide] = useState(0);
	const [largeTranslate, setLargeTranslate] = useState(0);
	const largeSlideRef = useRef<HTMLDivElement | null>(null);
	const [activeImage, setActiveImage] = useState<IApartmentImage | null>(null);

	const arrowHandler = (direction: "prev" | "next") => {
		if (direction === "prev") {
			if (activeSlide === 0) {
				return setActiveSlide(globalContext?.apartmentsContent.length - 1);
			}

			return setActiveSlide(activeSlide - 1);
		}

		if (direction === "next") {
			if (activeSlide === globalContext?.apartmentsContent.length - 1) {
				return setActiveSlide(0);
			}

			return setActiveSlide(activeSlide + 1);
		}
	};

	useEffect(() => {
		if (largeSlideRef.current) {
			setLargeTranslate(-(activeSlide * largeSlideRef.current.offsetWidth));
		}
	}, [activeSlide]);

	useEffect(() => {
		setActiveSlide(0);
	}, [width]);

	return (
		<>
			<div className="py-12 flex flex-col gap-16 bg-white overflow-hidden">
				<div className="container mx-auto p-0">
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex flex-col sm:flex-row gap-4 items-center lg:items-end justify-between py-8 px-4"
					>
						<div>
							<motion.h2
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="font-bold text-lg mb-2"
							>
								{subtitle}
							</motion.h2>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="flex items-center text-4xl lg:text-5xl mb-4 tracking-tighter"
							>
								<span>{title}</span>
								<Image
									decoding="async"
									alt={image?.altText}
									src={image?.sourceUrl}
									width={image?.mediaDetails?.width}
									height={image?.mediaDetails?.height}
									className="hidden lg:inline my-2 mx-3 w-[120px] h-[40px] lg:h-[50px] object-cover object-center rounded-full"
								/>
							</motion.h3>
						</div>
						<>
							<Link
								href={buttonLink?.url}
								target={buttonLink?.target}
								className="flex  items-end justify-center w-fit py-3 px-6 text-center font-medium text-base text-goldPrimeDarker bg-transparent hover:bg-goldPrimeDark hover:text-white border border-goldPrimeDarker hover:border-goldPrimeDark rounded-full transition duration-200"
							>
								{buttonLink?.title}
							</Link>
						</>
					</motion.div>
					<LazyMotion features={domMax}>
						<div className="overflow-hidden px-4 lg:px-0">
							<div className="pl-3/20">
								<div className="relative">
									{/* Prev */}
									<motion.button
										initial={{opacity: 0}}
										animate={{opacity: 1}}
										exit={{opacity: 0}}
										className={
											activeImage
												? "hidden"
												: "absolute top-1/2 left-[2.5%] z-10 w-8 lg:w-12 transform -translate-y-1/2"
										}
										onClick={() => arrowHandler("prev")}
									>
										<Image
											width={500}
											height={500}
											src="/svg/circle-arrow-gold.svg"
											alt="White arrow in a gold circle"
											className="hover:opacity-70 transition-opacity duration-200 ease-in-out"
										/>
									</motion.button>
									<motion.div
										initial={{translateX: "0px"}}
										animate={{translateX: `${largeTranslate}px`}}
										transition={{duration: 0.5, type: "spring"}}
										className="flex flex-row py-12 items-center"
									>
										{globalContext?.apartmentsContent?.length > 0 ? (
											globalContext?.apartmentsContent?.map(
												(item: any, keys: number) => (
													<>
														<div
															key={keys}
															ref={largeSlideRef}
															className={`flex-shrink-0 w-4/5 sm:w-2/3 pr-3 sm:pr-4 transition-opacity duration-200 ease-in-out ${
																keys !== activeSlide
																	? "opacity-50"
																	: "opacity-100"
															}`}
														>
															<ApartmentCard
																link={item?.node?.uri}
																title={item?.node?.title}
																backgroundImage={
																	item?.node?.featuredImage?.node?.sourceUrl
																}
															/>
														</div>
													</>
												)
											)
										) : (
											<></>
										)}
									</motion.div>
									{/* Next */}
									<motion.button
										initial={{opacity: 0}}
										animate={{opacity: 1}}
										exit={{opacity: 0}}
										className={
											activeImage
												? "hidden"
												: "absolute z-10 w-8 transform rotate-180 -translate-y-1/2 top-1/2 right-[2.5%] lg:right-[37%] lg:w-12"
										}
										onClick={() => arrowHandler("next")}
									>
										<Image
											width={500}
											height={500}
											src="/svg/circle-arrow-gold.svg"
											alt="White arrow in a gold circle"
											className="hover:opacity-70 transition-opacity duration-200 ease-in-out"
										/>
									</motion.button>
								</div>
							</div>
						</div>
					</LazyMotion>
				</div>
			</div>
		</>
	);
};

export default ViewApartments;
