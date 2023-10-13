import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	slug: string;
	modified: string;
};

interface ISlug extends Array<SlugResponse> {}

/* APARTMENTS SLUGS (URLS) */
export const getAllApartmentsSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				apartmentsSlugs: apartments(where: {status: PUBLISH}) {
					nodes {
						slug
						modified
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.apartmentsSlugs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error("Something went wrong trying to get blogs slugs");
	}
};

// Apartments Content
export async function getAllApartmentsContent() {
	try {
		const content: DocumentNode = gql`
			{
				mainContent: apartments(where: {status: PUBLISH}, last: 10) {
					edges {
						node {
							id
							uri
							date
							title(format: RENDERED)
							featuredImage {
								node {
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
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.mainContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch themes options content"
		);
	}
}
