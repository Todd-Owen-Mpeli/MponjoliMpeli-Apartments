import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

// THEMES OPTIONS CONTENT
export async function getThemesOptionsContent() {
	try {
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
								copyRightText
								linkedinLink
								instagramLink
								facebookLink
								twitterLink
								ctaTitle
								ctaParagraph
								websiteCreated
								ctaButtonLink {
									url
									title
									target
								}
								ctaBackgroundImage {
									sourceUrl
								}
								businessHours {
									content
								}
								jangwaniContent {
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

		return response?.data?.themesOptions?.edges[0]?.node?.themeOptions;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch themes options content"
		);
	}
}
