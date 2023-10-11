// Elements
export interface IBackHoverButton {
	link: string;
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

export type IIntroTitleImage = {
	title: string;
	subtitle: string;
	titleEnd: string;
	titleStart: string;
	titleMiddle: string;
	paragraph: string;
	smallImageOne: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	smallImageTwo: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	image: {
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
};

export type ISideMenu = {
	menuActive: boolean;
};

export interface IContactInfo {
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

export interface IContactForm {
	title: string;
}

export type IApartmentLocationMap = {
	apartmentDisplayOptions: string;
};

// Components
export type IApartmentCard = {
	link: string;
	title: string;
	backgroundImage: string;
};

export interface IApartmentCardTwo {
	title: string;
	link: {
		url: string;
		title: string;
		target: string;
	};
	backgroundImage: string;
}

// Components Cards
export interface ITitleStats {
	title: string;
	backgroundColorOptions: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	contentGrid: [
		{
			title: string;
			paragraph: string;
		}
	];
}

export interface IContentImageCard {
	title: string;
	paragraph: string;
	contentLocation: string;
	backgroundImage: string;
}

export type IContentButtonLinkTwoImages = {
	title: string;
	paragraph: string;
	paragraphTwo: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	smallImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	largeImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
};

export type IContentLargeBackgroundImage = {
	title: string;
	paragraph: string;
	contentBlockOne: {
		title: string;
		subtitle: string;
		paragraph: string;
	};
	contentBlockTwo: {
		title: string;
		subtitle: string;
		paragraph: string;
	};
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
};

export type IContentGridServicesCard = {
	title: string;
	paragraph: string;
	icon: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
};

export type IContentGridServices = {
	title: string;
	subtitle: string;
	paragraph: string;
	services: [
		{
			card: {
				title: string;
				paragraph: string;
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
};

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

export type IHighlightImagesCard = {
	tailwindStyling: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
};

export type IApartmentSingle = {
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
};
export type IApartmentGallerySlider = {
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
};
export type IApartmentSingleDescription = {
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
export type IApartmentSingleHighlightInfo = {
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
};

export type IApartmentImage = {
	url: string;
	alt: string;
};

export type IViewApartments = {
	title: string;
	subtitle: string;
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
};

export type IHero = {
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
};

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

export type IHeroTwo = {
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
};

export type ITitleParagraph = {
	title: string;
	paragraph: string;
};

export type ILargeTitleParagraph = {
	titleEnd: string;
	titleStart: string;
	titleMiddle: string;
	paragraph: string;
	smallImageOne: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	smallImageTwo: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
};

export type IParagraphProps = {
	content: string;
	tailwindStyling: string;
};

export type INavbarLinks = {
	url: string;
	label: string;
	tailwindStyling: string;
};

export type ISustainability = {
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
};

export type IImageGrid = {
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
};

// layout
export type ILayout = {
	children: React.ReactNode;
};

export type IErrorPage = {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
