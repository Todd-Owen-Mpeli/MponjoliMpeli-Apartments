// Import
import {motion} from "framer-motion";
import {GetStaticProps, NextPage} from "next";
import {IContentContext} from "@/types/context";
import {PagesContext, flexibleContentType, postType} from "@/context/pages";

// Queries Functions
import {getAllSeoContent} from "@/functions/graphql/Queries/GetAllSeoContent";
import {getAllApartmentsSlugs} from "@/functions/graphql/Queries/GetAllApartmentSlugs";
import {getAllFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import Layout from "@/components/Layout/Layout";
import BackToApartmentsButton from "@/components/Elements/BackToApartmentsButton";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

const dynamicPages: NextPage<IContentContext> = ({
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
						<BackToApartmentsButton link={`/apartments`} />
						<RenderFlexibleContent />
					</Layout>
				</motion.div>
			</PagesContext.Provider>
		</>
	);
};

export async function getStaticPaths() {
	const data = await getAllApartmentsSlugs();
	const paths = data.map((item) => ({
		params: {
			slug: item?.slug as String,
		},
	}));
	return {paths, fallback: false};
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
	// Fetch priority content
	const seoContent: any = await getAllSeoContent(
		params?.slug,
		postType?.apartments
	);

	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		params?.slug,
		postType?.apartments,
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

export default dynamicPages;
