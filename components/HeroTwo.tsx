// Imports
import {useState, FC} from "react";
import {motion} from "framer-motion";
import {IHeroTwo} from "@/types/components";
import {useGlobalContext} from "@/context/global";
import {fadeInUp, initial} from "../animations/animations";

// Components
import SideMenu from "./Elements/SideMenu";
import Paragraph from "./Elements/Paragraph";
import NavbarMenuLinks from "./Elements/NavbarMenuLinks";

// Styling
import styles from "../styles/components/Hero.module.scss";

const HeroTwo: FC<IHeroTwo> = ({
	title,
	paragraph,
	backgroundImage,
	backgroundVideoUrl,
	backgroundImageOrVideo,
}) => {
	const globalContext = useGlobalContext();

	/* Hides or Displays the Full Nav Menu */
	const [menuActive, setMenuActive] = useState(false);

	function toggleMenu() {
		setMenuActive(!menuActive);
	}

	return (
		<section className={styles.hero + ` h-fit bg-white`}>
			<div
				className="relative bg-center bg-no-repeat bg-cover pb-16 px-4"
				style={{
					backgroundImage: `linear-gradient(
							0deg,
							rgba(1, 42, 45, 1),
							rgba(1, 42, 45, 0.95),
							rgba(1, 42, 45, 0.85),
							rgba(1, 42, 45, 0.60)
						),url("${backgroundImage.sourceUrl}")`,
					clipPath: `ellipse(100% 55% at 48% 44%)`,
				}}
			>
				<div className="flex flex-col">
					<nav
						className={
							styles.homeNav +
							` relative items-center justify-center px-6 py-6 hidden xl:flex`
						}
					>
						<ul className="absolute transform -translate-x-1/2 -translate-y-1/2 h-fit top-1/2 left-1/2 lg:flex lg:mx-auto lg:my-6 lg:items-center lg:w-auto lg:gap-x-20 flex items-center gap-8 lg:gap-16">
							{/* Menu Link*/}
							{globalContext.navbarMenuLinks.length > 0 ? (
								globalContext.navbarMenuLinks.map((item: any, keys: number) => (
									<li key={keys}>
										<NavbarMenuLinks
											url={item?.node?.url}
											label={item?.node?.label}
											tailwindStyling="text-medium text-white font-normal tracking-[0.15rem] uppercase transition-all duration-500 ease-in-out hover:text-goldPrime"
										/>
									</li>
								))
							) : (
								<></>
							)}
						</ul>
					</nav>
					<div className="container max-w-2xl xl:max-w-3xl mx-auto text-center mt-24">
						<motion.h1
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-5xl lg:text-7xl text-white mb-6"
						>
							{title}
						</motion.h1>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-md md:max-w-lg mx-auto text-medium sm:text-lg text-center text-white mb-10"
						/>
						<div className="border-t-[1px] border-goldPrime opacity-30 my-4 max-w-xl mx-auto" />
					</div>
				</div>
			</div>
			<div>
				<button
					type="button"
					onClick={toggleMenu}
					aria-label="toggle menu"
					className={menuActive ? styles.navToggleOpen : styles.navToggle}
				>
					<span aria-hidden="true"></span>
				</button>
				{/* Hidden Side Menu */}
				<SideMenu menuActive={menuActive} />
			</div>
		</section>
	);
};

export default HeroTwo;
