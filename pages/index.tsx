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
import MetaTag from "../components/Meta/MetaTag";
import IntroSection from "@/components/IntroSection";
import TestComponent from "../components/TestComponent";
import Paragraph from "@/components/Elements/Paragraph";
import TextBoxImage from "@/components/TextBoxImage";
import TextImageGrid from "@/components/TextImageGrid";

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

				{/* CONTENT GRID */}
				<TextImageGrid gridContent={content?.howItWorks?.gridContent} />

				{/* IMAGE ARTICLE BANNER */}
				<section
					className="overflow-hidden bg-fixed bg-black bg-center bg-no-repeat bg-cover py-28"
					style={{
						backgroundImage:
							"url('http://mponjolimpeliapartments.local/wp-content/uploads/2023/03/pexels-vecislavas-popa-1571472-scaled.jpg')",
					}}
				>
					<div className="container px-4 mx-auto">
						<div
							className="px-12 pt-12 rounded-lg bg-darkGreen pb-9 md:max-w-xl bg-opacity-80"
							style={{backdropFilter: "blur(10px)"}}
						>
							<h2 className="mb-4 text-6xl font-bold leading-tight text-white md:text-7xl tracking-px-n">
								Tenants; Help Us To Help You
							</h2>
							<Paragraph
								content="<p>Our Letting agents love the challenge of helping you find your ideal home. Sometimes however, it can be more of a challenge than need be. So if you are looking to rent a property, here are a few guidelines that will really help us to help you. </p>"
								tailwindStyling="text-lg font-medium leading-normal text-white mb-11"
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

				<TestComponent
					props="Test Component"
					paragraph="<p>In our latest episode, CBRE’s <a href='www.google.com' target='blank'>Andrew Saunderson</a>, Head of UK Residential Capital Markets discusses the future of our cities with renowned urbanist, Professor Greg Clark. They uncover the long term impact of the pandemic, dive into why our cities must reinvent themselves to remain fit for purpose and look at the active role our cities need to play in helping to tackle climate change.</p>"
				/>

				<section className="pt-24 pb-32 overflow-hidden bg-gradient-green">
					<div className="container px-4 mx-auto">
						<div className="max-w-md mx-auto mb-20">
							<h2 className="mb-4 text-6xl font-semibold text-center text-darkGreen sm:text-7xl">
								Got questions?
							</h2>
							<p className="text-lg text-center text-green">
								Frequently Asked Questions
							</p>
						</div>
						<div className="flex flex-wrap mb-24 -m-6">
							<div className="w-full p-6 md:w-1/2">
								<div className="md:max-w-xl">
									<h2 className="mb-4 font-medium text-darkGreen text-medium">
										Is it really unlimited downloads?
									</h2>
									<p className="text-base text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Sagittis euismod ornare aenean ut justo elit amet. Gravida
										pulvinar ac elementum praesent vel quis accumsan, proin
										rhoncus.
									</p>
								</div>
							</div>
							<div className="w-full p-6 md:w-1/2">
								<div className="md:max-w-xl">
									<h2 className="mb-4 font-medium text-darkGreen text-medium">
										Is it really unlimited downloads?
									</h2>
									<p className="text-base text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Sagittis euismod ornare aenean ut justo elit amet. Gravida
										pulvinar ac elementum praesent vel quis accumsan, proin
										rhoncus.
									</p>
								</div>
							</div>
							<div className="w-full p-6 md:w-1/2">
								<div className="md:max-w-xl">
									<h2 className="mb-4 font-medium text-darkGreen text-medium">
										Do you offer discounts on annual plans?
									</h2>
									<p className="text-base text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Sagittis euismod ornare aenean ut justo elit amet. Gravida
										pulvinar ac elementum praesent vel quis accumsan, proin
										rhoncus.
									</p>
								</div>
							</div>
							<div className="w-full p-6 md:w-1/2">
								<div className="md:max-w-xl">
									<h2 className="mb-4 font-medium text-darkGreen text-medium">
										Do you offer discounts on annual plans?
									</h2>
									<p className="text-base text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Sagittis euismod ornare aenean ut justo elit amet. Gravida
										pulvinar ac elementum praesent vel quis accumsan, proin
										rhoncus.
									</p>
								</div>
							</div>
							<div className="w-full p-6 md:w-1/2">
								<div className="md:max-w-xl">
									<h2 className="mb-4 font-medium text-darkGreen text-medium">
										What kind of file do you offer with the packages?
									</h2>
									<p className="text-base text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Sagittis euismod ornare aenean ut justo elit amet. Gravida
										pulvinar ac elementum praesent vel quis accumsan, proin
										rhoncus.
									</p>
								</div>
							</div>
							<div className="w-full p-6 md:w-1/2">
								<div className="md:max-w-xl">
									<h2 className="mb-4 font-medium text-darkGreen text-medium">
										What kind of file do you offer with the packages?
									</h2>
									<p className="text-base text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Sagittis euismod ornare aenean ut justo elit amet. Gravida
										pulvinar ac elementum praesent vel quis accumsan, proin
										rhoncus.
									</p>
								</div>
							</div>
						</div>
						<Link
							className="block mx-auto overflow-hidden font-medium text-medium text-darkGreen group max-w-max"
							href="#"
						>
							<p className="mb-1 hover:text-brightGreen">
								Didn&rsquo;t find the answer? Contact us here
							</p>
							<div className="w-full h-px transition duration-500 ease-in-out transform -translate-x-0 group-hover:translate-x-full bg-gradient-cyan"></div>
						</Link>
					</div>
				</section>
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
