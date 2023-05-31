// Import
import type {NextPage, GetStaticProps} from "next";
import {
	fetchApartmentSlugs,
	fetchApartmentSlugsContent,
} from "@/functions/ApartmentSlugs";
import {motion} from "framer-motion";
import {getThemesOptionsContent} from "../../../functions/themesOptions";
import {
	getMainMenuLinks,
	getHeroMenuLinks,
	getFooterMenuLinks,
	getLocationMenuLinks,
} from "../../../functions/MenuLinks";

// Components
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import HeroTwo from "@/components/HeroTwo";
import ImageGrid from "@/components/ImageGrid";
import MetaTag from "@/components/Meta/MetaTag";
import ApartmentSingle from "../../../components/ApartmentSingle";

interface IMbweniSlugs {
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
		stats: [
			{
				card: {
					id: string;
					icon: {
						altText: string;
						sourceUrl: string;
						mediaDetails: {
							height: number;
							width: number;
						};
					};
					title: string;
					paragraph: string;
				};
			}
		];
		mainContent: {
			heroBackgroundImage: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
			imageGallery: [
				{
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
			mainContent: {
				title: string;
				location: string;
				description: string;
				lettingCompany: string;
				buttonLink: {
					url: string;
					title: string;
					target: string;
				};
				rightSectionTitle: string;
				weeklyInfo: {
					title: string;
					rent: string;
				};
				monthlyInfo: {
					title: string;
					rent: string;
				};
				lettingDetails: [
					{
						bulletPoint: string;
					}
				];
				iconGrid: [
					{
						card: {
							text: string;
							icon: {
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
				highlightImages: [
					{
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
				keyInfoImages: [
					{
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

const mbweniSlugs: NextPage<IMbweniSlugs> = ({
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

				<Stats stats={content?.stats} />

				<ApartmentSingle
					mainContent={content?.mainContent?.mainContent}
					imageGallery={content?.mainContent?.imageGallery}
					heroBackgroundImage={content?.mainContent?.heroBackgroundImage}
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

export default mbweniSlugs;

export async function getStaticPaths() {
	const data = await fetchApartmentSlugs();

	const paths = data.map((slugUrl) => ({
		params: {
			slug: slugUrl?.slug as String,
		},
	}));

	return {paths, fallback: false};
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
	const response: any = await fetchApartmentSlugsContent(params?.slug);

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
			seo: response?.seo,
			content: response?.content,
			pageTitle: response?.pageTitle,
		},
		revalidate: 60,
	};
};
