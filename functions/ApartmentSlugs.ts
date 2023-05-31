import {DocumentNode, gql} from "@apollo/client";
import {client} from "../config/apollo";

type SlugResponse = {
	slug: string;
	modified: string;
};

interface ISlug extends Array<SlugResponse> {}

export const fetchApartmentSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				apartmentsSlugArray: apartments(first: 100, where: {status: PUBLISH}) {
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

		return response?.data?.apartmentsSlugArray?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error("Something went wrong trying to fetch apartments slugs");
	}
};

export const fetchApartmentSlugsContent = async (slug: string) => {
	try {
		const getMbeziPageContent: DocumentNode = gql`
			{
				mainContent: apartment(id: "${slug}", idType: SLUG) {
                    title
                    seo {
							canonical
							cornerstone
							focuskw
							fullHead
							metaDesc
							metaKeywords
							metaRobotsNofollow
							metaRobotsNoindex
							opengraphAuthor
							opengraphDescription
							opengraphImage {
								mediaItemUrl
							}
							opengraphModifiedTime
							opengraphPublishedTime
							opengraphPublisher
							opengraphSiteName
							opengraphTitle
							opengraphType
							opengraphUrl
							readingTime
							title
							twitterDescription
							twitterTitle
							twitterImage {
								mediaItemUrl
							}
						}
					apartmentsOptionsPage {
						heroSection {
							title
							paragraph
							backgroundImage {
								sourceUrl
							}
						}
						mainContent {
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
									buttonLink {
										url
										title
										target
									}
									rightSectionTitle
									weeklyInfo {
										title
										rent
									}
									monthlyInfo {
										title
										rent
									}
									lettingDetails {
										bulletPoint
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
						stats {
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
						imageGrid {
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
					}
				}
			}
		`;

		const response: any = await client.query({
			query: getMbeziPageContent,
		});

		return {
			seo: response?.data?.mainContent?.seo,
			pageTitle: response?.data?.mainContent?.title,
			content: response.data?.mainContent?.apartmentsOptionsPage,
		};
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch apartments slugs content"
		);
	}
};
