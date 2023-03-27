import Link from "next/link";
import {useState, FC} from "react";
import {motion} from "framer-motion";
import {fadeInUp, fadeInTwo, stagger} from "../animations/animations";

// Components
import SideMenu from "./Elements/SideMenu";
import Paragraph from "./Elements/Paragraph";
import NavbarMenuLinks from "./Elements/NavbarMenuLinks";

// Styling
import styles from "../styles/components/Hero.module.scss";

interface HeroProps {
	title: string;
	paragraph: string;
	twitterLink: string;
	facebookLink: string;
	linkedinLink: string;
	instagramLink: string;
	backgroundImage: string;

	// Menu Links
	mainMenuLinks: [
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
	heroMenuLinks: [
		{
			node: {
				id: string;
				url: string;
				label: string;
			};
		}
	];

	// Address Content
	mbeziContent: {
		email: string;
		title: string;
		phoneNumber: string;
		contactAddress: string;
	};
	mbweniContent: {
		email: string;
		title: string;
		phoneNumber: string;
		contactAddress: string;
	};
}

const HeroThree: FC<HeroProps> = ({
	title,
	paragraph,
	twitterLink,
	facebookLink,
	linkedinLink,
	instagramLink,
	mbeziContent,
	mbweniContent,
	mainMenuLinks,
	heroMenuLinks,
	backgroundImage,
	locationMenuLinks,
}) => {
	/* Hides or Displays the Full Nav Menu */
	const [menuActive, setMenuActive] = useState(false);

	function toggleMenu() {
		setMenuActive(!menuActive);
	}

	return (
		<section className="pb-0 lg:pb-4 bg-green bg-gradient-to-t from-darkGreen">
			<div
				className="flex flex-col bg-cover bg-center bg-no-repeat h-full min-h-[98.5vh]"
				style={{
					backgroundImage: `linear-gradient(0deg,rgba(1, 42, 45, 0.65),rgba(1, 42, 45, 0.65)),url("${backgroundImage}")`,
				}}
			>
				<nav className="relative flex items-center justify-between px-6 py-6">
					<ul className="absolute hidden transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:flex lg:mx-auto lg:my-6 lg:items-center lg:w-auto lg:gap-x-20">
						{/* Menu Link*/}
						{heroMenuLinks?.map((keys) => (
							<li key={keys?.node?.id}>
								<NavbarMenuLinks
									url={keys?.node?.url}
									label={keys?.node?.label}
									tailwindStyling="text-base xl:text-lg tracking-[.15rem] text-white hover:text-brightGreen transition-all ease-in-out duration-500"
								/>
							</li>
						))}
					</ul>
					<button
						type="button"
						onClick={toggleMenu}
						aria-label="toggle menu"
						className={menuActive ? styles.navToggleOpen : styles.navToggle}
					>
						<span aria-hidden="true"></span>
					</button>
				</nav>

				<div className="container flex flex-col items-baseline justify-center px-4 m-auto text-center sm:text-left">
					<div className="max-w-lg">
						<h1 className="mb-3 text-7xl sm:text-8xl text-white font-bold lg:leading-[4.5rem]">
							{title}
							<motion.span
								variants={fadeInTwo}
								className="ml-2 text-brightGreen"
							>
								Apartments
							</motion.span>
						</h1>
					</div>
					<div className="max-w-lg">
						<Paragraph
							content={paragraph}
							tailwindStyling="mb-6 py-6 text-white leading-[1.75rem] font-[500] text-medium text-center sm:text-left"
						/>
					</div>
				</div>
			</div>

			{/* Hidden Side Menu */}
			<SideMenu
				menuActive={menuActive}
				twitterLink={twitterLink}
				facebookLink={facebookLink}
				linkedinLink={linkedinLink}
				instagramLink={instagramLink}
				mbeziContent={mbeziContent}
				mbweniContent={mbweniContent}
				mainMenuLinks={mainMenuLinks}
				locationMenuLinks={locationMenuLinks}
			/>
		</section>
	);
};

export default HeroThree;