// Import
import {
	getMainMenuLinks,
	getHeroMenuLinks,
	getFooterMenuLinks,
	getLocationMenuLinks,
} from "../functions/GetAllMenuLinks";
import {motion} from "framer-motion";
import type {NextPage, GetStaticProps} from "next";
import {getThemesOptionsContent} from "../functions/GetAllThemesOptions";
import {getAllSeoPagesContent} from "@/functions/GetAllSeoPagesContent";
import {getAllPagesFlexibleContentComponents} from "@/functions/GetAllFlexibleContentComponents";

// Components
import Layout from "@/components/Layout/Layout";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

interface IHome {
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
		firstTimeLettings: {
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
		};
		howItWorks: {
			gridContent: [
				{
					card: {
						id: string;
						title: string;
						paragraph: string;
						imageLocation: string;
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
		sustainability: {
			title: string;
			subtitle: string;
			paragraph: string;
			imageText: string;
			percentage: string;
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
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
		articleImageBanner: {
			title: string;
			paragraph: string;
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
			backgroundImage: {
				sourceUrl: string;
			};
		};
		newsletterSignUp: {
			title: string;
			titleTwo: string;
			paragraph: string;
			paragraphTwo: string;
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

const Home: NextPage<IHome> = ({
	seo,
	content,
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
			<Layout
				seo={seo}
				pageTitle={`MponjoliMpeli`}
				footerMenuLinks={footerMenuLinks}
				themesOptionsContent={themesOptionsContent}
			>
				<RenderFlexibleContent
					content={content}
					mainMenuLinks={mainMenuLinks}
					heroMenuLinks={heroMenuLinks}
					locationMenuLinks={locationMenuLinks}
					themesOptionsContent={themesOptionsContent}
				/>
			</Layout>
		</motion.div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	// Fetch priority content
	const seoContent: any = await getAllSeoPagesContent("home");

	const flexibleContentComponents: any =
		await getAllPagesFlexibleContentComponents("home");

	// Fetch remaining content simultaneously
	const [
		mainMenuLinks,
		heroMenuLinks,
		footerMenuLinks,
		locationMenuLinks,
		themesOptionsContent,
	] = await Promise.all([
		getMainMenuLinks(),
		getHeroMenuLinks(),
		getFooterMenuLinks(),
		getLocationMenuLinks(),
		getThemesOptionsContent(),
	]);

	return {
		props: {
			mainMenuLinks,
			heroMenuLinks,
			footerMenuLinks,
			seo: seoContent,
			locationMenuLinks,
			themesOptionsContent,
			content: flexibleContentComponents?.content,
			pageTitle: flexibleContentComponents?.pageTitle,
		},
		revalidate: 60,
	};
};

export default Home;
