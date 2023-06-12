import {createContext, useContext} from "react";

interface IDynamicContent {
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
		linkedinLink: string;
		instagramLink: string;
		facebookLink: string;
		twitterLink: string;
		businessHours: {
			content: string;
		};
		mbeziContent: {
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

export const ContentContext = createContext<IDynamicContent | undefined>(
	undefined
);

export const useContentContext = () => {
	const content = useContext(ContentContext);

	if (content === undefined) {
		throw new Error(`useDynamicPagesContext must be used to render content.`);
	}

	return content;
};
