// Import
import {
	IPostTypes,
	IContentContext,
	IPostTypesFlexibleContent,
} from "@/types/context";
import {createContext, useContext} from "react";

/* PUBLIC PAGES & POSTS */
/* PREVIEW PAGES & POSTS */
export const postType: IPostTypes = {
	// Public pages
	pages: "pages",
	posts: "posts",
	apartments: "apartments",
	// Preview pages
	previewPage: "page",
	previewPost: "post",
	previewApartments: "apartments",
};
export const homePage: string = "Home";
export const errorPage: string = "error-page";
export const flexibleContentType: IPostTypesFlexibleContent = {
	// Public pages
	pages: "DefaultTemplate_Flexiblecontent_FlexibleContent",
	// Preview pages
	previewPage: "Page_Flexiblecontent_FlexibleContent",
	previewPost: "Post_Flexiblecontent_FlexibleContent",
	previewApartments: "Apartments_Flexiblecontent_FlexibleContent",
};

export const PagesContext = createContext<IContentContext | undefined>(
	undefined
);

export const usePageContext = () => {
	const content = useContext(PagesContext);

	if (content === undefined) {
		throw new Error(`Pages Context must be used to render content.`);
	}

	return content;
};
