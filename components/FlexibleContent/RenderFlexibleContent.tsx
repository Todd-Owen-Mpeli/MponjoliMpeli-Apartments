// Import
import {useContentContext} from "@/context/context";

// Components
import CTA from "../CTA";
import Hero from "../Hero";
import Logos from "../Logos";
import Blogs from "../Blogs";
import HeroTwo from "../HeroTwo";
import HeroThree from "../HeroThree";
import ImageGrid from "../ImageGrid";
import ErrorPage from "../ErrorPage";
import TextImage from "../TextImage";
import ContactInfo from "../ContactInfo";
import ContactForm from "../ContactForm";
import InfoContent from "../InfoContent";
import ContentStats from "../ContentStats";
import IntroSection from "../IntroSection";
import TextBoxImage from "../TextBoxImage";
import TextImageTwo from "../TextImageTwo";
import TextImageGrid from "../TextImageGrid";
import Sustainability from "../Sustainability";
import TitleParagraph from "../TitleParagraph";
import ApartmentsGrid from "../ApartmentsGrid";
import ApartmentSingle from "../ApartmentSingle";
import TitleParagraphTwo from "../TitleParagraphTwo";
import ArticleImageBanner from "../ArticleImageBanner";
import ContentBackgroundImage from "../ContentBackgroundImage";

const RenderFlexibleContent = () => {
	const content = useContentContext();

	const FlexibleContentComponent =
		"DefaultTemplate_Flexiblecontent_FlexibleContent";
	return (
		<>
			{content.content.length > 0 ? (
				content.content.map((item: any, keys: any) => (
					<div key={keys}>
						{item?.fieldGroupName ===
						`${FlexibleContentComponent}_HeroSection` ? (
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
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_HeroSectionTwo` ? (
							<>
								<HeroTwo
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage}
									backgroundVideoUrl={item?.backgroundVideoUrl}
									backgroundImageOrVideo={item?.backgroundImageOrVideo}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_HeroSectionThree` ? (
							<>
								<HeroThree
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage}
									backgroundVideoUrl={item?.backgroundVideoUrl}
									backgroundImageOrVideo={item?.backgroundImageOrVideo}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_IntroSection` ? (
							<>
								<IntroSection
									title={item?.title}
									image={item?.image}
									subtitle={item?.subtitle}
									imageTwo={item?.imageTwo}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									imageLarge={item?.imageLarge}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_TitleParagraph` ? (
							<>
								<TitleParagraph
									title={item?.title}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_TitleParagraphTwo` ? (
							<>
								<TitleParagraphTwo
									title={item?.title}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ContentStats` ? (
							<>
								<ContentStats
									title={item?.title}
									statsOne={item?.statsOne}
									paragraph={item?.paragraph}
									statsTwo={item?.statsTwo}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_FirstTimeLettings` ? (
							<>
								<TextBoxImage
									title={item?.title}
									image={item?.image}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_TextImage` ? (
							<>
								<TextImage
									title={item?.title}
									image={item?.image}
									paragraph={item?.paragraph}
									imageText={item?.imageText}
									imageTextTwo={item?.imageTextTwo}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_TextImageTwo` ? (
							<>
								<TextImageTwo
									title={item?.title}
									image={item?.image}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_InfoContent` ? (
							<>
								<InfoContent content={item?.content} />
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_JumboContent` ? (
							<>
								<TextImageGrid gridContent={item?.gridContent} />
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ContentImageGrid` ? (
							<>
								<ContentBackgroundImage gridContent={item?.gridContent} />
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ApartmentsGrid` ? (
							<>
								<ApartmentsGrid apartmentsGrid={item?.grid} />
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_SingleApartmentMainContent` ? (
							<>
								<ApartmentSingle
									mainContent={item?.mainContent}
									imageGallery={item?.imageGallery}
									heroBackgroundImage={item?.heroBackgroundImage}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_BlogsGrid` ? (
							<>
								<Blogs />
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ImageGrid` ? (
							<>
								<ImageGrid
									image={item?.image}
									imageTwo={item?.imageTwo}
									imageThree={item?.imageThree}
									imageFour={item?.imageFour}
									imageFive={item?.imageFive}
									imageSix={item?.imageSix}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_Sustainability` ? (
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
						  `${FlexibleContentComponent}_TrustedBrands` ? (
							<>
								<Logos title={item?.title} logoGrid={item?.logos} />
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ArticleImageBanner` ? (
							<>
								<ArticleImageBanner
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ContactInfo` ? (
							<>
								<ContactInfo />
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ContactForm` ? (
							<>
								<ContactForm title={item?.title} />
							</>
						) : item?.fieldGroupName === `${FlexibleContentComponent}_Cta` ? (
							<>
								<CTA
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ErrorPageContent` ? (
							<>
								<ErrorPage
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									buttonLinkTwo={item?.buttonLinkTwo}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : (
							<></>
						)}
					</div>
				))
			) : (
				<></>
			)}
		</>
	);
};

export default RenderFlexibleContent;
