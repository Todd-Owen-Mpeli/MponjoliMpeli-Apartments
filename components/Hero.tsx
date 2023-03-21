import Link from "next/link";
import Image from "next/image";
import {useState, FC} from "react";

// Components
import NavLink from "./Elements/NavLink";
import Paragraph from "./Elements/Paragraph";

// Styling
import styles from "../styles/components/Hero.module.scss";

interface HeroProps {
	title: string;
	paragraph: string;
	linkedinLink: string;
	instagramLink: string;
	facebookLink: string;
	twitterLink: string;
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
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLinkTwo: {
		url: string;
		title: string;
		target: string;
	};
	backgroundImage: string;
}

const Hero: FC<HeroProps> = ({
	title,
	paragraph,
	buttonLink,
	twitterLink,
	facebookLink,
	linkedinLink,
	instagramLink,
	mbeziContent,
	mbweniContent,
	buttonLinkTwo,
	backgroundImage,
}) => {
	/* Hides or Displays the Full Nav Menu */
	const [menuActive, setMenuActive] = useState(false);

	function toggleMenu() {
		setMenuActive(!menuActive);
	}

	return (
		<section className="skewed-bottom-right">
			<div
				className="flex flex-col bg-cover bg-center bg-no-repeat min-h-[90vh]"
				style={{
					backgroundImage: `linear-gradient(0deg,rgba(1, 42, 45, 0.65),rgba(1, 42, 45, 0.65)),url("${backgroundImage}")`,
				}}
			>
				<nav className="relative flex items-center justify-between px-6 py-6">
					<ul className="absolute hidden transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:flex lg:mx-auto lg:my-6 lg:items-center lg:w-auto lg:gap-x-20">
						<li>
							<Link
								className="text-lg tracking-[.25rem] text-white hover:text-brightGreen"
								href="/about"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								className="text-lg tracking-[.25rem] text-white hover:text-brightGreen"
								href="/apartments"
							>
								Apartments
							</Link>
						</li>
						<li>
							<Link
								className="text-lg tracking-[.25rem] text-white hover:text-brightGreen"
								href="/locations"
							>
								Locations
							</Link>
						</li>
						{/* <NavLink
							tailwindStyling="text-lg tracking-[.25rem] text-white hover:text-brightGreen"
							link={}
						/> */}
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
				<div className="container flex flex-col items-baseline justify-center px-0 m-auto text-center sm:text-left">
					<div className="max-w-lg">
						<h1 className="mb-3 text-6xl sm:text-8xl text-white font-bold lg:leading-[4.5rem]">
							<span>{title}</span>
							<span className="ml-2 text-brightGreen">Today</span>
						</h1>
					</div>
					<div className="max-w-lg">
						<Paragraph
							content={paragraph}
							tailwindStyling="mb-6 text-white leading-[1.75rem] font-[400] text-medium text-center sm:text-left"
						/>
						<div className="flex justify-center gap-4 sm:justify-start item-center">
							<Link
								href={buttonLink?.url}
								target={buttonLink?.target}
								className="px-6 py-2 font-semibold transition duration-200 bg-white rounded-t-lg rounded-l-lg w-fit sm:mx-0 hover:bg-brightGreen text-green hover:text-white"
							>
								{buttonLink?.title}
							</Link>
							<Link
								href={buttonLinkTwo?.url}
								target={buttonLinkTwo?.target}
								className="px-6 py-2 font-semibold text-white transition duration-200 rounded-t-lg rounded-l-lg w-fit sm:mx-0 bg-green hover:bg-brightGreen"
							>
								{buttonLinkTwo?.title}
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* Green SVG */}
			<div className="mr-for-radius">
				<svg
					className="w-full h-8 md:h-12 lg:h-20 text-green"
					viewBox="0 0 10 10"
					preserveAspectRatio="none"
				>
					<polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
				</svg>
			</div>

			{/* Hidden Side Menu */}
			<div
				className={
					menuActive
						? `${styles.navReveal} ${styles.nav}`
						: `hidden ${styles.nav}`
				}
			>
				<div className="fixed inset-0 opacity-25 bg-darkGreen"></div>
				<nav className="relative flex flex-col w-full h-full px-6 py-6 overflow-y-auto bg-white">
					<div className="flex flex-col items-center mb-8">
						<Link
							className="mt-10 mr-auto text-3xl font-bold leading-none"
							href="/"
						>
							<Image
								height={500}
								width={500}
								className="object-contain object-center w-full h-75"
								src="/img/logos/MponjoliMpeli Apartments Logo One.png"
								alt="MponjoliMpeli Apartments Logo One"
							/>
						</Link>
					</div>
					<div className="px-4">
						<ul>
							<li className="mb-1 border-b-[1px] border-green">
								<Link
									className="block py-4 text-base font-semibold text-black hover:text-brightGreen"
									href="/about"
								>
									About
								</Link>
							</li>
							<li className="mb-1 border-b-[1px] border-green">
								<Link
									className="block py-4 text-base font-semibold text-black hover:text-brightGreen"
									href="/locations"
								>
									Our Locations
								</Link>
							</li>
							<li className="mb-1 border-b-[1px] border-green">
								<Link
									className="block py-4 text-base font-semibold text-black hover:text-brightGreen"
									href="/development"
								>
									Development
								</Link>
							</li>
							<li className="mb-1 border-b-[1px] border-green">
								<Link
									className="block py-4 text-base font-semibold text-black hover:text-brightGreen"
									href="/landlords"
								>
									Landlords
								</Link>
							</li>
							<li className="mb-1 border-b-[1px] border-green">
								<Link
									className="block py-4 text-base font-semibold text-black hover:text-brightGreen"
									href="/firstTimeLettings"
								>
									First Time Lettings
								</Link>
							</li>
							<li className="mb-1 border-b-[1px] border-green">
								<Link
									className="block py-4 text-base font-semibold text-black hover:text-brightGreen"
									href="/testimonials"
								>
									Testimonials
								</Link>
							</li>
						</ul>
					</div>
					<div className="mt-auto">
						<div className="flex items-center justify-start gap-2 text-center">
							<Link
								className="inline-block px-1 text-green"
								href={facebookLink}
							>
								<Image
									alt="facebook icon"
									width={500}
									height={500}
									className="w-6 h-6"
									src="/svg/facebook.svg"
								/>
							</Link>
							<Link
								className="inline-block px-1 text-green"
								href={instagramLink}
							>
								<Image
									alt="Instagram Icon"
									width={500}
									height={500}
									className="w-6 h-6"
									src="/svg/instagram.svg"
								/>
							</Link>
						</div>
						<div className="flex items-center justify-between gap-4">
							<div className="flex flex-col items-baseline justify-center my-6">
								<h2 className="text-green font-[600] text-medium">
									{mbeziContent?.title}
								</h2>
								<Paragraph
									content={mbeziContent?.contactAddress}
									tailwindStyling="my-3 text-black leading-[1.75rem] font-[400] text-medium text-center sm:text-left"
								/>
								<div className="flex flex-col gap-2">
									<Link
										className="text-base leading-none transition-all duration-500 ease-in-out hover:text-green"
										href={`tel:${mbeziContent?.phoneNumber}`}
									>
										{mbeziContent?.phoneNumber}
									</Link>
									<Link
										className="text-base leading-none transition-all duration-500 ease-in-out hover:text-green"
										href={`mailto:${mbeziContent?.email}`}
									>
										{mbeziContent?.email}
									</Link>
								</div>
							</div>
							<div className="flex flex-col items-baseline justify-center"></div>
						</div>
						<p className="my-4 text-xs text-center text-darkGreen">
							<span>&copy; 2023 All rights reserved.</span>
						</p>
					</div>
				</nav>
			</div>
		</section>
	);
};

export default Hero;
