import {DocumentNode, gql} from "@apollo/client";
import {client} from "../config/apollo";

// Themes Options Content
export async function getThemesOptionsContent() {
	const content: DocumentNode = gql`
		{
			themesOptions(where: {id: 153, status: PUBLISH}) {
				edges {
					node {
						themeOptions {
							email
							emailOptionTwo
							phoneNumber
							phoneNumberOptionTwo
							phoneNumberOptionThree
							linkedinLink
							instagramLink
							facebookLink
							twitterLink
							mbeziContent {
								title
								phoneNumber
								email
								contactAddress
							}
							mbweniContent {
								title
								phoneNumber
								email
								contactAddress
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

	return {
		themesOptions: response?.data?.themesOptions?.edges[0]?.node?.themeOptions,
	};
}
