import {FC} from "react";
import Link from "next/link";

interface Props {
	link: {
		url: string;
		title: string;
		target: string;
	};
	tailwindStyling: string;
}

const NavLink: FC<Props> = ({link, tailwindStyling}) => {
	return (
		<li>
			<Link className={tailwindStyling} href={link?.url} target={link?.target}>
				{link?.title}
			</Link>
		</li>
	);
};

export default NavLink;
