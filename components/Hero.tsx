import Link from "next/link";
import {IHero} from "./types";
import Image from "next/image";
import {useState, FC} from "react";
import {motion} from "framer-motion";
import {useContentContext} from "@/context/context";
import {fadeInUp, fadeInTwo, stagger, initial} from "../animations/animations";

// Components
import SideMenu from "./Elements/SideMenu";
import Paragraph from "./Elements/Paragraph";
import NavbarMenuLinks from "./Elements/NavbarMenuLinks";

// Styling
import styles from "../styles/components/Hero.module.scss";

const Hero: FC<IHero> = ({
	title,
	paragraph,
	buttonLink,
	buttonLinkTwo,
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
		<section className="pb-0 md:pb-4 bg-green-default bg-gradient-to-t from-green-dark">
			<div
				className="flex flex-col bg-cover bg-center bg-no-repeat h-full min-h-[98.5vh]"
				style={{
					backgroundImage: `linear-gradient(0deg,rgba(1, 42, 45, 0.65),rgba(1, 42, 45, 0.65)),url("${backgroundImage.sourceUrl}")`,
				}}
			>
				{/* Background Video */}
				<div
					className="absolute top-0 bottom-0 left-0 w-full h-full max-h-[98.5vh] z-[995] bg-center
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
										? "absolute top-[-100px] left-0 border-none w-full h-full scale-110"
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

				<nav className="relative flex items-center justify-between px-6 py-6 z-[999]">
					<ul className="absolute hidden transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:flex lg:mx-auto lg:my-6 lg:items-center lg:w-auto lg:gap-x-20">
						{/* Menu Link*/}
						{content.heroMenuLinks.length > 0 ? (
							content.heroMenuLinks.map((keys) => (
								<li key={keys?.node?.id}>
									<NavbarMenuLinks
										url={keys.node.url}
										label={keys.node.label}
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

				<div className="container flex flex-col items-baseline justify-center px-4 m-auto text-center sm:text-left relative z-[999]">
					<div className="max-w-lg">
						<h1 className="flex flex-col sm:block text-left mb-3 text-7xl sm:text-8xl text-white font-bold lg:leading-[4.5rem]">
							{title}
							<motion.span
								initial={initial}
								whileInView={fadeInTwo}
								viewport={{once: true}}
								className="ml-2 text-green-bright"
							>
								Today
							</motion.span>
						</h1>
					</div>
					<div className="max-w-lg">
						<Paragraph
							content={paragraph}
							tailwindStyling="mb-6 py-6 text-white leading-[1.75rem] font-[500] text-base text-center sm:text-left"
						/>
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="flex justify-center gap-4 sm:justify-start item-center"
						>
							<Link href={buttonLink?.url} target={buttonLink?.target}>
								<motion.button
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={
										buttonLink?.url
											? `block px-6 py-3 font-semibold transition duration-200  w-fit sm:mx-0 hover:bg-goldPrimeDark text-green hover:text-white bg-white rounded-t-lg rounded-l-lg`
											: `hidden`
									}
								>
									{buttonLink?.title}
								</motion.button>
							</Link>
							<Link href={buttonLinkTwo?.url} target={buttonLinkTwo?.target}>
								<motion.button
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={
										buttonLink?.url
											? `block px-6 py-3 font-semibold text-white transition duration-200  w-fit sm:mx-0 hover:bg-green-bright bg-green-default rounded-t-lg rounded-l-lg`
											: `hidden`
									}
								>
									{buttonLinkTwo?.title}
								</motion.button>
							</Link>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Hidden Side Menu */}
			<SideMenu menuActive={menuActive} />
		</section>
	);
};

export default Hero;
