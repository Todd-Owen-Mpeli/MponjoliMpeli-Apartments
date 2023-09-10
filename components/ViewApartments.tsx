// Import
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {IViewApartments} from "@/types/components";
import {fadeInUp, stagger, initial} from "../animations/animations";

// Components
import ApartmentCard from "./Cards/ApartmentCard";

const ViewApartments: FC<IViewApartments> = ({
	title,
	image,
	subtitle,
	buttonLink,
}) => {
	const globalContext = useGlobalContext();
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
								className="flex  items-end justify-center w-fit py-3 px-6 text-center font-medium text-base text-goldPrimeDarker bg-transparent hover:bg-goldPrimeDarker hover:text-white border border-goldPrimeDarker hover:border-goldPrimeDarker rounded-full transition duration-200"
							>
								{buttonLink?.title}
							</Link>
						</>
					</motion.div>
					<div className="flex gap-16 py-12 items-center">
						{globalContext?.apartmentsContent?.length > 0 ? (
							globalContext?.apartmentsContent?.map(
								(item: any, keys: number) => (
									<Fragment key={keys}>
										<ApartmentCard
											link={item?.node?.uri}
											title={item?.node?.title}
											backgroundImage={
												item?.node?.featuredImage?.node?.sourceUrl
											}
										/>
									</Fragment>
								)
							)
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default ViewApartments;
