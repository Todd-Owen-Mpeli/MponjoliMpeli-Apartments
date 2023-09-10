export type ISeo = {
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

export type IBlogs = [
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

export type IContent = [
	{
		content: any;
	}
];

export type IPostTypes = {
	pages: string;
	posts: string;
	apartments: string;
	previewPage: string;
	previewPost: string;
	previewApartments: string;
};

export type IMainMenuLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];

export type INavbarMenuLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];

export type IFooterMenuLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];

export type IThemesOptionsContent = {
	address: string;
	email: string;
	emailOptionTwo: string;
	phoneNumber: string;
	phoneNumberOptionTwo: string;
	phoneNumberOptionThree: string;
	copyRightText: string;
	facebookLink: string;
	linkedinLink: string;
	twitterLink: string;
	ctaTitle: string;
	ctaParagraph: string;
	websiteCreated: string;
	ctaButtonLink: {
		url: string;
		title: string;
		target: string;
	};
	ctaBackgroundImage: {
		sourceUrl: string;
	};
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

export type IPostTypesFlexibleContent = {
	pages: string;
	previewPage: string;
	previewPost: string;
	previewApartments: string;
};

/* CONTEXT PROVIDERS  */
export type IGlobalProps = {
	blogs: IBlogs;
	apartmentsContent: any;
	mainMenuLinks: IMainMenuLinks;
	navbarMenuLinks: INavbarMenuLinks;
	footerMenuLinks: IFooterMenuLinks;
	themesOptionsContent: IThemesOptionsContent;
};

export type IContentContext = {
	seo: ISeo;
	content: IContent;
	postTypeFlexibleContent: IPostTypesFlexibleContent;
};

export type IGlobalContext = {
	blogs: IBlogs;
	apartmentsContent: any;
	mainMenuLinks: IMainMenuLinks;
	navbarMenuLinks: INavbarMenuLinks;
	footerMenuLinks: IFooterMenuLinks;
	themesOptionsContent: IThemesOptionsContent;
};

export type IGlobalContextProvider = {
	globalProps: IGlobalContext;
	children: React.ReactNode;
};
