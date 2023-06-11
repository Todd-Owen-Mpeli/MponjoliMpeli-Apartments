import {FC} from "react";

// Components
import Footer from "../Footer";
import MetaTag from "../Meta/MetaTag";

interface ILayout {
	seo: any;
	pageTitle: string;
	footerMenuLinks: {
		footerMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
	};
	themesOptionsContent: {
		themeOptions: {
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
	};
	children: React.ReactNode;
}

const Layout: FC<ILayout> = ({
	seo,
	children,
	pageTitle,
	footerMenuLinks,
	themesOptionsContent,
}) => {
	return (
		<div>
			{/* <!--===== META TAG =====--> */}
			<MetaTag title={pageTitle} seo={seo} />

			<div>{children}</div>

			<Footer
				footerMenuLinks={footerMenuLinks?.footerMenuLinks}
				twitterLink={themesOptionsContent?.themeOptions?.twitterLink}
				linkedinLink={themesOptionsContent?.themeOptions?.linkedinLink}
				facebookLink={themesOptionsContent?.themeOptions?.facebookLink}
				instagramLink={themesOptionsContent?.themeOptions?.instagramLink}
			/>
		</div>
	);
};

export default Layout;
