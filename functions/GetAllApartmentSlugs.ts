// Import
import {client} from "../config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	slug: string;
	modified: string;
};

interface ISlug extends Array<SlugResponse> {}

export const getAllApartmentSlugs = async (): Promise<ISlug> => {
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
		throw new Error("Something went wrong trying to fetch apartments slugs");
	}
};

/* MBEZI PAGES SLUGS (URLS) */
export const getAllMbeziApartmentSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				mbeziApartments {
					nodes {
						slug
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.mbeziApartments?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error("Something went wrong trying to fetch apartments slugs");
	}
};

/* MBWENI PAGES SLUGS (URLS) */
export const getAllMbweniApartmentSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				mbweniApartments {
					nodes {
						slug
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.mbweniApartments?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error("Something went wrong trying to fetch apartments slugs");
	}
};
