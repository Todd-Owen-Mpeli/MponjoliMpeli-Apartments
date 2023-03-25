// Import
import Link from "next/link";
import Image from "next/image";
import {gql} from "@apollo/client";
import {motion} from "framer-motion";
import {client} from "../config/apollo";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getMainMenuLinks,
	getHeroMenuLinks,
	getFooterMenuLinks,
	getLocationMenuLinks,
} from "../lib/MenuLinks";

// Components
import Logos from "@/components/Logos";
import Footer from "@/components/Footer";
import HeroTwo from "@/components/HeroTwo";
import ImageGrid from "@/components/ImageGrid";
import MetaTag from "../components/Meta/MetaTag";
import IntroSection from "@/components/IntroSection";
import ContactBanner from "@/components/ContactBanner";
import Paragraph from "../components/Elements/Paragraph";

const firstTimeLettings = ({
	seo,
	content,
	pageTitle,
	mainMenuLinks,
	heroMenuLinks,
	footerMenuLinks,
	locationMenuLinks,
	themesOptionsContent,
}: any) => {
	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
		>
			{/* <!--===== META TAG =====--> */}
			<MetaTag title={pageTitle} seo={seo} />

			<main>
				<HeroTwo
					title={content?.heroSection?.title}
					paragraph={content?.heroSection?.paragraph}
					mainMenuLinks={mainMenuLinks?.mainMenuLinks}
					heroMenuLinks={heroMenuLinks?.heroMenuLinks}
					locationMenuLinks={locationMenuLinks?.locationMenuLinks}
					twitterLink={themesOptionsContent?.themesOptions?.twitterLink}
					mbeziContent={themesOptionsContent?.themesOptions?.mbeziContent}
					linkedinLink={themesOptionsContent?.themesOptions?.linkedinLink}
					facebookLink={themesOptionsContent?.themesOptions?.facebookLink}
					instagramLink={themesOptionsContent?.themesOptions?.instagramLink}
					mbweniContent={themesOptionsContent?.themesOptions?.mbweniContent}
					backgroundImage={content?.heroSection?.backgroundImage?.sourceUrl}
				/>

				<IntroSection
					title={content?.introSection?.title}
					image={content?.introSection?.image}
					subtitle={content?.introSection?.subtitle}
					imageTwo={content?.introSection?.imageTwo}
					paragraph={content?.introSection?.paragraph}
					buttonLink={content?.introSection?.buttonLink}
					imageLarge={content?.introSection?.imageLarge}
				/>

				<section className="py-20 bg-goldPrimeDark">
					<div className="container px-4 mx-auto">
						<div className="flex flex-wrap mb-12 -mx-3">
							<div className="w-full h-full px-3 mb-6 lg:w-1/2">
								<div className="p-12 text-center rounded bg-goldPrime md:p-20">
									<span className="px-4 py-3 font-semibold tracking-[0.25rem] text-white uppercase rounded-full text-tiny bg-darkGreen">
										Startup
									</span>
									<h3 className="mt-10 mb-2 text-2xl font-bold text-darkGreen">
										Curabitur vestibulum odio maximus.
									</h3>
									<Paragraph
										content={`<p>Aenean tempus orci eu est ultrices hendrerit. Fusce
											suscipit, leo a semper venenatis, felis urna pulvinar
											nibh, vitae porta erat risus sed mauris. Vestibulum
											vehicula leo eget libero eleifend, quis dictum eros
											bibendum. Maecenas convallis tempor varius.</p>`}
										tailwindStyling="mb-8 w-full lg:max-w-2xl mx-auto mt-4 py-8 text-darkGreen text-center font-semibold text-medium"
									/>
								</div>
							</div>
							<div className="w-full h-full px-3 mb-6 lg:w-1/2">
								<div className="px-8 py-12 text-center rounded md:p-20 bg-goldPrime">
									<span className="px-4 py-3 font-semibold tracking-[0.25rem] text-white uppercase rounded-full text-tiny bg-darkGreen">
										Development
									</span>
									<h3 className="mt-10 mb-2 text-2xl font-bold text-darkGreen">
										Curabitur vestibulum odio maximus.
									</h3>
									<Paragraph
										content={`<p>Aenean tempus orci eu est ultrices hendrerit. Fusce
											suscipit, leo a semper venenatis, felis urna pulvinar
											nibh, vitae porta erat risus sed mauris. Vestibulum
											vehicula leo eget libero eleifend, quis dictum eros
											bibendum. Maecenas convallis tempor varius.</p>`}
										tailwindStyling="mb-8 w-full lg:max-w-2xl mx-auto mt-4 py-8 text-darkGreen text-center text-medium"
									/>
								</div>
							</div>
							<div className="w-full h-full px-3 mb-6 lg:w-1/2">
								<div className="px-8 py-12 text-center rounded md:p-20 bg-goldPrime">
									<span className="px-4 py-3 font-semibold tracking-[0.25rem] text-white uppercase rounded-full text-tiny bg-darkGreen">
										Startup
									</span>
									<h3 className="mt-10 mb-2 text-2xl font-bold text-darkGreen">
										Curabitur vestibulum odio maximus.
									</h3>
									<Paragraph
										content={`<p>Aenean tempus orci eu est ultrices hendrerit. Fusce
											suscipit, leo a semper venenatis, felis urna pulvinar
											nibh, vitae porta erat risus sed mauris. Vestibulum
											vehicula leo eget libero eleifend, quis dictum eros
											bibendum. Maecenas convallis tempor varius.</p>`}
										tailwindStyling="mb-8 w-full lg:max-w-2xl mx-auto mt-4 py-8 text-darkGreen text-center text-medium"
									/>
								</div>
							</div>
							<div className="w-full h-full px-3 mb-6 lg:w-1/2">
								<div className="px-8 py-12 text-center rounded md:p-20 bg-goldPrime">
									<span className="px-4 py-3 font-semibold tracking-[0.25rem] text-white uppercase rounded-full text-tiny bg-darkGreen">
										Development
									</span>
									<h3 className="mt-10 mb-2 text-2xl font-bold text-darkGreen">
										Curabitur vestibulum odio maximus.
									</h3>
									<Paragraph
										content={`<p>Aenean tempus orci eu est ultrices hendrerit. Fusce
											suscipit, leo a semper venenatis, felis urna pulvinar
											nibh, vitae porta erat risus sed mauris. Vestibulum
											vehicula leo eget libero eleifend, quis dictum eros
											bibendum. Maecenas convallis tempor varius.</p>`}
										tailwindStyling="mb-8 w-full lg:max-w-2xl mx-auto mt-4 py-8 text-darkGreen text-center text-medium"
									/>
								</div>
							</div>
							<div className="w-full h-full px-3 mb-6 lg:w-1/2">
								<div className="px-8 py-12 text-center rounded md:p-20 bg-goldPrime">
									<span className="px-4 py-3 font-semibold tracking-[0.25rem] text-white uppercase rounded-full text-tiny bg-darkGreen">
										Startup
									</span>
									<h3 className="mt-10 mb-2 text-2xl font-bold text-darkGreen">
										Curabitur vestibulum odio maximus.
									</h3>
									<Paragraph
										content={`<p>Aenean tempus orci eu est ultrices hendrerit. Fusce
											suscipit, leo a semper venenatis, felis urna pulvinar
											nibh, vitae porta erat risus sed mauris. Vestibulum
											vehicula leo eget libero eleifend, quis dictum eros
											bibendum. Maecenas convallis tempor varius.</p>`}
										tailwindStyling="mb-8 w-full lg:max-w-2xl mx-auto mt-4 py-8 text-darkGreen text-center text-medium"
									/>
								</div>
							</div>
							<div className="w-full h-full px-3 mb-6 lg:w-1/2">
								<div className="px-8 py-12 text-center rounded md:p-20 bg-goldPrime">
									<span className="px-4 py-3 font-semibold tracking-[0.25rem] text-white uppercase rounded-full text-tiny bg-darkGreen">
										Development
									</span>
									<h3 className="mt-10 mb-2 text-2xl font-bold text-darkGreen">
										Curabitur vestibulum odio maximus.
									</h3>
									<Paragraph
										content={`<p>Aenean tempus orci eu est ultrices hendrerit. Fusce
											suscipit, leo a semper venenatis, felis urna pulvinar
											nibh, vitae porta erat risus sed mauris. Vestibulum
											vehicula leo eget libero eleifend, quis dictum eros
											bibendum. Maecenas convallis tempor varius.</p>`}
										tailwindStyling="mb-8 w-full lg:max-w-2xl mx-auto mt-4 py-8 text-darkGreen text-center text-medium"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Logos
					title={content?.trustedBrands?.title}
					logoGrid={content?.trustedBrands?.logos}
				/>

				<ContactBanner
					title={content?.contactBanner?.title}
					paragraph={content?.contactBanner?.paragraph}
					buttonLink={content?.contactBanner?.buttonLink}
					backgroundImage={content?.contactBanner?.image?.sourceUrl}
				/>

				<ImageGrid
					image={content?.imageGrid?.image}
					imageTwo={content?.imageGrid?.imageTwo}
					imageThree={content?.imageGrid?.imageThree}
					imageFour={content?.imageGrid?.imageFour}
					imageFive={content?.imageGrid?.imageFive}
					imageSix={content?.imageGrid?.imageSix}
				/>

				<Footer
					footerMenuLinks={footerMenuLinks?.footerMenuLinks}
					twitterLink={themesOptionsContent?.themesOptions?.twitterLink}
					linkedinLink={themesOptionsContent?.themesOptions?.linkedinLink}
					facebookLink={themesOptionsContent?.themesOptions?.facebookLink}
					instagramLink={themesOptionsContent?.themesOptions?.instagramLink}
				/>
			</main>
		</motion.div>
	);
};

