import Image from "next/image";
import {IHeroTwo} from "./types";
import {useState, FC} from "react";
import {useContentContext} from "@/context/context";

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
	const content = useContentContext();
	const mainImageVideoTailwindcss: string = `object-cover object-center w-full h-full`;

	/* Hides or Displays the Full Nav Menu */
	const [menuActive, setMenuActive] = useState(false);

	function toggleMenu() {
		setMenuActive(!menuActive);
	}

	return (
		<section
			className="mb-0 md:mb-4 bg-center bg-no-repeat bg-cover min-h-[50vh] relative z-[999]"
			style={{
				backgroundImage: `linear-gradient(0deg,rgba(1, 42, 45, 0.65),rgba(1, 42, 45, 0.65)),url("${backgroundImage.sourceUrl}")`,
			}}
		>
			{/* Background Video */}
			<div
				className="absolute top-0 bottom-0 left-0 w-full h-full max-h-[75vh] z-[995] bg-center
					 bg-no-repeat bg-cover overflow-hidden"
				style={{backgroundImage: `url("${backgroundImage.sourceUrl}")`}}
			>
				{/* Background Video */}
				<div className="absolute top-0 bottom-0 left-0 w-full h-full">
					<div className="hidden xl:block relative pb-[56.25%] overflow-hidden max-w-full h-auto bg-center bg-no-repeat bg-cover min-h-full xl:min-h-screen">
						<iframe
							allowFullScreen
							className={
								backgroundImageOrVideo === "Video"
									? "absolute top-[-100px] left-0 border-none w-full h-full"
									: `hidden`
							}
							src={backgroundVideoUrl}
						/>
					</div>
				</div>

				{/* Image */}
				<Image
					priority={true}
					width={backgroundImage.mediaDetails.width}
					height={backgroundImage.mediaDetails?.height}
					className={
						backgroundImageOrVideo === "Image"
							? `block ${mainImageVideoTailwindcss}`
							: ` hidden`
					}
					src={backgroundImage.sourceUrl}
					alt={backgroundImage.altText}
				/>
				<div className="absolute top-0 bottom-0 left-0 w-full h-full opacity-60 bg-green-dark" />
			</div>
			<div className="relative z-[999]">
				<div className="flex flex-col">
					<nav className="relative flex items-center justify-center px-6 py-6">
						<ul className="absolute hidden transform -translate-x-1/2 -translate-y-1/2 h-fit top-1/2 left-1/2 lg:flex lg:mx-auto lg:my-6 lg:items-center lg:w-auto lg:gap-x-20">
							{/* Menu Link*/}
							{content.heroMenuLinks.length > 0 ? (
								content.heroMenuLinks?.map((keys) => (
									<li key={keys?.node?.id}>
										<NavbarMenuLinks
											url={keys?.node?.url}
											label={keys?.node?.label}
											tailwindStyling="text-base xl:text-lg tracking-[.15rem] text-white hover:text-green-bright transition-all ease-in-out duration-500"
										/>
									</li>
								))
							) : (
								<></>
							)}
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
					<div className="container flex flex-col items-center justify-center px-4 m-auto my-24 text-center sm:text-left">
						<h1 className="mb-3 text-7xl sm:text-8xl text-white font-bold lg:leading-[4.5rem]">
							{title}
						</h1>
						<div className="max-w-2xl mt-10">
							<Paragraph
								content={paragraph}
								tailwindStyling="mb-6 py-6 text-white leading-[1.75rem] font-[500] text-base text-center"
							/>
						</div>
					</div>
				</div>
				{/* Hidden Side Menu */}
				<SideMenu menuActive={menuActive} />
			</div>
		</section>
	);
};

export default HeroTwo;
