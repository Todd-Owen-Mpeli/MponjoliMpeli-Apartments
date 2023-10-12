// Imports
import {FC} from "react";
import {ILayout} from "@/types/components/index";

// Components
import MetaTag from "@/components/Meta/MetaTag";

const Layout: FC<ILayout> = ({children}) => {
	return (
		<>
			<MetaTag />

			<main>{children}</main>
		</>
	);
};

export default Layout;
