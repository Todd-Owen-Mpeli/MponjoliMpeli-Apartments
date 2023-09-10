import {FC} from "react";
import Link from "next/link";
import {INavbarLinks} from "@/types/components";

const NavbarMenuLinks: FC<INavbarLinks> = ({url, label, tailwindStyling}) => {
	return (
		<Link className={tailwindStyling} href={url}>
			{label}
		</Link>
	);
};

export default NavbarMenuLinks;
