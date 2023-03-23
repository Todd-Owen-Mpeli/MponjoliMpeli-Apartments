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
import Footer from "@/components/Footer";
import HeroTwo from "@/components/HeroTwo";
import TextImage from "@/components/TextImage";
import MetaTag from "../components/Meta/MetaTag";
import Paragraph from "../components/Elements/Paragraph";

import styles from "../styles/components/IntroSection.module.scss";
import ImageGrid from "@/components/ImageGrid";

const about = ({
	seo,
	content,
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
			<MetaTag title={`MponjoliMpeli`} seo={seo} />

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

				<TextImage
					title={content?.introSection?.title}
					image={content?.introSection?.image}
					imageTwo={content?.introSection?.imageTwo}
					paragraph={content?.introSection?.paragraph}
					imageLarge={content?.introSection?.imageLarge}
				/>

				<section className="py-16 bg-darkGreen overflow-hidden">
					<div className="container mx-auto px-0">
						<div className="flex flex-col items-center justify-center px-8">
							<div className="">
								<h2 className="text-white text-center font-[400] text-2xl sm:text-3xl lg:text-5xl">
									Grow fast, with us
								</h2>
								<Paragraph
									content={`<p>Having built multiple of new apartments over the years, we have also completed a similar number of conversion projects. A number of these have been recognized for excellence by the local planning authorities and have received prestigious awards.
									<br><br>
									MponjoliMpeli Apartments works closely with a team of highly trusted local consultants with a wealth of experience.
									<br><br>
									Our ethos is one of excellence, we strive to create beautiful homes that people will enjoy living within.
									</p>`}
									tailwindStyling="w-full lg:max-w-2xl mx-auto mt-4 py-8 text-white text-center sm:text-left text-medium"
								/>
							</div>
							{/* <div className="flex flex-wrap">
									<div className="w-full md:w-1/2 p-4">
										<div className="py-14 px-8 text-center h-full bg-gray-100 rounded-3xl">
											<div className="md:max-w-xs mx-auto">
												<h2 className="mb-6 text-5xl md:text-6xl lg:text-7xl text-grey font-black tracking-tight">
													<span className="text-transparent bg-clip-text bg-gradient-green-dark">
														98%
													</span>
												</h2>
												<h3 className="mb-3.5 text-xl text-grey font-bold">
													Average Satisfaction Rate
												</h3>
												<Paragraph
													content={`<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor</p>`}
													tailwindStyling="w-full lg:max-w-2xl mx-auto mt-4 py-8 text-white text-center sm:text-left text-medium"
												/>
											</div>
										</div>
									</div>
									<div className="w-full md:w-1/2 p-4">
										<div className="py-14 px-8 text-center h-full bg-gray-100 rounded-3xl">
											<div className="md:max-w-xs mx-auto">
												<h2 className="mb-6 text-5xl md:text-6xl lg:text-7xl text-grey font-black tracking-tight">
													<span className="text-transparent bg-clip-text bg-gradient-orange">
														117%
													</span>
												</h2>
												<h3 className="mb-3.5 text-xl text-grey font-bold">
													Average ROI on Ads
												</h3>
												<Paragraph
													content={`<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor</p>`}
													tailwindStyling="w-full lg:max-w-2xl mx-auto mt-4 py-8 text-white text-center sm:text-left text-medium"
												/>
											</div>
										</div>
									</div>
								</div> */}
						</div>
					</div>
				</section>

				<ImageGrid
					image={content?.imageGrid?.image}
					imageTwo={content?.imageGrid?.imageTwo}
					imageThree={content?.imageGrid?.imageThree}
					imageFour={content?.imageGrid?.imageFour}
					imageFive={content?.imageGrid?.imageFive}
					imageSix={content?.imageGrid?.imageSix}
				/>

				<Footer
					title={`The search is over, Your New Home Awaits`}
					footerMenuLinks={footerMenuLinks?.footerMenuLinks}
					paragraph={`<p>All apartments comprises entrance hallway, living room, kitchen / diner and WC. And have rear gardens and parking spaces.</p>`}
					twitterLink={themesOptionsContent?.themesOptions?.twitterLink}
					linkedinLink={themesOptionsContent?.themesOptions?.linkedinLink}
					facebookLink={themesOptionsContent?.themesOptions?.facebookLink}
					instagramLink={themesOptionsContent?.themesOptions?.instagramLink}
				/>
			</main>
		</motion.div>
	);
};

export default about;

export async function getStaticProps() {
	const getAboutPageContent: any = gql`
		{
			mainContent: pages(where: {id: 291, status: PUBLISH}) {
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
						aboutPage {
							heroSection {
								title
								paragraph
								backgroundImage {
									sourceUrl
								}
							}
							introSection {
								title
								paragraph
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
		query: getAboutPageContent,
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
			content: response.data?.mainContent?.edges[0]?.node?.aboutPage,
		},
		revalidate: 60,
	};
}
