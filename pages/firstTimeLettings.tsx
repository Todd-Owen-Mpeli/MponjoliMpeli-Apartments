// Import
import {gql} from "@apollo/client";
import {motion} from "framer-motion";
import {client} from "../config/apollo";
import type {NextPage, GetStaticProps} from "next";
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
import MetaTag from "../components/Layout/Meta/MetaTag";
import IntroSection from "@/components/IntroSection";
import ContactBanner from "@/components/ContactBanner";
import ContentBackgroundImage from "@/components/ContentBackgroundImage";

interface IFirstTimeLettings {
	seo: {
		canonical: string;
		cornerstone: Boolean;
		focuskw: string;
		fullHead: string;
		metaDesc: string;
		metaKeywords: string;
		metaRobotsNofollow: string;
		metaRobotsNoindex: string;
		opengraphAuthor: string;
		opengraphDescription: string;
		opengraphImage: {
			mediaItemUrl: string;
		};
		opengraphModifiedTime: string;
		opengraphPublishedTime: string;
		opengraphPublisher: string;
		opengraphSiteName: string;
		opengraphTitle: string;
		opengraphType: string;
		opengraphUrl: string;
		readingTime: number;
		title: string;
		twitterDescription: string;
		twitterTitle: string;
		twitterImage: {
			mediaItemUrl: string;
		};
	};
	pageTitle: string;
	content: {
		heroSection: {
			title: string;
			paragraph: string;
			backgroundImage: {
				sourceUrl: string;
			};
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
			buttonLinkTwo: {
				url: string;
				title: string;
				target: string;
			};
		};
		introSection: {
			title: string;
			subtitle: string;
			paragraph: string;
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
			imageTwo: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
			imageLarge: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
		};
		gridContent: [
			{
				card: {
					id: string;
					title: string;
					paragraph: string;
					contentLocation: string;
					backgroundImage: {
						sourceUrl: string;
					};
				};
			}
		];
		trustedBrands: {
			title: string;
			logos: [
				{
					id: string;
					image: {
						altText: string;
						sourceUrl: string;
						mediaDetails: {
							height: number;
							width: number;
						};
					};
				}
			];
		};
		contactBanner: {
			title: string;
			paragraph: string;
			image: {
				sourceUrl: string;
			};
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
		};
		imageGrid: {
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
			imageTwo: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
			imageThree: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
			imageFour: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
			imageFive: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
			imageSix: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
		};
	};
	footerMenuLinks: {
		footerMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
	};
	mainMenuLinks: {
		mainMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
	};
	heroMenuLinks: {
		heroMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
	};
	locationMenuLinks: {
		locationMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
	};
	themesOptionsContent: {
		themesOptions: {
			email: string;
			emailOptionTwo: string;
			phoneNumber: string;
			phoneNumberOptionTwo: string;
			phoneNumberOptionThree: string;
			linkedinLink: string;
			instagramLink: string;
			facebookLink: string;
			twitterLink: string;
			businessHours: {
				content: string;
			};
			mbeziContent: {
				title: string;
				phoneNumber: string;
				email: string;
				contactAddress: string;
			};
			mbweniContent: {
				title: string;
				phoneNumber: string;
				email: string;
				contactAddress: string;
			};
		};
	};
}

const firstTimeLettings: NextPage<IFirstTimeLettings> = ({
	seo,
	content,
	pageTitle,
	mainMenuLinks,
	heroMenuLinks,
	footerMenuLinks,
	locationMenuLinks,
	themesOptionsContent,
}) => {
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

				<ContentBackgroundImage gridContent={content?.gridContent} />

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

export const getStaticProps: GetStaticProps = async () => {
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
							gridContent {
								card {
									title
									paragraph
									contentLocation
									backgroundImage {
										sourceUrl
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
};
