// Import
import {gql} from "@apollo/client";
import {motion} from "framer-motion";
import {client} from "../config/apollo";
import type {NextPage, GetStaticProps} from "next";
import {getThemesOptionsContent} from "../functions/themesOptions";
import {
	getMainMenuLinks,
	getHeroMenuLinks,
	getFooterMenuLinks,
	getLocationMenuLinks,
} from "../functions/MenuLinks";

// Components
import Footer from "@/components/Footer";
import HeroTwo from "@/components/HeroTwo";
import TextImage from "@/components/TextImage";
import ImageGrid from "@/components/ImageGrid";
import MetaTag from "../components/Layout/Meta/MetaTag";
import TeamMembers from "@/components/TeamMembers";
import TextImageTwo from "@/components/TextImageTwo";
import ContentStats from "@/components/ContentStats";
import ContactBanner from "@/components/ContactBanner";

interface IAbout {
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
		contentStats: {
			title: string;
			paragraph: string;
			statsOne: {
				title: string;
				subtitle: string;
				paragraph: string;
			};
			statsTwo: {
				title: string;
				subtitle: string;
				paragraph: string;
			};
		};
		teamMembers: {
			title: string;
			paragraph: string;
			profileGrid: [
				{
					profileCard: {
						id: string;
						title: string;
						jobPosition: string;
						twitter: string;
						facebook: string;
						instagram: string;
						image: {
							altText: string;
							sourceUrl: string;
							mediaDetails: {
								height: number;
								width: number;
							};
						};
					};
				}
			];
		};
		textImage: {
			title: string;
			paragraph: string;
			imageText: string;
			imageTextTwo: string;
			image: {
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
		themeOptions: {
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

const about: NextPage<IAbout> = ({
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
					twitterLink={themesOptionsContent?.themeOptions?.twitterLink}
					mbeziContent={themesOptionsContent?.themeOptions?.mbeziContent}
					linkedinLink={themesOptionsContent?.themeOptions?.linkedinLink}
					facebookLink={themesOptionsContent?.themeOptions?.facebookLink}
					instagramLink={themesOptionsContent?.themeOptions?.instagramLink}
					mbweniContent={themesOptionsContent?.themeOptions?.mbweniContent}
					backgroundImage={content?.heroSection?.backgroundImage?.sourceUrl}
				/>

				<TextImage
					title={content?.introSection?.title}
					image={content?.introSection?.image}
					subtitle={content?.introSection?.subtitle}
					imageTwo={content?.introSection?.imageTwo}
					paragraph={content?.introSection?.paragraph}
					imageLarge={content?.introSection?.imageLarge}
				/>

				<ContentStats
					title={content?.contentStats?.title}
					paragraph={content?.contentStats?.paragraph}
					statsOne={content?.contentStats?.statsOne}
					statsTwo={content?.contentStats?.statsTwo}
				/>

				<TeamMembers
					title={content?.teamMembers?.title}
					paragraph={content?.teamMembers?.paragraph}
					profileGrid={content?.teamMembers?.profileGrid}
				/>

				<TextImageTwo
					title={content?.textImage?.title}
					image={content?.textImage?.image}
					paragraph={content?.textImage?.paragraph}
					imageText={content?.textImage?.imageText}
					imageTextTwo={content?.textImage?.imageTextTwo}
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
					twitterLink={themesOptionsContent?.themeOptions?.twitterLink}
					linkedinLink={themesOptionsContent?.themeOptions?.linkedinLink}
					facebookLink={themesOptionsContent?.themeOptions?.facebookLink}
					instagramLink={themesOptionsContent?.themeOptions?.instagramLink}
				/>
			</main>
		</motion.div>
	);
};

export default about;

export const getStaticProps: GetStaticProps = async () => {
	const getAboutPageContent: any = gql`
		{
			pageTitle: pages(where: {id: 291, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
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
							contentStats {
								title
								paragraph
								statsOne {
									title
									subtitle
									paragraph
								}
								statsTwo {
									title
									subtitle
									paragraph
								}
							}
							teamMembers {
								title
								paragraph
								profileGrid {
									profileCard {
										title
										jobPosition
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
							textImage {
								title
								paragraph
								imageText
								imageTextTwo
								image {
									altText
									sourceUrl
									mediaDetails {
										height
										width
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
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			content: response.data?.mainContent?.edges[0]?.node?.aboutPage,
		},
		revalidate: 60,
	};
};
