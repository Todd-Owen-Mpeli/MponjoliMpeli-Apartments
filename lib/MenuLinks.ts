import {gql} from "@apollo/client";
import {client} from "../config/apollo";

// Main Menu Links
export async function getMainMenuLinks() {
	const content: any = gql`
		{
			mainMenuLinks: menuItems(where: {location: PRIMARY}) {
				edges {
					node {
						id
						url
						label
					}
				}
			}
		}
	`;

	const response: any = await client.query({
		query: content,
	});

	return {
		mainMenuLinks: response?.data?.mainMenuLinks?.edges,
	};
}

// Hero Menu Links
export async function getHeroMenuLinks() {
	const content: any = gql`
		{
			heroMenuLinks: menuItems(where: {location: SECONDARY}) {
				edges {
					node {
						id
						url
						label
					}
				}
			}
		}
	`;

	const response: any = await client.query({
		query: content,
	});

	return {
		heroMenuLinks: response?.data?.heroMenuLinks?.edges,
	};
}

// Location Menu Links
export async function getLocationMenuLinks() {
	const content: any = gql`
		{
			locationMenuLinks: menuItems(where: {location: LOCATIONS}) {
				edges {
					node {
						id
						url
						label
					}
				}
			}
		}
	`;

	const response: any = await client.query({
		query: content,
	});

	return {
		locationMenuLinks: response?.data?.locationMenuLinks?.edges,
	};
}
