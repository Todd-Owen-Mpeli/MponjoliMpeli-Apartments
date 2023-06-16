// Import
import {
	getMainMenuLinks,
	getFooterMenuLinks,
	getHeroMenuLinks,
	getLocationMenuLinks,
} from "../../functions/GetAllMenuLinks";
import {motion} from "framer-motion";
import {
	getAllBlogPostsSlugs,
	getAllBlogsContent,
} from "@/functions/GetAllBlogPostsSlugs";
import {ContentContext} from "@/context/context";
import type {NextPage, GetStaticProps} from "next";
import {IContentContext} from "@/components/types";
import {getThemesOptionsContent} from "../../functions/GetAllThemesOptions";
import {getAllSeoBlogPostsContent} from "@/functions/GetAllSeoPagesContent";
import {getAllBlogPostFlexibleContentComponents} from "@/functions/GetAllFlexibleContentComponents";

// Components
import Layout from "@/components/Layout/Layout";
import BackHoverButton from "@/components/Elements/BackHoverButton";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

const dynamicSinglePosts: NextPage<IContentContext> = ({
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
					<BackHoverButton link={`/blogs`} />

					<RenderFlexibleContent />
				</Layout>
			</motion.div>
		</ContentContext.Provider>
	);
};

export async function getStaticPaths() {
	const data = await getAllBlogPostsSlugs();
	const paths = data.map((item) => ({
		params: {
			slug: item?.slug as String,
		},
	}));

	return {paths, fallback: false};
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
	// Fetch priority content
	const seoContent: any = await getAllSeoBlogPostsContent(params?.slug);

	const flexibleContentComponents: any =
		await getAllBlogPostFlexibleContentComponents(params?.slug);

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

export default dynamicSinglePosts;
