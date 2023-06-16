// Import
import {
	getMainMenuLinks,
	getHeroMenuLinks,
	getFooterMenuLinks,
	getLocationMenuLinks,
} from "@/functions/GetAllMenuLinks";
import {GetStaticProps, NextPage} from "next";
import {motion} from "framer-motion";
import {ContentContext} from "@/context/context";
import {IContentContext} from "@/components/types";
import {getAllBlogsContent} from "@/functions/GetAllBlogPostsSlugs";
import {getAllSeoPagesContent} from "@/functions/GetAllSeoPagesContent";
import {getThemesOptionsContent} from "@/functions/GetAllThemesOptions";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";
import {getAllPagesFlexibleContentComponents} from "@/functions/GetAllFlexibleContentComponents";

// Components
import Layout from "@/components/Layout/Layout";

const noPageExits: NextPage<IContentContext> = ({
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

export const getStaticProps: GetStaticProps = async () => {
	// Fetch priority content
	const seoContent: any = await getAllSeoPagesContent("error-page");

	const flexibleContentComponents: any =
		await getAllPagesFlexibleContentComponents("error-page");

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

export default noPageExits;
