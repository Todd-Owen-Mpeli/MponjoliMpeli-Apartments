// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IApartmentSingleDescription} from "@/types/components";
import {initial, stagger, fadeInUp} from "../../animations/animations";

// Components
import Paragraph from "../../components/Elements/Paragraph";
import HighlightImagesCard from "../Cards/HighlightImagesCard";

const ApartmentSingleDescription: FC<IApartmentSingleDescription> = ({
	title,
	iconGrid,
	location,
	weeklyInfo,
	buttonLink,
	monthlyInfo,
	description,
	keyInfoImages,
	lettingCompany,
	lettingDetails,
	rightSectionTitle,
}) => {
	return (
		<>
			<motion.div
				initial={initial}
				whileInView={fadeInUp}
				viewport={{once: true}}
				className="flex flex-col px-2 sm:px-4 py-8 w-full lg:w-[65%]"
			>
				{/* Mobile View */}
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="flex flex-col p-8 mb-8 bg-white sm:hidden rounded-xl h-fit"
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
									<h3 className="text-sm text-black">{item?.card?.text}</h3>
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
							<h5 className="mb-2 text-sm text-black ">{monthlyInfo?.title}</h5>
							<motion.span
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
							>
								<span className="text-lg font-extrabold leading-none text-darkBlue">
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
								<span className="text-lg font-extrabold leading-none text-darkBlue">
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
							className="px-8 py-2.5 text-center w-full mx-auto text-white uppercase rounded-lg transition-all duration-200 ease-in-out text-tiny bg-blue hover:bg-darkBlue"
						>
							{buttonLink?.title}
						</Link>
					</motion.button>
				</motion.div>

				<motion.h2
					initial={initial}
					viewport={{once: true}}
					whileInView={fadeInUp}
					className="text-4xl lg:text-5xl mb-6 tracking-tighter text-black"
				>
					{title}
				</motion.h2>

				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="flex flex-row items-center justify-start gap-4"
				>
					<motion.svg
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						width="256"
						height="256"
						viewBox="0 0 256 256"
						className="w-5 h-5 "
					>
						<defs></defs>
						<g
							style={{
								stroke: "none",
								strokeWidth: "0",
								strokeDasharray: "none",
								strokeLinecap: "butt",
								strokeLinejoin: "miter",
								strokeMiterlimit: "10",
								fill: "none",
								fillRule: "nonzero",
								opacity: "1",
							}}
							transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
						>
							<path
								d="M 45 90 c -1.062 0 -2.043 -0.561 -2.583 -1.475 l -4.471 -7.563 c -9.222 -15.591 -17.933 -30.317 -20.893 -36.258 c -2.086 -4.277 -3.138 -8.852 -3.138 -13.62 C 13.916 13.944 27.86 0 45 0 c 17.141 0 31.085 13.944 31.085 31.084 c 0 4.764 -1.051 9.339 -3.124 13.596 c -0.021 0.042 -0.042 0.083 -0.063 0.124 c -3.007 6.005 -11.672 20.654 -20.843 36.159 l -4.472 7.563 C 47.044 89.439 46.062 90 45 90 z M 45 6 C 31.168 6 19.916 17.253 19.916 31.084 c 0 3.848 0.847 7.539 2.518 10.969 c 2.852 5.721 11.909 21.033 20.667 35.839 L 45 81.104 l 1.89 -3.196 c 8.763 -14.813 17.823 -30.131 20.687 -35.879 c 0.012 -0.022 0.023 -0.045 0.035 -0.067 c 1.642 -3.406 2.474 -7.065 2.474 -10.877 C 70.085 17.253 58.832 6 45 6 z"
								style={{
									stroke: "none",
									strokeWidth: "1",
									strokeDasharray: "none",
									strokeLinecap: "butt",
									strokeLinejoin: "miter",
									strokeMiterlimit: "10",
									fill: "rgb(0,0,0)",
									fillRule: "nonzero",
									opacity: "1",
								}}
								transform=" matrix(1 0 0 1 0 0) "
								strokeLinecap="round"
							/>
							<path
								d="M 45 44.597 c -8.076 0 -14.646 -6.57 -14.646 -14.646 S 36.924 15.306 45 15.306 c 8.075 0 14.646 6.57 14.646 14.646 S 53.075 44.597 45 44.597 z M 45 21.306 c -4.767 0 -8.646 3.878 -8.646 8.646 s 3.878 8.646 8.646 8.646 c 4.768 0 8.646 -3.878 8.646 -8.646 S 49.768 21.306 45 21.306 z"
								style={{
									stroke: "none",
									strokeWidth: "1",
									strokeDasharray: "none",
									strokeLinecap: "butt",
									strokeLinejoin: "miter",
									strokeMiterlimit: "10",
									fill: "rgb(0,0,0)",
									fillRule: "nonzero",
									opacity: "1",
								}}
								transform=" matrix(1 0 0 1 0 0) "
								strokeLinecap="round"
							/>
						</g>
					</motion.svg>
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="text-base text-black"
					>
						{location}
					</motion.h3>
				</motion.div>

				<Paragraph
					content={description}
					tailwindStyling="w-full lg:max-w-3xl mt-8 text-black text-left text-base"
				/>

				<div className="grid items-center justify-center grid-cols-1 gap-2 py-4 sm:grid-cols-2">
					{lettingDetails?.length > 0 ? (
						lettingDetails.map((item, keys) => (
							<Paragraph
								key={keys}
								content={item?.bulletPoint}
								tailwindStyling="w-full lg:max-w-2xl text-black text-left text-base"
							/>
						))
					) : (
						<></>
					)}
				</div>

				<div className="grid max-w-4xl grid-cols-2 gap-2 mt-4 lg:flex lg:flex-row">
					{keyInfoImages?.length > 0 ? (
						keyInfoImages?.map((item, keys) => (
							<HighlightImagesCard
								key={keys}
								image={item?.image}
								tailwindStyling={`rounded-lg w-full lg:w-[200px] h-[150px] lg:h-[125px] object-cover object-center`}
							/>
						))
					) : (
						<></>
					)}
				</div>
			</motion.div>
		</>
	);
};

export default ApartmentSingleDescription;
