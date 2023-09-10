"use Client";

// Import
import {FC} from "react";
import {usePageContext} from "@/context/pages";

// Components
import CTA from "../CTA";
import Hero from "../Hero";
import Blogs from "../Blogs";
import HeroTwo from "../HeroTwo";
import ImageGrid from "../ImageGrid";
import TitleStats from "../TitleStats";
import ContactInfo from "../ContactInfo";
import ContactForm from "../ContactForm";
import ApartmentsGrid from "../ApartmentsGrid";
import Sustainability from "../Sustainability";
import ViewApartments from "../ViewApartments";
import TitleParagraph from "../TitleParagraph";
import IntroTitleImage from "../IntroTitleImage";
import ApartmentSingle from "../ApartmentSingle";
import ErrorPage from "@/components/Global/ErrorPage";
import LargeTitleParagraph from "../LargeTitleParagraph";
import ContentGridServices from "../ContentGridServices";
import ApartmentLocationMap from "../ApartmentLocationMap";
import ContentBackgroundImage from "../ContentBackgroundImage";
import ContentButtonLinkTwoImages from "../ContentButtonLinkTwoImages";
import ContentLargeBackgroundImage from "../ContentLargeBackgroundImage";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent = content.postTypeFlexibleContent;

	return (
		<>
			{content.content.length > 0 ? (
				content.content.map((item: any, keys: any) => (
					<section key={keys}>
						{item?.fieldGroupName === `${FlexibleContent}_HeroSection` ? (
							<>
								<Hero
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									buttonLinkTwo={item?.buttonLinkTwo}
									backgroundImage={item?.backgroundImage}
									backgroundVideoUrl={item?.backgroundVideoUrl}
									backgroundImageOrVideo={item?.backgroundImageOrVideo}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_HeroSectionTwo` ? (
							<>
								<HeroTwo
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage}
									backgroundVideoUrl={item?.backgroundVideoUrl}
									backgroundImageOrVideo={item?.backgroundImageOrVideo}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_IntroSection` ? (
							<></>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_IntroTitleImage` ? (
							<>
								<IntroTitleImage
									title={item?.title}
									image={item?.image}
									subtitle={item?.subtitle}
									titleEnd={item?.titleEnd}
									paragraph={item?.paragraph}
									imageLarge={item?.imageLarge}
									titleStart={item?.titleStart}
									titleMiddle={item?.titleMiddle}
									smallImageOne={item?.smallImageOne}
									smallImageTwo={item?.smallImageTwo}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_LargeTitleParagraph` ? (
							<>
								<LargeTitleParagraph
									titleEnd={item?.titleEnd}
									paragraph={item?.paragraph}
									titleStart={item?.titleStart}
									titleMiddle={item?.titleMiddle}
									smallImageOne={item?.smallImageOne}
									smallImageTwo={item?.smallImageTwo}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_ApartmentsGrid` ? (
							<>
								<ApartmentsGrid />
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_ViewApartments` ? (
							<>
								<ViewApartments
									title={item?.title}
									image={item?.image}
									subtitle={item?.subtitle}
									buttonLink={item?.buttonLink}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_TitleStats` ? (
							<>
								<TitleStats
									title={item?.title}
									image={item?.image}
									contentGrid={item?.contentGrid}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_ApartmentLocationMap` ? (
							<>
								<ApartmentLocationMap
									apartmentDisplayOptions={item?.apartmentDisplayOptions}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_ContentGridServices` ? (
							<>
								<ContentGridServices
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									services={item?.servicesGrid}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_ContentImageGrid` ? (
							<>
								<ContentBackgroundImage gridContent={item?.gridContent} />
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_ContentButtonLinkTwoImages` ? (
							<>
								<ContentButtonLinkTwoImages
									title={item?.title}
									paragraph={item?.paragraph}
									smallImage={item?.smallImage}
									largeImage={item?.largeImage}
									buttonLink={item?.buttonLink}
									paragraphTwo={item?.paragraphTwo}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_ContentLargeBackgroundImage` ? (
							<>
								<ContentLargeBackgroundImage
									title={item?.title}
									paragraph={item?.paragraph}
									contentBlockOne={item?.contentBlockOne}
									contentBlockTwo={item?.contentBlockTwo}
									backgroundImage={item?.backgroundImage}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_SingleApartmentMainContent` ? (
							<>
								<ApartmentSingle
									mainContent={item?.mainContent}
									imageGallery={item?.imageGallery}
									heroBackgroundImage={item?.heroBackgroundImage}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_TitleParagraph` ? (
							<>
								<TitleParagraph
									title={item?.title}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_TitleParagraph` ? (
							<>
								<TitleParagraph
									title={item?.title}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_ImageGrid` ? (
							<>
								<ImageGrid
									image={item?.image}
									imageTwo={item?.imageTwo}
									imageSix={item?.imageSix}
									imageFive={item?.imageFive}
									imageFour={item?.imageFour}
									imageThree={item?.imageThree}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_BlogsGrid` ? (
							<>
								<Blogs />
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Cta` ? (
							<>
								<CTA
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_ContactInfo` ? (
							<>
								<ContactInfo
									title={item?.title}
									image={item?.image}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_ContactForm` ? (
							<>
								<ContactForm title={item?.title} />
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Sustainability` ? (
							<>
								<Sustainability
									image={item?.image}
									title={item?.title}
									subtitle={item?.subtitle}
									imageText={item?.imageText}
									paragraph={item?.paragraph}
									percentage={item?.percentage}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_ErrorPageContent` ? (
							<>
								<ErrorPage
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : (
							<></>
						)}
					</section>
				))
			) : (
				<></>
			)}
		</>
	);
};

export default RenderFlexibleContent;
