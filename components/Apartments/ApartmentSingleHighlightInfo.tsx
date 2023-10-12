// Imports
import Link from "next/link";
import Image from "next/image";
import {
	IApartmentImage,
	IApartmentSingleHighlightInfo,
} from "@/types/components";
import React, {FC, useState} from "react";
import {initial, stagger, fadeInUp} from "../../animations/animations";
import {AnimatePresence, LazyMotion, domMax, motion} from "framer-motion";

// Components
import HighlightImagesCard from "../Cards/HighlightImagesCard";

const ApartmentSingleHighlightInfo: FC<IApartmentSingleHighlightInfo> = ({
	iconGrid,
	weeklyInfo,
	buttonLink,
	monthlyInfo,
	imageGallery,
	lettingCompany,
	highlightImages,
	rightSectionTitle,
	heroBackgroundImage,
}) => {
	const [activeSlide, setActiveSlide] = useState(0);
	const [activeImage, setActiveImage] = useState<IApartmentImage | null>(null);

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
			<motion.div
				initial={initial}
				whileInView={fadeInUp}
				viewport={{once: true}}
				className="w-full lg:w-[35%]"
			>
				{/* Brief Information */}
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="flex-col hidden p-8 bg-white sm:flex rounded-xl h-fit"
				>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="flex flex-wrap items-center mb-2"
					>
						<h4 className="mb-3 text-goldPrime text-tiny">
							{rightSectionTitle}
						</h4>
					</motion.div>
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="mb-4 text-base text-black"
					>
						{lettingCompany}
					</motion.h3>

					{iconGrid?.length > 0 ? (
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="flex flex-row items-center justify-around gap-2 p-3 rounded-xl bg-lightGrey"
						>
							{iconGrid?.map((item, keys) => (
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									key={keys}
									className="flex flex-row items-center justify-center gap-2"
								>
									<Image
										alt={item?.card?.icon?.altText}
										src={item?.card?.icon?.sourceUrl}
										width={item?.card?.icon?.mediaDetails?.width}
										height={item?.card?.icon?.mediaDetails?.height}
										className={
											item?.card?.icon?.sourceUrl
												? `block w-[25px] h-[25px] object-contain object-center`
												: `hidden`
										}
									/>
									<h3 className="text-sm font-extrabold text-black">
										{item?.card?.text}
									</h3>
								</motion.div>
							))}
						</motion.div>
					) : (
						<></>
					)}

					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex items-center justify-around gap-8 my-12"
					>
						<motion.div
							initial={initial}
							viewport={{once: true}}
							whileInView={fadeInUp}
							className="flex flex-col"
						>
							<h5 className="mb-2 text-sm text-black">{monthlyInfo?.title}</h5>
							<motion.span
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
							>
								<span className="text-lg font-extrabold leading-none text-green-dark">
									{monthlyInfo?.rent}
									<span className="text-base">/ monthly</span>
								</span>
							</motion.span>
						</motion.div>
						<motion.div
							initial={initial}
							viewport={{once: true}}
							whileInView={fadeInUp}
							className="flex flex-col"
						>
							<h5 className="mb-2 text-sm text-black">{weeklyInfo?.title}</h5>
							<motion.span
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
							>
								<span className="text-lg font-extrabold leading-none text-green-dark">
									{weeklyInfo?.rent}
									<span className="text-base">/ weekly</span>
								</span>
							</motion.span>
						</motion.div>
					</motion.div>

					<motion.button
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className={buttonLink?.url ? `flex` : `hidden`}
					>
						<Link
							href={buttonLink?.url}
							target={buttonLink?.target}
							className="px-8 py-2.5 text-center tracking-wider font-semibold w-full mx-auto text-white uppercase rounded-lg transition-all duration-200 ease-in-out text-tiny bg-green-Two hover:bg-green-default"
						>
							{buttonLink?.title}
						</Link>
					</motion.button>
				</motion.div>

				{/* Highlight Images */}
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="grid items-center justify-center max-w-4xl grid-cols-2 gap-2 mt-4"
				>
					{highlightImages?.length > 0 ? (
						highlightImages?.map((item, keys) => (
							<HighlightImagesCard
								key={keys}
								image={item?.image}
								tailwindStyling={`w-full rounded-lg h-[200px] object-cover object-center`}
							/>
						))
					) : (
						<></>
					)}
					{/* View alL Images */}
					<motion.button
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="w-full"
						onClick={() =>
							imageClickHandler({
								url: imageGallery[0]?.image?.sourceUrl,
								alt: imageGallery[0]?.image?.altText,
							})
						}
					>
						<div
							className="relative flex items-center justify-center px-4 bg-center bg-no-repeat bg-cover w-full h-[200px] rounded-xl"
							style={{
								backgroundImage: `url("${
									imageGallery[0]?.image?.sourceUrl
										? imageGallery[0]?.image?.sourceUrl
										: heroBackgroundImage?.sourceUrl
								}")`,
							}}
						>
							<div className="absolute top-0 bottom-0 left-0 w-full h-full opacity-75 bg-gradient-to-b from-green-dark from-20% via-green-dark via-60% to-transparent to-100% rounded-xl" />

							<h3 className="absolute w-full max-w-[7.5rem] text-base text-center text-white">
								View all {imageGallery?.length} photos
							</h3>
						</div>
					</motion.button>
					<LazyMotion features={domMax}>
						<AnimatePresence>
							{activeImage && (
								<>
									<motion.div
										initial={{opacity: 0}}
										animate={{opacity: 1}}
										exit={{opacity: 0}}
										className="fixed top-0 left-0 z-[995] w-full h-full bg-black bg-opacity-90"
									/>
									<div className="fixed top-0 left-0 z-[996] flex w-full h-full px-4 py-24 overflow-y-scroll">
										<div className="relative m-auto">
											{/* Prev */}
											<motion.button
												initial={{opacity: 0}}
												animate={{opacity: 1}}
												exit={{opacity: 0}}
												className="absolute z-10 w-8 left-[50px] lg:left-[-60px] transform -translate-y-1/2 bottom-[-75px] sx:bottom-[-100px] md:bottom-[-115px] lg:bottom-0 lg:top-1/2 md:w-12"
												onClick={() => arrowModalHandler("prev")}
											>
												<Image
													width={500}
													height={500}
													src="/svg/circle-arrow-green.svg"
													alt="White arrow in a green circle"
													className="transition-opacity duration-200 ease-in-out hover:opacity-70"
												/>
											</motion.button>
											{/* Close Modal */}
											<motion.button
												initial={{opacity: 0}}
												animate={{opacity: 1}}
												exit={{opacity: 0}}
												onClick={closeHandler}
												className="absolute right-0 w-8 text-green-default cursor-pointer -top-12 hover:text-green-Two"
											>
												<Image
													width={500}
													height={500}
													src="/svg/cross.svg"
													alt="White arrow in a green circle"
													className="transition-opacity duration-200 ease-in-out hover:opacity-70"
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
												className="absolute z-10 w-8 right-[50px] lg:right-[-60px] transform rotate-180 -translate-y-1/2 bottom-[-75px] sx:bottom-[-100px] md:bottom-[-115px] lg:bottom-0 lg:top-1/2 md:w-12"
												onClick={() => arrowModalHandler("next")}
											>
												<Image
													width={500}
													height={500}
													src="/svg/circle-arrow-green.svg"
													alt="White arrow in a green circle"
													className="transition-opacity duration-200 ease-in-out hover:opacity-70"
												/>
											</motion.button>
										</div>
									</div>
								</>
							)}
						</AnimatePresence>
					</LazyMotion>
				</motion.div>
			</motion.div>
		</>
	);
};

export default ApartmentSingleHighlightInfo;
