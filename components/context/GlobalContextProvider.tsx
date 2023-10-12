// Imports
import {FC} from "react";
import {GlobalContext} from "@/context/global";
import {IGlobalContextProvider} from "@/types/context";

const GlobalContextProvider: FC<IGlobalContextProvider> = ({
	children,
	globalProps,
}) => {
	return (
		<GlobalContext.Provider
			value={{
				blogs: globalProps?.blogs,
				mainMenuLinks: globalProps?.mainMenuLinks,
				navbarMenuLinks: globalProps?.navbarMenuLinks,
				footerMenuLinks: globalProps?.footerMenuLinks,
				apartmentsContent: globalProps?.apartmentsContent,
				themesOptionsContent: globalProps?.themesOptionsContent,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
