import {client} from "../config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PAGES */
/* Fetch all Flexible Content Components 
(For every flexible content page) */
export async function getAllPagesFlexibleContentComponents(slug: string) {
	try {
		const content: DocumentNode = gql`
			{
				mainContent: pages(where: {name: "${slug}", status: PUBLISH}) {
					edges {
						node {
							template {
								... on DefaultTemplate {
									flexibleContent {
										flexibleContent {
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSection {
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
													sourceUrl
												}
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSectionTwo {
												fieldGroupName
												title
												paragraph
												backgroundImage {
													sourceUrl
												}
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSectionThree {
												fieldGroupName
												title
												paragraph
												backgroundImage {
													sourceUrl
												}
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_IntroSection {
												fieldGroupName
												title
												subtitle
												paragraph
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
												imageTwo {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_TitleParagraph {
												fieldGroupName
												title
												paragraph
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContentStats {
												fieldGroupName
												title
												paragraph
												statsOne {
													title
													subtitle
													paragraph
												}
												statsTwo {
													title
													subtitle
													paragraph
												}
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_FirstTimeLettings {
												fieldGroupName
												title
												subtitle
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_TextImage {
												fieldGroupName
												title
												paragraph
												imageText
												imageTextTwo
												image {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_TextImageTwo {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_InfoContent {
												fieldGroupName
												content {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_JumboContent {
												fieldGroupName
												gridContent {
													card {
														title
														paragraph
														imageLocation
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContentImageGrid {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_ApartmentsGrid {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_SingleApartmentMainContent {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_ImageGrid {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_Sustainability {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_TrustedBrands {
												fieldGroupName
												paragraph
												title
												logos {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_ArticleImageBanner {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContactInfo {
												fieldGroupName
												title
												paragraph
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContactForm {
												fieldGroupName
												title
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_Cta {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ErrorPageContent {
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

/* LOCATIONS PAGES */
/* Fetch all Flexible Content Components 
(For every flexible content page) */
export async function getAllLocationsPagesFlexibleContentComponents(
	slug: string
) {
	try {
		const content: DocumentNode = gql`
			{
				mainContent: locations(where: {name: "${slug}", status: PUBLISH}) {
					edges {
						node {
							template {
								... on DefaultTemplate {
									flexibleContent {
										flexibleContent {
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSection {
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
													sourceUrl
												}
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSectionTwo {
												fieldGroupName
												title
												paragraph
												backgroundImage {
													sourceUrl
												}
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSectionThree {
												fieldGroupName
												title
												paragraph
												backgroundImage {
													sourceUrl
												}
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_IntroSection {
												fieldGroupName
												title
												subtitle
												paragraph
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
												imageTwo {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_TitleParagraph {
												fieldGroupName
												title
												paragraph
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContentStats {
												fieldGroupName
												title
												paragraph
												statsOne {
													title
													subtitle
													paragraph
												}
												statsTwo {
													title
													subtitle
													paragraph
												}
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_FirstTimeLettings {
												fieldGroupName
												title
												subtitle
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_TextImage {
												fieldGroupName
												title
												paragraph
												imageText
												imageTextTwo
												image {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_TextImageTwo {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_InfoContent {
												fieldGroupName
												content {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_JumboContent {
												fieldGroupName
												gridContent {
													card {
														title
														paragraph
														imageLocation
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContentImageGrid {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_ApartmentsGrid {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_SingleApartmentMainContent {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_ImageGrid {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_Sustainability {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_TrustedBrands {
												fieldGroupName
												paragraph
												title
												logos {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_ArticleImageBanner {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContactInfo {
												fieldGroupName
												title
												paragraph
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContactForm {
												fieldGroupName
												title
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_Cta {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ErrorPageContent {
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

/* APARTMENTS PAGES */
/* Fetch all Flexible Content Components 
(For every flexible content page) */
export async function getAllApartmentPagesFlexibleContentComponents(
	slug: string
) {
	try {
		const content: DocumentNode = gql`
			{
				mainContent: apartments(where: {name: "${slug}", status: PUBLISH}) {
					edges {
						node {
							template {
								... on DefaultTemplate {
									flexibleContent {
										flexibleContent {
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSection {
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
													sourceUrl
												}
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSectionTwo {
												fieldGroupName
												title
												paragraph
												backgroundImage {
													sourceUrl
												}
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSectionThree {
												fieldGroupName
												title
												paragraph
												backgroundImage {
													sourceUrl
												}
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_IntroSection {
												fieldGroupName
												title
												subtitle
												paragraph
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
												imageTwo {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_TitleParagraph {
												fieldGroupName
												title
												paragraph
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContentStats {
												fieldGroupName
												title
												paragraph
												statsOne {
													title
													subtitle
													paragraph
												}
												statsTwo {
													title
													subtitle
													paragraph
												}
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_FirstTimeLettings {
												fieldGroupName
												title
												subtitle
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_TextImage {
												fieldGroupName
												title
												paragraph
												imageText
												imageTextTwo
												image {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_TextImageTwo {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_InfoContent {
												fieldGroupName
												content {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_JumboContent {
												fieldGroupName
												gridContent {
													card {
														title
														paragraph
														imageLocation
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContentImageGrid {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_ApartmentsGrid {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_SingleApartmentMainContent {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_ImageGrid {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_Sustainability {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_TrustedBrands {
												fieldGroupName
												paragraph
												title
												logos {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_ArticleImageBanner {
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
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContactInfo {
												fieldGroupName
												title
												paragraph
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContactForm {
												fieldGroupName
												title
											}
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_Cta {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ErrorPageContent {
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
