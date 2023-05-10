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
import Footer from "@/components/Footer";
import HeroTwo from "@/components/HeroTwo";
import MetaTag from "../components/Layout/Meta/MetaTag";
import ContactBanner from "@/components/ContactBanner";
import TitleParagraph from "@/components/TitleParagraph";

interface IPrivacyPolicy {
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
		contentSection: {
			title: string;
			paragraph: string;
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

const PrivacyPolicy: NextPage<IPrivacyPolicy> = ({
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
			{/* <!--===== HEAD =====--> */}
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

				<TitleParagraph
					title={content?.contentSection?.title}
					paragraph={content?.contentSection?.paragraph}
				/>

				<ContactBanner
					title={content?.contactBanner?.title}
					paragraph={content?.contactBanner?.paragraph}
					buttonLink={content?.contactBanner?.buttonLink}
					backgroundImage={content?.contactBanner?.image?.sourceUrl}
				/>
			</main>

			{/* <!--===== FOOTER =====--> */}
			<Footer
				footerMenuLinks={footerMenuLinks?.footerMenuLinks}
				twitterLink={themesOptionsContent?.themesOptions?.twitterLink}
				linkedinLink={themesOptionsContent?.themesOptions?.linkedinLink}
				facebookLink={themesOptionsContent?.themesOptions?.facebookLink}
				instagramLink={themesOptionsContent?.themesOptions?.instagramLink}
			/>
		</motion.div>
	);
};

export default PrivacyPolicy;

export const getStaticProps: GetStaticProps = async () => {
	const getPrivacyPolicyPageContent: any = gql`
		{
			pageTitle: pages(where: {id: 423, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 423, status: PUBLISH}) {
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
						privacyPolicyPage {
							heroSection {
								title
								paragraph
								backgroundImage {
									sourceUrl
								}
							}
							contentSection {
								title
								paragraph
							}
							contactBanner {
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
							}
						}
					}
				}
			}
		}
	`;

	const response: any = await client.query({
		query: getPrivacyPolicyPageContent,
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
			content: response?.data?.mainContent?.edges[0]?.node?.privacyPolicyPage,
		},
		revalidate: 60,
	};
};
