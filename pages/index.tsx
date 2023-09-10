// Import
import {
	homePage,
	postType,
	PagesContext,
	flexibleContentType,
} from "@/context/pages";
import {motion} from "framer-motion";
import {GetStaticProps, NextPage} from "next";
import {IContentContext} from "@/types/context";

// Queries Functions
import {getAllSeoContent} from "@/functions/graphql/Queries/GetAllSeoContent";
import {getAllFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import Layout from "@/components/Layout/Layout";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

const home: NextPage<IContentContext> = ({
	seo,
	content,
	postTypeFlexibleContent,
}) => {
	return (
		<>
			<PagesContext.Provider
				value={{
					seo: seo,
					content: content,
					postTypeFlexibleContent: postTypeFlexibleContent,
				}}
			>
				<motion.main
					exit={{
						opacity: 0,
					}}
					initial="initial"
					animate="animate"
				>
					<Layout>
						<RenderFlexibleContent />
					</Layout>
				</motion.main>
			</PagesContext.Provider>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	// Fetch priority content
	const seoContent: any = await getAllSeoContent(homePage, postType?.pages);

	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		homePage,
		postType?.pages,
		flexibleContentType?.pages
	);

	return {
		props: {
			seo: seoContent,
			content: flexibleContentComponents?.content,
			postTypeFlexibleContent: flexibleContentType?.pages,
		},
		revalidate: 60,
	};
};

export default home;
