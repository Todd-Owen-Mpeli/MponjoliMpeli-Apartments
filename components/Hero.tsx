import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import Paragraph from "./Elements/Paragraph";

interface HeroProps {
	props: string;
	backgroundImage: string;
}

const Hero: FC<HeroProps> = ({props, backgroundImage}) => {
	return (
		<section className="skewed-bottom-right">
			<div
				className="flex flex-col bg-cover bg-center bg-no-repeat min-h-[90vh]"
				style={{
					backgroundImage: `linear-gradient(0deg,rgba(1, 42, 45, 0.65),rgba(1, 42, 45, 0.65)),url("${backgroundImage}")`,
				}}
			>
				<nav className="relative px-6 py-6 flex justify-between items-center">
					<Link className="text-white text-3xl font-bold leading-none" href="/">
						<Image
							className="h-12 w-full"
							src="/img/Logos/MponjoliMpeli Apartments Logo Icon.png"
							alt=""
							height={500}
							width={500}
						/>
					</Link>
					<div className="lg:hidden">
						<button className="navbar-burger flex items-center text-white p-3">
							<svg
								className="block h-4 w-4 fill-current"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Mobile menu</title>
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
							</svg>
						</button>
					</div>
					<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
						<li>
							<Link
								className="text-sm text-white hover:text-brightGreen"
								href="/about"
							>
								About
							</Link>
						</li>
						<li className="text-white">
							<svg
								className="w-4 h-4 current-fill"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
								></path>
							</svg>
						</li>
						<li>
							<Link
								className="text-sm text-white hover:text-brightGreen"
								href="/apartments"
							>
								Apartments
							</Link>
						</li>
						<li className="text-white">
							<svg
								className="w-4 h-4 current-fill"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
								></path>
							</svg>
						</li>
						<li>
							<Link
								className="text-sm text-white hover:text-brightGreen"
								href="/locations"
							>
								Locations
							</Link>
						</li>
					</ul>
					<Link
						className="hidden lg:block py-2 px-6 bg-brightGreen hover:bg-brightGreen text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200"
						href="#"
					>
						Contact Us
					</Link>
				</nav>
				<div className="flex flex-col justify-center items-baseline text-center sm:text-left container m-auto px-0">
					<div className="max-w-lg">
						<h1 className="mb-3 text-6xl sm:text-8xl text-white font-bold lg:leading-[4.5rem]">
							<span>Find your new Home</span>
							<span className="text-brightGreen ml-2">Today</span>
						</h1>
					</div>
					<div className="max-w-lg">
						<Paragraph
							content={`<br>MponjoliMpeli Apartments are an award-winning apartment complex and rated 4.7 out of 5 on Google. </br> </br> View our available apartments or get in touch to get an idea of your future home or monthly lettings fees.</p>`}
							tailwindStyling="mb-6 text-white leading-[1.75rem] font-[400] text-medium text-center sm:text-left"
						/>
						<div className="flex justify-center sm:justify-start item-center gap-4">
							<Link
								className="w-fit sm:mx-0 py-2 px-6 bg-white hover:bg-brightGreen text-green hover:text-white font-semibold rounded-l-lg rounded-t-lg transition duration-200"
								href="/"
							>
								Get Started
							</Link>
							<Link
								className="w-fit sm:mx-0 py-2 px-6 text-white font-semibold bg-green hover:bg-brightGreen rounded-l-lg rounded-t-lg transition duration-200"
								href="/"
							>
								How it works
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="mr-for-radius">
				<svg
					className="h-8 md:h-12 lg:h-20 w-full text-green"
					viewBox="0 0 10 10"
					preserveAspectRatio="none"
				>
					<polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
				</svg>
			</div>
			<div className={`hidden fixed top-0 right-0 bottom-0 w-5/6 max-w-lg`}>
				<div className="fixed inset-0 bg-darkGreen opacity-25"></div>
				<nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white overflow-y-auto">
					<div className="flex flex-col items-center mb-8">
						<button className="fixed top-0 right-0 m-2">
							<svg
								className="h-6 w-6 text-darkGreen cursor-pointer hover:text-darkGreen"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								></path>
							</svg>
						</button>
						<Link
							className="mt-6 mr-auto text-3xl font-bold leading-none"
							href="#"
						>
							<Image
								className="h-75 w-full"
								src="/img/logos/MponjoliMpeli Apartments Logo One.png"
								alt=""
								height={500}
								width={500}
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
						<div className="flex justify-start items-center gap-2 text-center">
							<Link
								className="inline-block px-1 text-green"
								href="www.facebook.com"
							>
								<Image
									alt=""
									width={500}
									height={500}
									className="w-6 h-6"
									src="/svg/facebook.svg"
								/>
							</Link>
							<Link
								className="inline-block px-1 text-green"
								href="www.instagram.com"
							>
								<Image
									alt=""
									width={500}
									height={500}
									className="w-6 h-6"
									src="/svg/instagram.svg"
								/>
							</Link>
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
