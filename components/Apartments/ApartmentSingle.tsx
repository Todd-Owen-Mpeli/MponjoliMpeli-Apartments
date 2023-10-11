// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IApartmentSingle} from "@/types/components";
import {initial, stagger} from "../../animations/animations";

// Styling
import styles from "../../styles/components/Apartment.module.scss";

// Components
import ApartmentGallerySlider from "./ApartmentGallerySlider";
import ApartmentSingleDescription from "./ApartmentSingleDescription";
import ApartmentSingleHighlightInfo from "./ApartmentSingleHighlightInfo";

const ApartmentSingle: FC<IApartmentSingle> = ({
	mainContent,
	imageGallery,
	heroBackgroundImage,
}) => {
	return (
		<section
			className={styles.apartmentSingleCard + ` py-10 overflow-hidden bg-white`}
		>
			<motion.div
				initial={initial}
				whileInView={stagger}
				viewport={{once: true}}
				className="container flex flex-col px-4 mx-auto"
			>
				{/* Image Gallery */}
				<ApartmentGallerySlider imageGallery={imageGallery} />

				{/* Main Content */}
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="flex flex-col gap-8 px-0 py-6 sm:px-4 lg:flex-row"
				>
					{/* Left Section */}
					<ApartmentSingleDescription
						title={mainContent?.title}
						iconGrid={mainContent?.iconGrid}
						location={mainContent?.location}
						weeklyInfo={mainContent?.weeklyInfo}
						buttonLink={mainContent?.buttonLink}
						monthlyInfo={mainContent?.monthlyInfo}
						description={mainContent?.description}
						keyInfoImages={mainContent?.keyInfoImages}
						lettingCompany={mainContent?.lettingCompany}
						lettingDetails={mainContent?.lettingDetails}
						rightSectionTitle={mainContent?.rightSectionTitle}
					/>

					{/* Right Section */}
					<ApartmentSingleHighlightInfo
						imageGallery={imageGallery}
						iconGrid={mainContent?.iconGrid}
						weeklyInfo={mainContent?.weeklyInfo}
						buttonLink={mainContent?.buttonLink}
						monthlyInfo={mainContent?.monthlyInfo}
						heroBackgroundImage={heroBackgroundImage}
						lettingCompany={mainContent?.lettingCompany}
						highlightImages={mainContent?.highlightImages}
						rightSectionTitle={mainContent?.rightSectionTitle}
					/>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default ApartmentSingle;
