// Import
import {
	postType,
	errorPage,
	PagesContext,
	flexibleContentType,
} from "@/context/pages";
import {motion} from "framer-motion";
import {GetStaticProps, NextPage} from "next";
import {IContentContext} from "@/types/context";

// Queries Functions
import {getAllFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";
import {getAllSeoContent} from "@/functions/graphql/Queries/GetAllSeoContent";

// Components
import Layout from "@/components/Layout/Layout";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

const noPageExits: NextPage<IContentContext> = ({
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
			</PagesContext.Provider>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	// Fetch priority content
	const seoContent: any = await getAllSeoContent(errorPage, postType?.pages);

	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		errorPage,
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

export default noPageExits;
