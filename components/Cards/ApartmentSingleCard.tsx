import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeIn, fadeInUp} from "../../animations/animations";

// Components
import ApartSingleCardTwo from "./ApartSingleCardTwo";
import Paragraph from "@/components/Elements/Paragraph";

// Styling
import styles from "../../styles/components/Apartment.module.scss";

interface IProps {
	location: string;
	briefInfo: string;
	monthlyPrice: string;
	iconContent: {
		type: string;
		bedrooms: string;
		bathrooms: string;
	};
	lettingDetails: [
		{
			id: string;
			bulletpoint: string;
		}
	];
}

const ApartmentSingleCard: FC<IProps> = ({
	location,
	briefInfo,
	iconContent,
	monthlyPrice,
	lettingDetails,
}) => {
	return (
		<section className={styles.apartmentSingleCard}>
			<div className="container px-4 mx-auto">
				<div className="px-8 py-10 bg-white">
					<div className="mx-auto max-w-7xl">
						<div className="flex flex-wrap items-center justify-center -m-8">
							<div className="w-full p-8 md:w-1/2">
								<div className="py-9 md:max-w-md lg:max-w-2xl">
									<motion.span
										variants={fadeIn}
										className="inline-block mb-5 text-sm font-bold tracking-widest uppercase text-goldPrimeDark"
									>
										What you need to know
									</motion.span>
									<motion.h2
										variants={fadeInUp}
										className="mb-4 text-4xl font-black tracking-tight text-black"
									>
										Key information
									</motion.h2>
									<Paragraph
										content={`<p> This apartment is a ${briefInfo}, located on ${location} with a monthly letting price of ${monthlyPrice}. This apartment comes with  ${iconContent?.bedrooms} and  ${iconContent?.bathrooms}.</p>`}
										tailwindStyling="mb-8 text-black"
									/>
									<div className="flex flex-wrap">
										{lettingDetails?.map((keys) => (
											<ApartSingleCardTwo
												bulletpoint={keys?.bulletpoint}
												key={keys?.id || keys?.bulletpoint}
											/>
										))}
									</div>
								</div>
							</div>
							<div className="w-full p-8 h-fit md:w-1/2">
								<div className="h-full px-8 py-24 text-center bg-green-flat">
									<div className="flex flex-col justify-between h-full">
										<div className="flex-initial mb-10">
											<span className="inline-block mb-3.5 text-goldPrime text-center font-semibold uppercase">
												Starting at
											</span>
											<h3 className="mx-auto mb-4 text-5xl font-bold tracking-wider lg:max-w-sm md:text-7xl text-goldPrime">
												{monthlyPrice}
											</h3>
											<h3 className="my-2 text-base font-semibold text-white">
												{briefInfo}
											</h3>
											<h3 className="my-2 text-base font-semibold text-white">
												{location}
											</h3>
										</div>
										<div className="flex-initial">
											<div className="flex flex-wrap justify-center -m-2">
												<div className="w-full p-2">
													<Link
														className="block md:max-w-xs mx-auto w-full px-8 py-3.5 text-lg text-center text-white  tracking-wider font-semibold  rounded-lg bg-goldPrime hover:bg-goldPrimeDark focus:ring-4 focus:ring-goldPrimeDark"
														href={`/`}
													>
														Purchase now
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ApartmentSingleCard;