export default firstTimeLettings;

export async function getStaticProps() {
	const getFirstTimeLettingsPageContent: any = gql`
		{
			pageTitle: pages(where: {id: 447, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 447, status: PUBLISH}) {
				edges {
					node {
						seo {
							canonical
							cornerstone
							focuskw
							fullHead
							metaDesc
							metaKeywords
							metaRobotsNofollow
							metaRobotsNoindex
							opengraphAuthor
							opengraphDescription
							opengraphImage {
								mediaItemUrl
							}
							opengraphModifiedTime
							opengraphPublishedTime
							opengraphPublisher
							opengraphSiteName
							opengraphTitle
							opengraphType
							opengraphUrl
							readingTime
							title
							twitterDescription
							twitterTitle
							twitterImage {
								mediaItemUrl
							}
						}
						firstTimeLettingsPage {
							heroSection {
								title
								paragraph
								backgroundImage {
									sourceUrl
								}
							}
							introSection {
								title
								subtitle
								paragraph
								buttonLink {
									url
									title
									target
								}
								image {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
								}
								imageTwo {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
								}
								imageLarge {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
								}
							}
							trustedBrands {
								title
								logos {
									image {
										altText
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
							}
							contactBanner {
								title
								paragraph
								image {
									sourceUrl
								}
								buttonLink {
									url
									title
									target
								}
							}
							imageGrid {
								image {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
								}
								imageTwo {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
								}
								imageThree {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
								}
								imageFour {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
								}
								imageFive {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
								}
								imageSix {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
								}
							}
						}
					}
				}
			}
		}
	`;

	const response: any = await client.query({
		query: getFirstTimeLettingsPageContent,
	});

	const mainMenuLinks: object = await getMainMenuLinks();
	const heroMenuLinks: object = await getHeroMenuLinks();
	const footerMenuLinks: object = await getFooterMenuLinks();
	const locationMenuLinks: object = await getLocationMenuLinks();
	const themesOptionsContent: object = await getThemesOptionsContent();

	return {
		props: {
			mainMenuLinks,
			heroMenuLinks,
			footerMenuLinks,
			locationMenuLinks,
			themesOptionsContent,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			content:
				response.data?.mainContent?.edges[0]?.node?.firstTimeLettingsPage,
		},
		revalidate: 60,
	};
}
