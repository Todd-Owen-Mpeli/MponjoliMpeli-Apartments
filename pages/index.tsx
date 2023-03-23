// Import
import Link from "next/link";
import Image from "next/image";
import {gql} from "@apollo/client";
import {client} from "../config/apollo";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getMainMenuLinks,
	getHeroMenuLinks,
	getLocationMenuLinks,
} from "../lib/MenuLinks";

// Components
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Newsletter from "@/components/Newsletter";
import MetaTag from "../components/Meta/MetaTag";
import TextBoxImage from "@/components/TextBoxImage";
import IntroSection from "@/components/IntroSection";
import TextImageGrid from "@/components/TextImageGrid";
import TestComponent from "../components/TestComponent";
import Paragraph from "@/components/Elements/Paragraph";

// Styling
import styles from "../styles/components/IntroSection.module.scss";
import ImageGrid from "@/components/ImageGrid";

export default function Home({
	seo,
	content,
	mainMenuLinks,
	heroMenuLinks,
	locationMenuLinks,
	themesOptionsContent,
}: any) {
	return (
		<>
			{/* <!--===== META TAG =====--> */}
			<MetaTag title={`MponjoliMpeli`} seo={seo} />

			<main>
				<Hero
					title={content?.heroSection?.title}
					paragraph={content?.heroSection?.paragraph}
					mainMenuLinks={mainMenuLinks?.mainMenuLinks}
					heroMenuLinks={heroMenuLinks?.heroMenuLinks}
					buttonLink={content?.heroSection?.buttonLink}
					buttonLinkTwo={content?.heroSection?.buttonLinkTwo}
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
					imageTwo={content?.introSection?.imageTwo}
					paragraph={content?.introSection?.paragraph}
					buttonLink={content?.introSection?.buttonLink}
					imageLarge={content?.introSection?.imageLarge}
				/>

				{/* FIRST TIME BUYER */}
				<TextBoxImage
					title={content?.firstTimeLettings?.title}
					image={content?.firstTimeLettings?.image}
					subtitle={content?.firstTimeLettings?.subtitle}
					paragraph={content?.firstTimeLettings?.paragraph}
				/>

				<Logos
					title={content?.trustedBrands?.title}
					logoGrid={content?.trustedBrands?.logos}
				/>

				{/* CONTENT GRID */}
				<TextImageGrid gridContent={content?.howItWorks?.gridContent} />

				{/* SUSTAINABILITY */}
				<section
					className={`py-16 bg-greenTwo bg-cover bg-center bg-no-repeat ${styles.sustainability}`}
				>
					<div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
						<div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-36">
							<div className="flex flex-col">
								<span className="mb-4 text-gold text-base font-bold uppercase tracking-[0.25rem]">
									Sustainability
								</span>
								<h2 className="mb-8 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
									Our Commitment to Sustainability.
								</h2>
								<Paragraph
									content={`<p>A sustainable, environmentally focused approach recognizing the responsibility and the opportunity to influence the way buildings are built, sourced, managed, occupied and sold. <br><br>
									Our vision is to realise a more sustainable world for all. As the world’s largest manager of commercial buildings, we take proactive measures to make our properties and operations more environmentally sound.
									<br><br>
									We have an approved science-based greenhouse gas (GHG) emissions reduction target to significantly reduce the emissions generated through our operations and by the properties we manage. Across every service and team, both as individuals and as a company, every action matters, so we embed sustainability into everything we do.
									<br><br>
									We have a dedicated ESG strategy and team to ensure we deliver our global sustainability aims.
									</p>`}
									tailwindStyling="text-medium text-white"
								/>
							</div>

							<div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
								<div className="relative">
									<Image
										alt=""
										width={1050}
										height={1050}
										className="mx-auto object-cover object-center w-full lg:w-[700px] h-full min-h-[450px]"
										src="http://mponjolimpeliapartments.local/wp-content/uploads/2023/03/cr-planet-hero-972x1296-1.jpg"
									/>

									<div className="absolute bg-white -bottom-10 -left-16">
										<div className="px-8 py-10">
											<span className="block text-4xl font-bold text-black lg:text-5xl">
												93%
											</span>
											<span className="block mt-2 text-base leading-tight text-black">
												Tenant home
												<br />
												delight & satisfaction
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* <section className="overflow-hidden py-2 bg-darkGreen">
					<div className="flex flex-wrap">
						<div className="flex w-1/2 flex-wrap">
							<div className="w-1/2 p-1 md:p-2">
								<Image
									alt=""
									width={1050}
									height={1050}
									className="block h-full w-full object-cover object-center"
									src="http://mponjolimpeliapartments.local/wp-content/uploads/2023/03/pexels-vecislavas-popa-1743228-scaled.jpg"
								/>
							</div>
							<div className="w-1/2 p-1 md:p-2">
								<Image
									alt=""
									width={1050}
									height={1050}
									className="block h-full w-full object-cover object-center"
									src="http://mponjolimpeliapartments.local/wp-content/uploads/2023/03/pexels-vecislavas-popa-1668860-scaled.jpg"
								/>
							</div>
							<div className="w-full p-1 md:p-2">
								<Image
									alt=""
									width={1050}
									height={1050}
									className="block h-full w-full object-cover object-center"
									src="http://mponjolimpeliapartments.local/wp-content/uploads/2023/03/pexels-vecislavas-popa-11670289-scaled.jpg"
								/>
							</div>
						</div>
						<div className="flex w-1/2 flex-wrap">
							<div className="w-full p-1 md:p-2">
								<Image
									alt=""
									width={1050}
									height={1050}
									className="block h-full w-full object-cover object-center"
									src="http://mponjolimpeliapartments.local/wp-content/uploads/2023/03/pexels-vecislavas-popa-1571469-scaled.jpg"
								/>
							</div>
							<div className="w-1/2 p-1 md:p-2">
								<Image
									alt=""
									width={1050}
									height={1050}
									className="block h-full w-full object-cover object-center"
									src="http://mponjolimpeliapartments.local/wp-content/uploads/2023/03/pexels-vecislavas-popa-10758464-scaled.jpg"
								/>
							</div>
							<div className="w-1/2 p-1 md:p-2">
								<Image
									alt=""
									width={1050}
									height={1050}
									className="block h-full w-full object-cover object-center"
									src="http://mponjolimpeliapartments.local/wp-content/uploads/2023/03/pexels-curtis-adams-8031874-scaled.jpg"
								/>
							</div>
						</div>
					</div>
				</section> */}

				<ImageGrid
					image={content?.imageGrid?.image}
					imageTwo={content?.imageGrid?.imageTwo}
					imageThree={content?.imageGrid?.imageThree}
					imageFour={content?.imageGrid?.imageFour}
					imageFive={content?.imageGrid?.imageFive}
					imageSix={content?.imageGrid?.imageSix}
				/>

				{/* IMAGE ARTICLE BANNER */}
				<section
					className="overflow-hidden bg-fixed bg-black bg-center bg-no-repeat bg-cover py-28"
					style={{
						backgroundImage:
							"url('http://mponjolimpeliapartments.local/wp-content/uploads/2023/03/pexels-vecislavas-popa-1571467-1-scaled.jpg')",
					}}
				>
					<div className="container px-4 mx-auto">
						<div
							className="px-12 pt-12 rounded-lg bg-darkGreen pb-9 md:max-w-xl bg-opacity-80"
							style={{backdropFilter: "blur(10px)"}}
						>
							<h2 className="mb-8 text-4xl font-medium leading-tight 2xl:text-5xl text-white">
								Tenants; Help Us To Help You
							</h2>
							<Paragraph
								content="<p>Our Letting agents love the challenge of helping you find your ideal home. Sometimes however, it can be more of a challenge than need be. So if you are looking to rent a property, here are a few guidelines that will really help us to help you. </p>"
								tailwindStyling="text-medium leading-normal text-white my-11"
							/>
							<Link
								className="inline-flex flex-wrap items-center text-white hover:text-darkGrey"
								href={`/`}
							>
								<span className="mr-2 font-semibold leading-normal tracking-wider">
									Read Full Article
								</span>
								<svg
									width="19"
									height="18"
									viewBox="0 0 19 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11 3.75L16.25 9M16.25 9L11 14.25M16.25 9L2.75 9"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>
								</svg>
							</Link>
						</div>
					</div>
				</section>

				<Newsletter
					title={content?.newsletterSignUp?.title}
					titleTwo={content?.newsletterSignUp?.titleTwo}
					paragraph={content?.newsletterSignUp?.paragraph}
					paragraphTwo={content?.newsletterSignUp?.paragraphTwo}
				/>
			</main>
		</>
	);
}
export async function getStaticProps() {
	const getHomePageContent: any = gql`
		{
			mainContent: pages(where: {id: 6, status: PUBLISH}) {
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
						homePage {
							heroSection {
								title
								paragraph
								buttonLink {
									url
									title
									target
								}
								buttonLinkTwo {
									url
									title
									target
								}
								backgroundImage {
									sourceUrl
								}
							}
							introSection {
								title
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
							firstTimeLettings {
								title
								subtitle
								paragraph
								image {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
								}
							}
							howItWorks {
								gridContent {
									card {
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
							newsletterSignUp {
								title
								titleTwo
								paragraph
								paragraphTwo
							}
						}
					}
				}
			}
		}
	`;

	const response: any = await client.query({
		query: getHomePageContent,
	});

	const mainMenuLinks: object = await getMainMenuLinks();
	const heroMenuLinks: object = await getHeroMenuLinks();
	const locationMenuLinks: object = await getLocationMenuLinks();
	const themesOptionsContent: object = await getThemesOptionsContent();

	return {
		props: {
			mainMenuLinks,
			heroMenuLinks,
			locationMenuLinks,
			themesOptionsContent,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			content: response.data?.mainContent?.edges[0]?.node?.homePage,
		},
		revalidate: 60,
	};
}
