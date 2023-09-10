// Import
import Link from "next/link";
import Image from "next/image";
import {useState, FC} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {fadeInUp, stagger, initial} from "../animations/animations";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import {IHero} from "@/types/components";
import SideMenu from "./Elements/SideMenu";
import Paragraph from "./Elements/Paragraph";
import NavbarMenuLinks from "./Elements/NavbarMenuLinks";

const Hero: FC<IHero> = ({
	title,
	paragraph,
	buttonLink,
	buttonLinkTwo,
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
		<section className={styles.hero + ` bg-white`}>
			<div
				className={
					styles.homeNav + ` h-fit pb-16 bg-bottom bg-no-repeat bg-cover`
				}
				style={{
					backgroundImage: `linear-gradient(
							0deg,
							rgba(1, 42, 45, 1),
							rgba(1, 42, 45, 0.95),
							rgba(1, 42, 45, 0.85),
							rgba(1, 42, 45, 0.60)
						),url("${backgroundImage?.sourceUrl}")`,
					clipPath: `ellipse(100% 55% at 48% 44%)`,
				}}
			>
				<nav className="py-4">
					<div className="container mx-auto px-4">
						<div className=" flex items-center justify-between">
							<div className="w-auto hidden xl:block">
								<Link href={`/`}>
									<Image
										width={500}
										height={500}
										alt={`MponjoliMpeli Apartments Logo`}
										src={`/img/logos/MponjoliMpeli-Apartments-Logo-Icon.png`}
										className="w-full h-[50px] object-contain object-center"
									/>
								</Link>
							</div>
							<div className="hidden xl:block">
								<ul className="flex items-center gap-8 lg:gap-16">
									{globalContext.navbarMenuLinks.length > 0 ? (
										globalContext.navbarMenuLinks.map(
											(item: any, keys: number) => (
												<li key={keys}>
													<NavbarMenuLinks
														url={item?.node?.url}
														label={item?.node?.label}
														tailwindStyling="text-medium text-white font-normal tracking-[0.15rem] uppercase transition-all duration-500 ease-in-out hover:text-goldPrime"
													/>
												</li>
											)
										)
									) : (
										<></>
									)}
								</ul>
							</div>
							<div className="w-auto relative hidden xl:block">
								<Link
									className="py-2 px-8  hidden 2xl:block bg-transparent border border-white hover:border-goldPrimeDarker hover:bg-goldPrimeDarker rounded-full text-medium text-white font-normal tracking-[0.20rem] uppercase transition-all duration-500 ease-in-out"
									href={`/contact`}
								>
									Enquire
								</Link>
							</div>
						</div>
					</div>
				</nav>
				<div className="pt-24 sm:pt-34 pb-8">
					<div className="container px-4 mx-auto">
						<div className="max-w-2xl xl:max-w-4xl mx-auto text-center">
							<div className="text-sm mb-3 font-semibold text-white uppercase">
								<span>To New Beginnings</span>
							</div>
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
							<motion.div
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="flex flex-col sm:flex-row items-center justify-center mb-12 gap-4"
							>
								<Link
									href={`${buttonLink?.url}`}
									target={`${buttonLink?.target}`}
									className="inline-block w-fit py-3 px-6 text-center font-medium text-base text-white bg-transparent hover:bg-goldPrimeDarker border border-white hover:border-goldPrimeDarker rounded-full transition duration-200"
								>
									{buttonLink?.title}
								</Link>
								<Link
									href={`${buttonLinkTwo?.url}`}
									target={`${buttonLinkTwo?.target}`}
									className="inline-block w-fit py-3 px-6 text-center font-medium text-base text-white bg-transparent hover:bg-goldPrimeDarker border border-white hover:border-goldPrimeDarker rounded-full transition duration-200"
								>
									{buttonLinkTwo?.title}
								</Link>
							</motion.div>
							<div className="border-t-[1px] border-goldPrime opacity-30 my-4 max-w-xl mx-auto" />
						</div>
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

export default Hero;
