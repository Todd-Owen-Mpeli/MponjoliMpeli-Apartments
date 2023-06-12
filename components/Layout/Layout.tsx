import {FC} from "react";

// Components
import Footer from "../Footer";
import MetaTag from "../Meta/MetaTag";

interface ILayout {
	children: React.ReactNode;
}

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
