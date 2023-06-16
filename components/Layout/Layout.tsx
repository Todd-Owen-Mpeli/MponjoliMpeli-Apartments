import {FC} from "react";
import {ILayout} from "../types";

// Components
import Footer from "../Footer";
import MetaTag from "../Meta/MetaTag";

const Layout: FC<ILayout> = ({children}) => {
	return (
		<div>
			{/* <!--===== META TAG =====--> */}
			<MetaTag />

			<div>{children}</div>

			<Footer />
		</div>
	);
};

export default Layout;
