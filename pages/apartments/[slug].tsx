// Import
import {
	getMainMenuLinks,
	getHeroMenuLinks,
	getFooterMenuLinks,
	getLocationMenuLinks,
} from "@/functions/GetAllMenuLinks";
import {motion} from "framer-motion";
import {ContentContext} from "@/context/context";
import type {NextPage, GetStaticProps} from "next";
import {IContentContext} from "@/components/types";
import {getAllBlogsContent} from "@/functions/GetAllBlogPostsSlugs";
import {getAllLocationsSlugs} from "@/functions/GetAllLocationsSlugs";
import {getThemesOptionsContent} from "@/functions/GetAllThemesOptions";
import {getAllSeoLocationsPagesContent} from "@/functions/GetAllSeoPagesContent";
import {getAllLocationsPagesFlexibleContentComponents} from "@/functions/GetAllFlexibleContentComponents";

// Components
import Layout from "@/components/Layout/Layout";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

const dynamicLocationsPages: NextPage<IContentContext> = ({
	seo,
	blogs,
	content,
	mainMenuLinks,
	heroMenuLinks,
	footerMenuLinks,
	locationMenuLinks,
	themesOptionsContent,
}) => {
	return (
		<ContentContext.Provider
			value={{
				seo: seo,
				blogs: blogs,
				content: content,
				mainMenuLinks: mainMenuLinks,
				heroMenuLinks: heroMenuLinks,
				footerMenuLinks: footerMenuLinks,
				locationMenuLinks: locationMenuLinks,
				themesOptionsContent: themesOptionsContent,
			}}
		>
			<motion.div
				exit={{
					opacity: 0,
				}}
				initial="initial"
				animate="animate"
			>
				<Layout>
					<RenderFlexibleContent />
				</Layout>
			</motion.div>
		</ContentContext.Provider>
	);
};

export async function getStaticPaths() {
	const data = await getAllLocationsSlugs();
	const paths = data.map((item) => ({
		params: {
			slug: item?.slug as String,
		},
	}));

	return {paths, fallback: false};
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
	// Fetch priority content
	const seoContent: any = await getAllSeoLocationsPagesContent(params?.slug);

	const flexibleContentComponents: any =
		await getAllLocationsPagesFlexibleContentComponents(params?.slug);

	// Fetch remaining content simultaneously
	const [
		blogs,
		mainMenuLinks,
		heroMenuLinks,
		footerMenuLinks,
		locationMenuLinks,
		themesOptionsContent,
	] = await Promise.all([
		getAllBlogsContent(),
		getMainMenuLinks(),
		getHeroMenuLinks(),
		getFooterMenuLinks(),
		getLocationMenuLinks(),
		getThemesOptionsContent(),
	]);

	return {
		props: {
			blogs,
			mainMenuLinks,
			heroMenuLinks,
			footerMenuLinks,
			seo: seoContent,
			locationMenuLinks,
			themesOptionsContent,
			content: flexibleContentComponents?.content,
		},
		revalidate: 60,
	};
};

export default dynamicLocationsPages;
