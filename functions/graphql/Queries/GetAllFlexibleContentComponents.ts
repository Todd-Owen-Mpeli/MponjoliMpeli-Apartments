import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PAGES & BLOGS POSTS*/
/* Fetch all Flexible Content Components 
(For every flexible content page) */
export async function getAllFlexibleContentComponents(
	slug: string,
	postType: string,
	postTypeFlexibleContent: string
) {
	try {
		const content: DocumentNode = gql`
			{
        		mainContent: ${postType}(where: {name: "${slug}", status: PUBLISH}) {
        		  edges {
						node {
							template {
								... on DefaultTemplate {
									flexibleContent {
										flexibleContent {
											... on ${postTypeFlexibleContent}_HeroSection {
													fieldGroupName
													title
													paragraph
													buttonLink {
														url
														title
														target
													}
													buttonLinkTwo {
														url
														title
														target
													}
													backgroundImage {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
													backgroundVideoUrl
													backgroundImageOrVideo
											}
											... on ${postTypeFlexibleContent}_HeroSectionTwo {
												fieldGroupName
												title
												paragraph
												backgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
												backgroundVideoUrl
                        						backgroundImageOrVideo
											}
											... on ${postTypeFlexibleContent}_IntroTitleImage {
													fieldGroupName
													title
													subtitle
													paragraph
													titleStart
													titleMiddle
													titleEnd
													smallImageOne {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
													smallImageTwo {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
													image {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
													imageLarge {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
											}
											... on ${postTypeFlexibleContent}_ContentGridServices {
												fieldGroupName
												title
												subtitle
												paragraph
												servicesGrid {
													card {
														title
														paragraph
														icon {
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
											... on ${postTypeFlexibleContent}_ContentLargeBackgroundImage {
												fieldGroupName
												title
												paragraph
												backgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
												contentBlockOne {
													title
													subtitle
													paragraph
												}
												contentBlockTwo {
													title
													subtitle
													paragraph
												}
											}
											... on ${postTypeFlexibleContent}_ContentImageGrid {
												fieldGroupName
												gridContent {
													card {
														title
														paragraph
														contentLocation
														backgroundImage {
															sourceUrl
														}
													}
												}
											}
											... on ${postTypeFlexibleContent}_TitleStats {
												fieldGroupName
												title
												image {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
												contentGrid {
													card {
														title
														paragraph
													}
												}
											}
											... on ${postTypeFlexibleContent}_ApartmentLocationMap {
												fieldGroupName
												apartmentDisplayOptions
											}
											... on ${postTypeFlexibleContent}_ApartmentsGrid {
												fieldGroupName
												grid {
													card {
														title
														link {
															url
															title
															target
														}
														backgroundImage {
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
											... on ${postTypeFlexibleContent}_ContentButtonLinkTwoImages {
												fieldGroupName
												title
												paragraph
												paragraphTwo
												buttonLink {
													url
													title
													target
												}
												smallImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
												largeImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_LargeTitleParagraph {
												fieldGroupName
												paragraph
												titleStart
												titleMiddle
												titleEnd
												smallImageOne {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
												smallImageTwo {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_TitleParagraph {
												fieldGroupName
												title
												paragraph
											}
											... on ${postTypeFlexibleContent}_TitleParagraphTwo {
												fieldGroupName
												title
												paragraph
											}
											... on ${postTypeFlexibleContent}_ViewApartments {
												fieldGroupName
												title
												subtitle
												buttonLink {
													url
													title
													target
												}
												image {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_SingleApartmentMainContent {
												fieldGroupName
												heroBackgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
												imageGallery {
													image {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
												}
												mainContent {
													title
													location
													description
													lettingCompany
													rightSectionTitle
													buttonLink {
														url
														title
														target
													}
													monthlyInfo {
														title
														rent
													}
													weeklyInfo {
														title
														rent
													}
													lettingDetails {
														bulletPoint
													}
													highlightImages {
														image {
															altText
															sourceUrl
															mediaDetails {
																height
																width
															}
														}
													}
													iconGrid {
														card {
															text
															icon {
																altText
																sourceUrl
																mediaDetails {
																	height
																	width
																}
															}
														}
													}
													keyInfoImages {
														image {
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
											... on ${postTypeFlexibleContent}_BlogsGrid {
                							  fieldGroupName
                							}
											... on ${postTypeFlexibleContent}_ImageGrid {
													fieldGroupName
													image {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
													imageTwo {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
													imageThree {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
													imageFour {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
													imageFive {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
													imageSix {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
											}
											... on ${postTypeFlexibleContent}_Cta {
												fieldGroupName
												title
												paragraph
												buttonLink {
													url
													title
													target
												}
												backgroundImage {
													sourceUrl
												}
											}
											... on ${postTypeFlexibleContent}_Sustainability {
													fieldGroupName
													title
													subtitle
													paragraph
													imageText
													percentage
													image {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
											}
											... on ${postTypeFlexibleContent}_ContactInfo {
												fieldGroupName
												title
												paragraph
												image {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_ContactForm {
												fieldGroupName
												title
											}
											... on ${postTypeFlexibleContent}_ErrorPageContent {
												fieldGroupName
												paragraph
												title
												buttonLink {
												url
												title
												target
												}
												backgroundImage {
												sourceUrl
												}
											}
										}
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

		return {
			content:
				response.data?.mainContent?.edges[0]?.node?.template?.flexibleContent
					?.flexibleContent,
		};
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all flexible content components"
		);
	}
}
