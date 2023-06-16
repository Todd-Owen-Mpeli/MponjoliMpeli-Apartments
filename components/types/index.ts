// Global Pages
export interface IContentContext {
	seo: {
		canonical: string;
		cornerstone: Boolean;
		focuskw: string;
		fullHead: string;
		metaDesc: string;
		metaKeywords: string;
		metaRobotsNofollow: string;
		metaRobotsNoindex: string;
		opengraphAuthor: string;
		opengraphDescription: string;
		opengraphImage: {
			mediaItemUrl: string;
		};
		opengraphModifiedTime: string;
		opengraphPublishedTime: string;
		opengraphPublisher: string;
		opengraphSiteName: string;
		opengraphTitle: string;
		opengraphType: string;
		opengraphUrl: string;
		readingTime: number;
		title: string;
		twitterDescription: string;
		twitterTitle: string;
		twitterImage: {
			mediaItemUrl: string;
		};
	};
	content: any;
	blogs: [
		{
			node: {
				id: string;
				uri: string;
				date: string;
				title: string;
				template: {
					flexibleContent: {
						flexibleContent: [
							{
								fieldGroupName: string;
								paragraph: string;
								title: string;
							}
						];
					};
				};
				featuredImage: {
					node: {
						altText: string;
						sourceUrl: string;
						mediaDetails: {
							width: number;
							height: number;
						};
					};
				};
			};
		}
	];
	footerMenuLinks: [
		{
			node: {
				id: string;
				url: string;
				label: string;
			};
		}
	];
	mainMenuLinks: [
		{
			node: {
				id: string;
				url: string;
				label: string;
			};
		}
	];
	heroMenuLinks: [
		{
			node: {
				id: string;
				url: string;
				label: string;
			};
		}
	];
	locationMenuLinks: [
		{
			node: {
				id: string;
				url: string;
				label: string;
			};
		}
	];
	themesOptionsContent: {
		email: string;
		emailOptionTwo: string;
		phoneNumber: string;
		phoneNumberOptionTwo: string;
		phoneNumberOptionThree: string;
		copyRightText: string;
		linkedinLink: string;
		instagramLink: string;
		facebookLink: string;
		twitterLink: string;
		businessHours: {
			content: string;
		};
		jangwaniContent: {
			title: string;
			phoneNumber: string;
			email: string;
			contactAddress: string;
		};
		mbweniContent: {
			title: string;
			phoneNumber: string;
			email: string;
			contactAddress: string;
		};
	};
}

// Components Cards
export interface IApartmentCard {
	title: string;
	link: {
		url: string;
		title: string;
		target: string;
	};
	backgroundImage: string;
}

export interface IApartSingleCardTwo {
	bulletpoint: string;
}

export interface IBlogsCard {
	uri: string;
	date: string;
	title: string;
	paragraph: string;
	featuredImage: {
		node: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
}

export interface IContentImageCard {
	title: string;
	paragraph: string;
	contentLocation: string;
	backgroundImage: string;
}

export interface IHighlightImagesCard {
	tailwindStyling: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

export interface ILogoCard {
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

export interface IProfileCard {
	title: string;
	jobPosition: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

export interface IStatsCard {
	icon: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	title: string;
	paragraph: string;
}

export interface ITextBoxCard {
	title: string;
	paragraph: string;
	imageLocation: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

// Elements
export interface IBackHoverButton {
	link: string;
}

export interface INavbarMenuLinks {
	url: string;
	label: string;
	tailwindStyling: string;
}

export interface IParagraph {
	content: string;
	tailwindStyling: string;
}

export interface ISideMenu {
	menuActive: boolean;
}

// layout
export interface ILayout {
	children: React.ReactNode;
}

// Components
export interface IApartmentsGrid {
	apartmentsGrid: [
		{
			card: {
				id: string;
				title: string;
				link: {
					url: string;
					title: string;
					target: string;
				};
				backgroundImage: {
					sourceUrl: string;
				};
			};
		}
	];
}

export interface IApartmentSingle {
	heroBackgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageGallery: [
		{
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
		}
	];
	mainContent: {
		title: string;
		location: string;
		description: string;
		lettingCompany: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		rightSectionTitle: string;
		weeklyInfo: {
			title: string;
			rent: string;
		};
		monthlyInfo: {
			title: string;
			rent: string;
		};
		lettingDetails: [
			{
				bulletPoint: string;
			}
		];
		iconGrid: [
			{
				card: {
					text: string;
					icon: {
						altText: string;
						sourceUrl: string;
						mediaDetails: {
							height: number;
							width: number;
						};
					};
				};
			}
		];
		highlightImages: [
			{
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						height: number;
						width: number;
					};
				};
			}
		];
		keyInfoImages: [
			{
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						height: number;
						width: number;
					};
				};
			}
		];
	};
}

export interface IArticleImageBanner {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
}

export interface IContactForm {
	title: string;
}

export interface IContentBackgroundImage {
	gridContent: [
		{
			card: {
				id: string;
				title: string;
				paragraph: string;
				contentLocation: string;
				backgroundImage: {
					sourceUrl: string;
				};
			};
		}
	];
}

export interface IContentStats {
	title: string;
	paragraph: string;
	statsOne: {
		title: string;
		subtitle: string;
		paragraph: string;
	};
	statsTwo: {
		title: string;
		subtitle: string;
		paragraph: string;
	};
}

export interface ICTA {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
}

export interface IErrorPage {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLinkTwo: {
		url: string;
		title: string;
		target: string;
	};
}

export interface IHero {
	title: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLinkTwo: {
		url: string;
		title: string;
		target: string;
	};
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	backgroundVideoUrl: string;
	backgroundImageOrVideo: string;
}

export interface IHeroTwo {
	title: string;
	paragraph: string;
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	backgroundVideoUrl: string;
	backgroundImageOrVideo: string;
}

export interface IHeroThree {
	title: string;
	paragraph: string;
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	backgroundVideoUrl: string;
	backgroundImageOrVideo: string;
}

export interface IImageGrid {
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageTwo: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageThree: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageFour: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageFive: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageSix: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

export interface IStats {
	content: [
		{
			card: {
				id: string;
				icon: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						height: number;
						width: number;
					};
				};
				title: string;
				paragraph: string;
			};
		}
	];
}

export interface IIntroSection {
	title: string;
	subtitle: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageTwo: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageLarge: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

export interface ILogos {
	title: string;
	logoGrid: [
		{
			id: string;
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
		}
	];
}

export interface INewsletter {
	title: string;
	titleTwo: string;
	paragraph: string;
	paragraphTwo: string;
}

export interface ISustainability {
	title: string;
	subtitle: string;
	paragraph: string;
	percentage: string;
	imageText: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

export interface ITextBoxImage {
	title: string;
	subtitle: string;
	paragraph: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

export interface ITextImage {
	title: string;
	paragraph: string;
	imageText: string;
	imageTextTwo: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

export interface ITextImageGrid {
	gridContent: [
		{
			card: {
				id: string;
				title: string;
				paragraph: string;
				imageLocation: string;
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						height: number;
						width: number;
					};
				};
			};
		}
	];
}

export interface ITextImageTwo {
	title: string;
	paragraph: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

export interface ITitleParagraph {
	title: string;
	paragraph: string;
}

export interface ITitleParagraphTwo {
	title: string;
	paragraph: string;
}
