// Import
import {gql} from "@apollo/client";
import {motion} from "framer-motion";
import {client} from "../../../config/apollo";
import {fadeInUp} from "../../../animations/animations";
import {getThemesOptionsContent} from "../../../lib/themesOptions";
import {
	getMainMenuLinks,
	getHeroMenuLinks,
	getFooterMenuLinks,
	getLocationMenuLinks,
} from "../../../lib/MenuLinks";

// Components
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import MetaTag from "../../../components/Meta/MetaTag";

const mbweni = ({
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
			<motion.h1
				variants={fadeInUp}
				className="mb-3 text-7xl sm:text-8xl text-white font-bold lg:leading-[4.5rem]"
			>
				Hello Mbweni
			</motion.h1>

			{/* <!--===== META TAG =====--> */}
			<MetaTag title={pageTitle} seo={seo} />

			<main>
				{/* <Hero
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
				/> */}

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

export default mbweni;

export async function getStaticProps() {
	// const getMbweniPageContent: any = gql`
	// 	{
	// 		pageTitle: pages(where: {id: 6, status: PUBLISH}) {
	// 			edges {
	// 				node {
	// 					title
	// 				}
	// 			}
	// 		}
	// 		mainContent: pages(where: {id: 6, status: PUBLISH}) {
	// 			edges {
	// 				node {
	// 					seo {
	// 						canonical
	// 						cornerstone
	// 						focuskw
	// 						fullHead
	// 						metaDesc
	// 						metaKeywords
	// 						metaRobotsNofollow
	// 						metaRobotsNoindex
	// 						opengraphAuthor
	// 						opengraphDescription
	// 						opengraphImage {
	// 							mediaItemUrl
	// 						}
	// 						opengraphModifiedTime
	// 						opengraphPublishedTime
	// 						opengraphPublisher
	// 						opengraphSiteName
	// 						opengraphTitle
	// 						opengraphType
	// 						opengraphUrl
	// 						readingTime
	// 						title
	// 						twitterDescription
	// 						twitterTitle
	// 						twitterImage {
	// 							mediaItemUrl
	// 						}
	// 					}
	// 					mbweniPage {
	// 						heroSection {
	// 							title
	// 							paragraph
	// 							buttonLink {
	// 								url
	// 								title
	// 								target
	// 							}
	// 							buttonLinkTwo {
	// 								url
	// 								title
	// 								target
	// 							}
	// 							backgroundImage {
	// 								sourceUrl
	// 							}
	// 						}
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// `;

	// const response: any = await client.query({
	// 	query: getMbweniPageContent,
	// });

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
			// seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			// pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			// content: response.data?.mainContent?.edges[0]?.node?.mbweniPage,
		},
		revalidate: 60,
	};
}
