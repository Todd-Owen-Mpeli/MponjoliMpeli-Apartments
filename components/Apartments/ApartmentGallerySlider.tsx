// Imports
import Image from "next/image";
import React, {FC, useState, useEffect, useRef} from "react";
import {motion, AnimatePresence, LazyMotion, domMax} from "framer-motion";
import {IApartmentGallerySlider, IApartmentImage} from "@/types/components";
import {initial, stagger, fadeInUp} from "../../animations/animations";

// Hooks
import useWindowSize from "@/Hooks/useWindowSize";

const ApartmentGallerySlider: FC<IApartmentGallerySlider> = ({
	imageGallery,
}) => {
	const {width} = useWindowSize();

	const largeSlideRef = useRef<HTMLDivElement | null>(null);
	const smallSlideRef = useRef<HTMLDivElement | null>(null);

	const [activeSlide, setActiveSlide] = useState(0);
	const [largeTranslate, setLargeTranslate] = useState(0);
	const [smallTranslate, setSmallTranslate] = useState(0);
	const [activeImage, setActiveImage] = useState<IApartmentImage | null>(null);

	const arrowHandler = (direction: "prev" | "next") => {
		if (direction === "prev") {
			if (activeSlide === 0) {
				return setActiveSlide(imageGallery.length - 1);
			}

			return setActiveSlide(activeSlide - 1);
		}

		if (direction === "next") {
			if (activeSlide === imageGallery.length - 1) {
				return setActiveSlide(0);
			}

			return setActiveSlide(activeSlide + 1);
		}
	};

	// Pop up Image Modal
	const arrowModalHandler = (direction: "prev" | "next") => {
		if (direction === "prev") {
			if (activeSlide === 0) {
				const previousImagePosition = imageGallery.length - 1;
				const newActiveImage: IApartmentImage = {
					url: `${imageGallery[previousImagePosition]?.image?.sourceUrl}`,
					alt: `${imageGallery[previousImagePosition]?.image?.altText}`,
				};

				return (
					setActiveSlide(imageGallery.length - 1),
					setActiveImage(newActiveImage)
				);
			}

			const previousImagePosition = activeSlide - 1;
			const newActiveImage: IApartmentImage = {
				url: `${imageGallery[previousImagePosition]?.image?.sourceUrl}`,
				alt: `${imageGallery[previousImagePosition]?.image?.altText}`,
			};

			return setActiveSlide(activeSlide - 1), setActiveImage(newActiveImage);
		}

		if (direction === "next") {
			// Last Image in the Array
			if (activeSlide === imageGallery.length - 1) {
				const newActiveImage: IApartmentImage = {
					url: `${imageGallery[0]?.image?.sourceUrl}`,
					alt: `${imageGallery[0]?.image?.altText}`,
				};

				return setActiveSlide(0), setActiveImage(newActiveImage);
			}

			const nextImagePosition = activeSlide + 1;
			const newActiveImage: IApartmentImage = {
				url: `${imageGallery[nextImagePosition]?.image?.sourceUrl}`,
				alt: `${imageGallery[nextImagePosition]?.image?.altText}`,
			};

			return setActiveSlide(activeSlide + 1), setActiveImage(newActiveImage);
		}
	};

	const thumbnailHandler = (index: number) => {
		setActiveSlide(index);
	};

	useEffect(() => {
		if (largeSlideRef.current) {
			setLargeTranslate(-(activeSlide * largeSlideRef.current.offsetWidth));
		}

		if (smallSlideRef.current) {
			setSmallTranslate(-(activeSlide * smallSlideRef.current.offsetWidth));
		}
	}, [activeSlide]);

	useEffect(() => {
		setActiveSlide(0);
	}, [width]);

	const imageClickHandler = (image: IApartmentImage) => {
		document.documentElement.classList.add("overflow-hidden");
		setActiveImage(image);
	};

	const closeHandler = () => {
		document.documentElement.classList.remove("overflow-hidden");
		setActiveImage(null);
	};
	return (
		<>
			<LazyMotion features={domMax}>
				<div className="overflow-hidden">
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
										: "absolute top-1/2 left-[2.5%] z-10 w-8 lg:w-12 hover:opacity-70 transition-opacity duration-200 ease-in-out transform -translate-y-1/2"
								}
								onClick={() => arrowHandler("prev")}
							>
								<Image
									width={500}
									height={500}
									src="/svg/circle-arrow.svg"
									alt="White arrow in a green circle"
								/>
							</motion.button>
							<motion.div
								initial={{translateX: "0px"}}
								animate={{translateX: `${largeTranslate}px`}}
								transition={{duration: 0.5, type: "spring"}}
								className="flex flex-row"
							>
								{imageGallery.map((item, index) => (
									<>
										<div
											key={index}
											ref={largeSlideRef}
											className={`flex-shrink-0 w-4/5 sm:w-2/3 pr-3 sm:pr-4 transition-opacity duration-200 ease-in-out ${
												index !== activeSlide ? "opacity-50" : "opacity-100"
											}`}
										>
											<Image
												alt={item?.image?.altText}
												src={item?.image?.sourceUrl}
												width={item?.image?.mediaDetails.width}
												height={item?.image?.mediaDetails.height}
												className={`w-full h-[500px] lg:h-[600px] object-cover transition-opacity duration-200 ease-in-out rounded-lg cursor-pointer hover:opacity-75 ${
													index !== activeSlide
														? "border-0"
														: "border-2 border-goldPrime"
												}`}
												onClick={() =>
													imageClickHandler({
														url: item?.image?.sourceUrl,
														alt: item?.image?.altText,
													})
												}
											/>
										</div>
									</>
								))}
							</motion.div>
							{/* Next */}
							<motion.button
								initial={{opacity: 0}}
								animate={{opacity: 1}}
								exit={{opacity: 0}}
								className={
									activeImage
										? "hidden"
										: "absolute z-10 w-8 transition-opacity duration-200 ease-in-out transform rotate-180 -translate-y-1/2 top-1/2 right-[2.5%] lg:right-[37%] lg:w-12 hover:opacity-70"
								}
								onClick={() => arrowHandler("next")}
							>
								<Image
									width={500}
									height={500}
									src="/svg/circle-arrow.svg"
									alt="White arrow in a green circle"
								/>
							</motion.button>
						</div>
					</div>
				</div>
				<div className="mt-4 overflow-hidden xl:mt-8">
					<div className="pl-3/20">
						<motion.div
							initial={{translateX: "0px"}}
							animate={{translateX: `${smallTranslate}px`}}
							transition={{duration: 0.5, type: "spring"}}
							className="flex flex-nowrap"
						>
							{imageGallery.map((item, index) => (
								<div
									key={index}
									ref={smallSlideRef}
									className="flex-shrink-0 w-1/4 pr-1 sm:w-1/4 lg:w-1/5 2xl:w-1/6 sm:pr-2 xl:pr-4"
								>
									<div
										className="transition-opacity duration-200 ease-in-out cursor-pointer hover:opacity-75"
										onClick={() => thumbnailHandler(index)}
									>
										<Image
											alt={item?.image?.altText}
											src={item?.image?.sourceUrl}
											width={item?.image?.mediaDetails.width}
											height={item?.image?.mediaDetails.height}
											className={`w-full h-[85px] md:h-[150px] lg:h-[185px] object-center object-cover border-2 rounded-lg transition-colors duration-200 ease-in-out ${
												index !== activeSlide
													? "border-transparent"
													: "border-green-default"
											}`}
										/>
									</div>
								</div>
							))}
						</motion.div>
					</div>
				</div>
				<AnimatePresence>
					{activeImage && (
						<>
							<motion.div
								initial={{opacity: 0}}
								animate={{opacity: 1}}
								exit={{opacity: 0}}
								className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-90"
							/>
							<div className="fixed top-0 left-0 z-50 flex w-full h-full px-4 py-24 overflow-y-scroll">
								<div className="relative m-auto">
									{/* Prev */}
									<motion.button
										initial={{opacity: 0}}
										animate={{opacity: 1}}
										exit={{opacity: 0}}
										className="absolute z-10 w-8 left-[50px] lg:left-[-60px] transition-opacity duration-200 ease-in-out transform -translate-y-1/2 bottom-[-75px] sx:bottom-[-100px] md:bottom-[-115px] lg:bottom-0 lg:top-1/2 md:w-12 hover:opacity-70"
										onClick={() => arrowModalHandler("prev")}
									>
										<Image
											width={500}
											height={500}
											src="/svg/circle-arrow.svg"
											alt="White arrow in a green circle"
										/>
									</motion.button>
									{/* Close Modal */}
									<motion.button
										initial={{opacity: 0}}
										animate={{opacity: 1}}
										exit={{opacity: 0}}
										onClick={closeHandler}
										className="absolute right-0 w-8 text-green-default transition-colors duration-200 ease-in-out cursor-pointer -top-12 hover:text-green-Two"
									>
										<Image
											width={500}
											height={500}
											src="/svg/cross.svg"
											alt="White arrow in a green circle"
										/>
									</motion.button>
									<Image
										width={500}
										height={500}
										src={activeImage?.url}
										alt={activeImage?.alt}
										className="w-full h-full lg:min-w-[450px] object-cover object-center min-h-[450px] xl:min-h-[550px] max-h-[550px] rounded-lg"
									/>
									{/* Next */}
									<motion.button
										initial={{opacity: 0}}
										animate={{opacity: 1}}
										exit={{opacity: 0}}
										className="absolute z-10 w-8 right-[50px] lg:right-[-60px] transition-opacity duration-200 ease-in-out transform rotate-180 -translate-y-1/2 bottom-[-75px] sx:bottom-[-100px] md:bottom-[-115px] lg:bottom-0 lg:top-1/2 md:w-12 hover:opacity-70"
										onClick={() => arrowModalHandler("next")}
									>
										<Image
											width={500}
											height={500}
											src="/svg/circle-arrow.svg"
											alt="White arrow in a green circle"
										/>
									</motion.button>
								</div>
							</div>
						</>
					)}
				</AnimatePresence>
			</LazyMotion>
		</>
	);
};

export default ApartmentGallerySlider;
