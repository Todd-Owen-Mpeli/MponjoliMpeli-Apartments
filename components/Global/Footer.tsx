// Import
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import Paragraph from "../Elements/Paragraph";
import NavbarMenuLinks from "../Elements/NavbarMenuLinks";

const Footer = () => {
	const globalContext = useGlobalContext();

	return (
		<section className="bg-green-dark">
			<div
				className="px-4 py-20 bg-center bg-no-repeat bg-cover lg:px-0"
				style={{
					backgroundImage: `linear-gradient(
							0deg,
							rgba(1, 42, 45, 1),
							rgba(1, 42, 45, 0.85),
							rgba(1, 42, 45, 0.75),
							rgba(1, 42, 45, 0.65)
					),url(${globalContext?.themesOptionsContent.ctaBackgroundImage?.sourceUrl})`,
				}}
			>
				<div className="container p-0 mx-auto">
					<div className="flex flex-col items-center justify-between gap-10 px-0 py-8 lg:flex-row lg:px-8">
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="flex flex-col items-center justify-between gap-4 lg:items-start"
						>
							<h2 className="max-w-2xl mb-4 text-3xl font-semibold leading-tight text-center text-white md:text-4xl lg:text-left ">
								{globalContext?.themesOptionsContent?.ctaTitle}
							</h2>
							<Paragraph
								content={globalContext?.themesOptionsContent?.ctaParagraph}
								tailwindStyling="w-full lg:max-w-[40rem] mt-4 text-center lg:text-left text-white"
							/>
						</motion.div>
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className={
								globalContext?.themesOptionsContent?.ctaButtonLink?.url
									? `block mt-7 lg:mt-0`
									: `hidden`
							}
						>
							<Link
								href={globalContext?.themesOptionsContent?.ctaButtonLink?.url}
								target={
									globalContext?.themesOptionsContent?.ctaButtonLink?.target
								}
								className="px-12 py-6 mb-3 text-center text-white transition duration-200 xl:px-20 bg-goldPrimeDarker hover:bg-green-default"
							>
								{globalContext?.themesOptionsContent?.ctaButtonLink?.title}
							</Link>
						</motion.div>
					</div>
				</div>
			</div>
			<div className="container px-4 mx-auto">
				<div className="border-t-[1px] border-goldPrime opacity-30 my-4" />
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-between gap-16 lg:gap-28 py-16 px-4 md:px-0"
				>
					<div className="flex flex-col items-center lg:items-start mb-10 sm:mb-0">
						<Link href="/">
							<Image
								width={500}
								height={500}
								alt={`MponjoliMpeli Apartments Logo`}
								src={`/img/logos/MponjoliMpeli Apartments Logo Three.png`}
								className="w-full h-[75px] sm:h-full object-contain object-center"
							/>
						</Link>
					</div>
					<div className="flex flex-col items-center lg:items-start gap-4 text-left">
						<h3 className="text-white text-base tracking-[.25rem] uppercase font-semibold mb-6">
							Company Info
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-left">
							{globalContext?.footerMenuLinks?.length > 0 ? (
								globalContext?.footerMenuLinks.map(
									(items: any, keys: number) => (
										<li className="flex gp-x-8" key={keys}>
											<span className="opacity-60 mr-2">
												<svg
													height="24"
													width="24"
													viewBox="0 0 24 24"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
													<g
														id="SVGRepo_tracerCarrier"
														strokeLinecap="round"
														strokeLinejoin="round"
													></g>
													<g id="SVGRepo_iconCarrier">
														<path
															d="M9 5L11 7.33333M9 19L15 12L13.5 10.25"
															stroke="#dfc695"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														></path>
													</g>
												</svg>
											</span>
											<NavbarMenuLinks
												url={items?.node?.url}
												label={items?.node?.label}
												tailwindStyling="text-tiny text-white tracking-wider transition-all duration-500 ease-in-out hover:text-goldPrime"
											/>
										</li>
									)
								)
							) : (
								<></>
							)}
						</ul>
					</div>
					<div className="flex flex-col items-center lg:items-start gap-4 text-left">
						<h3 className="text-white text-base tracking-[.25rem] uppercase font-semibold mb-6">
							Useful Links
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-left">
							<li className="flex gp-x-8">
								<span className="opacity-60 mr-2">
									<svg
										height="24"
										width="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
										<g
											id="SVGRepo_tracerCarrier"
											strokeLinecap="round"
											strokeLinejoin="round"
										></g>
										<g id="SVGRepo_iconCarrier">
											<path
												d="M9 5L11 7.33333M9 19L15 12L13.5 10.25"
												stroke="#dfc695"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</g>
									</svg>
								</span>
								<Link
									href={`/blogs`}
									className="tracking-widest text-white transition-all duration-500 ease-in-out text-tiny hover:text-goldPrime"
								>
									Blogs
								</Link>
							</li>
							<li className="flex gp-x-8">
								<span className="opacity-60 mr-2">
									<svg
										height="24"
										width="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
										<g
											id="SVGRepo_tracerCarrier"
											strokeLinecap="round"
											strokeLinejoin="round"
										></g>
										<g id="SVGRepo_iconCarrier">
											<path
												d="M9 5L11 7.33333M9 19L15 12L13.5 10.25"
												stroke="#dfc695"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</g>
									</svg>
								</span>
								<Link
									href={`/terms-and-conditions`}
									className="tracking-widest text-white transition-all duration-500 ease-in-out text-tiny hover:text-goldPrime"
								>
									Terms &amp; Conditions
								</Link>
							</li>
							<li className="flex gp-x-8">
								<span className="opacity-60 mr-2">
									<svg
										height="24"
										width="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
										<g
											id="SVGRepo_tracerCarrier"
											strokeLinecap="round"
											strokeLinejoin="round"
										></g>
										<g id="SVGRepo_iconCarrier">
											<path
												d="M9 5L11 7.33333M9 19L15 12L13.5 10.25"
												stroke="#dfc695"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</g>
									</svg>
								</span>
								<Link
									href={`/privacy-policy`}
									className="tracking-widest text-white transition-all duration-500 ease-in-out text-tiny hover:text-goldPrime"
								>
									Privacy Policy
								</Link>
							</li>
							<li className="flex gp-x-8">
								<span className="opacity-60 mr-2">
									<svg
										height="24"
										width="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
										<g
											id="SVGRepo_tracerCarrier"
											strokeLinecap="round"
											strokeLinejoin="round"
										></g>
										<g id="SVGRepo_iconCarrier">
											<path
												d="M9 5L11 7.33333M9 19L15 12L13.5 10.25"
												stroke="#dfc695"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</g>
									</svg>
								</span>
								<Link
									href={`/cookie-policy`}
									className="tracking-widest text-white transition-all duration-500 ease-in-out text-tiny hover:text-goldPrime"
								>
									Cookie Policy
								</Link>
							</li>
						</ul>
					</div>
					<div className="flex flex-col items-center lg:items-start gap-4 text-left">
						<h3 className="text-white text-base tracking-[.25rem] uppercase font-semibold mb-6">
							Get in Touch
						</h3>
						<div className="text-white flex flex-col items-center lg:items-start gap-4 mb-6">
							<Link
								className="flex gap-3"
								href={`tel:${globalContext?.themesOptionsContent?.phoneNumber}`}
							>
								<span>
									<svg
										height="24"
										width="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
										<g
											id="SVGRepo_tracerCarrier"
											strokeLinecap="round"
											strokeLinejoin="round"
										></g>
										<g id="SVGRepo_iconCarrier">
											<path
												d="M15.1008 15.0272L15.6446 15.5437V15.5437L15.1008 15.0272ZM15.5562 14.5477L15.0124 14.0312V14.0312L15.5562 14.5477ZM17.9729 14.2123L17.5987 14.8623H17.5987L17.9729 14.2123ZM19.8834 15.312L19.5092 15.962L19.8834 15.312ZM20.4217 18.7584L20.9655 19.275L20.9655 19.2749L20.4217 18.7584ZM19.0012 20.254L18.4574 19.7375L19.0012 20.254ZM17.6763 20.9631L17.75 21.7095L17.6763 20.9631ZM7.8154 16.4752L8.3592 15.9587L7.8154 16.4752ZM3.75185 6.92574C3.72965 6.51212 3.37635 6.19481 2.96273 6.21701C2.54911 6.23921 2.23181 6.59252 2.25401 7.00613L3.75185 6.92574ZM9.19075 8.80507L9.73454 9.32159L9.19075 8.80507ZM9.47756 8.50311L10.0214 9.01963L9.47756 8.50311ZM9.63428 5.6931L10.2467 5.26012L9.63428 5.6931ZM8.3733 3.90961L7.7609 4.3426V4.3426L8.3733 3.90961ZM4.7177 3.09213C4.43244 3.39246 4.44465 3.86717 4.74498 4.15244C5.04531 4.4377 5.52002 4.42549 5.80529 4.12516L4.7177 3.09213ZM11.0632 13.0559L11.607 12.5394L11.0632 13.0559ZM10.6641 19.8123C11.0148 20.0327 11.4778 19.9271 11.6982 19.5764C11.9186 19.2257 11.8129 18.7627 11.4622 18.5423L10.6641 19.8123ZM15.113 20.0584C14.7076 19.9735 14.3101 20.2334 14.2252 20.6388C14.1403 21.0442 14.4001 21.4417 14.8056 21.5266L15.113 20.0584ZM15.6446 15.5437L16.1 15.0642L15.0124 14.0312L14.557 14.5107L15.6446 15.5437ZM17.5987 14.8623L19.5092 15.962L20.2575 14.662L18.347 13.5623L17.5987 14.8623ZM19.8779 18.2419L18.4574 19.7375L19.545 20.7705L20.9655 19.275L19.8779 18.2419ZM8.3592 15.9587C4.48307 11.8778 3.83289 8.43556 3.75185 6.92574L2.25401 7.00613C2.35326 8.85536 3.13844 12.6403 7.27161 16.9917L8.3592 15.9587ZM9.73454 9.32159L10.0214 9.01963L8.93377 7.9866L8.64695 8.28856L9.73454 9.32159ZM10.2467 5.26012L8.98569 3.47663L7.7609 4.3426L9.02189 6.12608L10.2467 5.26012ZM9.19075 8.80507C8.64695 8.28856 8.64626 8.28929 8.64556 8.29002C8.64533 8.29028 8.64463 8.29102 8.64415 8.29152C8.6432 8.29254 8.64223 8.29357 8.64125 8.29463C8.63928 8.29675 8.63724 8.29896 8.63515 8.30127C8.63095 8.30588 8.6265 8.31087 8.62182 8.31625C8.61247 8.32701 8.60219 8.33931 8.5912 8.3532C8.56922 8.38098 8.54435 8.41511 8.51826 8.45588C8.46595 8.53764 8.40921 8.64531 8.36117 8.78033C8.26346 9.0549 8.21022 9.4185 8.27675 9.87257C8.40746 10.7647 8.99202 11.9644 10.5194 13.5724L11.607 12.5394C10.1793 11.0363 9.82765 10.1106 9.7609 9.65511C9.72871 9.43536 9.76142 9.31957 9.77436 9.28321C9.78163 9.26277 9.78639 9.25709 9.78174 9.26437C9.77948 9.26789 9.77498 9.27451 9.76742 9.28407C9.76363 9.28885 9.75908 9.29437 9.75364 9.30063C9.75092 9.30375 9.74798 9.30706 9.7448 9.31056C9.74321 9.31231 9.74156 9.3141 9.73985 9.31594C9.739 9.31686 9.73813 9.31779 9.73724 9.31873C9.7368 9.3192 9.73612 9.31992 9.7359 9.32015C9.73522 9.32087 9.73454 9.32159 9.19075 8.80507ZM10.5194 13.5724C12.0422 15.1757 13.1924 15.806 14.0699 15.9485C14.5201 16.0216 14.8846 15.9632 15.1606 15.8544C15.2955 15.8012 15.4023 15.7387 15.4824 15.6819C15.5223 15.6535 15.5556 15.6266 15.5825 15.6031C15.5959 15.5913 15.6078 15.5803 15.6181 15.5703C15.6233 15.5654 15.628 15.5606 15.6324 15.5562C15.6346 15.554 15.6368 15.5518 15.6388 15.5497C15.6398 15.5487 15.6408 15.5477 15.6417 15.5467C15.6422 15.5462 15.6429 15.5454 15.6432 15.5452C15.6439 15.5444 15.6446 15.5437 15.1008 15.0272C14.557 14.5107 14.5577 14.51 14.5583 14.5093C14.5586 14.509 14.5592 14.5083 14.5597 14.5078C14.5606 14.5069 14.5615 14.506 14.5623 14.5051C14.5641 14.5033 14.5658 14.5015 14.5675 14.4998C14.5708 14.4965 14.574 14.4933 14.577 14.4904C14.5831 14.4846 14.5885 14.4796 14.5933 14.4754C14.6029 14.467 14.61 14.4616 14.6146 14.4584C14.6239 14.4517 14.623 14.454 14.6102 14.459C14.5909 14.4666 14.5001 14.4987 14.3103 14.4679C13.9078 14.4025 13.0391 14.0472 11.607 12.5394L10.5194 13.5724ZM8.98569 3.47663C7.9721 2.04305 5.94388 1.80119 4.7177 3.09213L5.80529 4.12516C6.32812 3.57471 7.24855 3.61795 7.7609 4.3426L8.98569 3.47663ZM18.4574 19.7375C18.1783 20.0313 17.8864 20.1887 17.6026 20.2167L17.75 21.7095C18.497 21.6357 19.1016 21.2373 19.545 20.7705L18.4574 19.7375ZM10.0214 9.01963C10.9889 8.00095 11.0574 6.40678 10.2467 5.26012L9.02189 6.12608C9.44404 6.72315 9.3793 7.51753 8.93377 7.9866L10.0214 9.01963ZM19.5092 15.962C20.3301 16.4345 20.4907 17.5968 19.8779 18.2419L20.9655 19.2749C22.2705 17.901 21.8904 15.6019 20.2575 14.662L19.5092 15.962ZM16.1 15.0642C16.4854 14.6584 17.086 14.5672 17.5987 14.8623L18.347 13.5623C17.2485 12.93 15.8862 13.1113 15.0124 14.0312L16.1 15.0642ZM11.4622 18.5423C10.4785 17.9241 9.43149 17.0876 8.3592 15.9587L7.27161 16.9917C8.42564 18.2067 9.56897 19.1241 10.6641 19.8123L11.4622 18.5423ZM17.6026 20.2167C17.0561 20.2707 16.1912 20.2842 15.113 20.0584L14.8056 21.5266C16.0541 21.788 17.0742 21.7762 17.75 21.7095L17.6026 20.2167Z"
												fill="#dfc695"
											></path>
										</g>
									</svg>
								</span>
								<span className="hover:text-goldPrime">
									{globalContext?.themesOptionsContent?.phoneNumber}
								</span>
							</Link>
							<Link
								className="flex gap-3"
								href={`mailto:${globalContext?.themesOptionsContent?.email}`}
							>
								<span>
									<svg
										height="24"
										width="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
										<g
											id="SVGRepo_tracerCarrier"
											strokeLinecap="round"
											strokeLinejoin="round"
										></g>
										<g id="SVGRepo_iconCarrier">
											<path
												d="M10.8693 21.5102L11.5147 21.8922L10.8693 21.5102ZM11.1288 21.0719L10.4833 20.6899L11.1288 21.0719ZM8.87121 21.0719L9.51663 20.6899L9.51662 20.6899L8.87121 21.0719ZM9.13064 21.5102L8.48523 21.8922L9.13064 21.5102ZM1.25 12.8C1.25 13.2142 1.58579 13.55 2 13.55C2.41421 13.55 2.75 13.2142 2.75 12.8H1.25ZM2.99739 16.8438C2.83888 16.4611 2.40015 16.2794 2.01747 16.4379C1.63479 16.5964 1.45306 17.0351 1.61157 17.4178L2.99739 16.8438ZM6.28931 19.585L6.31328 18.8354L6.28931 19.585ZM4.46927 19.2956L4.18225 19.9885H4.18225L4.46927 19.2956ZM17.6955 17.1308L18.3884 17.4178L18.3884 17.4178L17.6955 17.1308ZM13.7107 19.585L13.6867 18.8354L13.7107 19.585ZM15.5307 19.2956L15.8177 19.9885L15.5307 19.2956ZM3.91001 6.58944L3.51813 5.94996V5.94996L3.91001 6.58944ZM2.58944 7.91001L1.94996 7.51814H1.94996L2.58944 7.91001ZM7.91637 19.8223L7.53453 20.4679H7.53453L7.91637 19.8223ZM14.8484 6.91393C15.2541 6.99765 15.6508 6.73665 15.7345 6.33099C15.8182 5.92532 15.5572 5.5286 15.1516 5.44489L14.8484 6.91393ZM18.5551 8.84842C18.4714 8.44275 18.0747 8.18176 17.669 8.26548C17.2633 8.34919 17.0024 8.74591 17.0861 9.15158L18.5551 8.84842ZM11.5147 21.8922L11.7742 21.4539L10.4833 20.6899L10.2239 21.1282L11.5147 21.8922ZM8.22579 21.4539L8.48523 21.8922L9.77606 21.1282L9.51663 20.6899L8.22579 21.4539ZM10.2239 21.1282C10.1785 21.2049 10.0992 21.25 9.99998 21.25C9.90074 21.25 9.82147 21.2049 9.77606 21.1282L8.48523 21.8922C9.16217 23.0359 10.8378 23.0359 11.5147 21.8922L10.2239 21.1282ZM8.8 6.75H11.2V5.25H8.8V6.75ZM17.25 12.8V13.6H18.75V12.8H17.25ZM6.31328 18.8354C5.52102 18.81 5.09046 18.7411 4.75628 18.6027L4.18225 19.9885C4.77912 20.2357 5.43744 20.3081 6.26533 20.3346L6.31328 18.8354ZM1.61157 17.4178C2.09367 18.5817 3.01837 19.5064 4.18225 19.9885L4.75628 18.6027C3.95994 18.2728 3.32725 17.6401 2.99739 16.8438L1.61157 17.4178ZM17.25 13.6C17.25 14.5422 17.2496 15.2112 17.2137 15.7376C17.1782 16.2573 17.1107 16.5828 17.0026 16.8438L18.3884 17.4178C18.5848 16.9436 18.6695 16.4357 18.7102 15.8397C18.7504 15.2504 18.75 14.5217 18.75 13.6H17.25ZM13.7346 20.3346C14.5625 20.3081 15.2209 20.2357 15.8177 19.9885L15.2437 18.6027C14.9095 18.7411 14.479 18.81 13.6867 18.8354L13.7346 20.3346ZM17.0026 16.8438C16.6728 17.6401 16.0401 18.2728 15.2437 18.6027L15.8177 19.9885C16.9816 19.5064 17.9063 18.5817 18.3884 17.4178L17.0026 16.8438ZM8.8 5.25C7.50515 5.25 6.48135 5.24921 5.66269 5.32705C4.83287 5.40595 4.13672 5.57089 3.51813 5.94996L4.30188 7.22892C4.64517 7.01855 5.08465 6.88877 5.80467 6.82031C6.53585 6.75079 7.47611 6.75 8.8 6.75V5.25ZM2.75 12.8C2.75 11.4761 2.75079 10.5359 2.82031 9.80468C2.88877 9.08466 3.01855 8.64518 3.22892 8.30189L1.94996 7.51814C1.57089 8.13673 1.40595 8.83288 1.32705 9.6627C1.24921 10.4814 1.25 11.5052 1.25 12.8H2.75ZM3.51813 5.94996C2.87899 6.34163 2.34162 6.879 1.94996 7.51814L3.22892 8.30189C3.4969 7.86458 3.86458 7.4969 4.30188 7.22892L3.51813 5.94996ZM9.51662 20.6899C9.31582 20.3506 9.13969 20.0516 8.96888 19.8164C8.78917 19.569 8.58327 19.3454 8.29822 19.1768L7.53453 20.4679C7.58064 20.4951 7.64427 20.5451 7.75524 20.6979C7.87511 20.863 8.01082 21.0907 8.2258 21.4539L9.51662 20.6899ZM6.26533 20.3346C6.71078 20.3489 6.99552 20.3587 7.21182 20.3851C7.41631 20.41 7.49305 20.4433 7.53453 20.4679L8.29822 19.1768C8.00853 19.0055 7.70371 18.9339 7.39344 18.8961C7.09498 18.8597 6.73177 18.8488 6.31328 18.8354L6.26533 20.3346ZM11.7742 21.4539C11.9891 21.0907 12.1249 20.863 12.2447 20.6979C12.3557 20.5451 12.4193 20.4951 12.4654 20.4679L11.7018 19.1768C11.4167 19.3454 11.2108 19.569 11.0311 19.8164C10.8603 20.0516 10.6841 20.3506 10.4833 20.6899L11.7742 21.4539ZM13.6867 18.8354C13.2682 18.8488 12.905 18.8597 12.6065 18.8961C12.2963 18.9339 11.9914 19.0055 11.7018 19.1768L12.4654 20.4679C12.5069 20.4433 12.5837 20.41 12.7881 20.3851C13.0044 20.3587 13.2892 20.3489 13.7346 20.3346L13.6867 18.8354ZM11.2 6.75C12.9978 6.75 14.0727 6.75386 14.8484 6.91393L15.1516 5.44489C14.1885 5.24614 12.9253 5.25 11.2 5.25V6.75ZM18.75 12.8C18.75 11.0747 18.7539 9.81149 18.5551 8.84842L17.0861 9.15158C17.2461 9.92727 17.25 11.0022 17.25 12.8H18.75Z"
												fill="#dfc695"
											></path>
											<path
												d="M7.0332 6C7.08481 5.00787 7.2165 4.33902 7.55255 3.79064C7.86176 3.28605 8.28599 2.86181 8.79058 2.5526C9.69234 2 10.9199 2 13.3749 2H15.6249C17.153 2 18.2056 2 19 2.13325M18 14.7352C18.7477 14.7104 19.2527 14.6437 19.685 14.4646C20.6039 14.084 21.3339 13.354 21.7145 12.4351C21.9999 11.746 21.9999 10.8723 21.9999 9.12503V8.37503C21.9999 6.84695 21.9999 5.79442 21.8667 5"
												stroke="#dfc695"
												strokeWidth="1.5"
												strokeLinecap="round"
											></path>
											<path
												d="M6.50928 13H6.51828M10 13H10.009M13.491 13H13.5"
												stroke="#dfc695"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</g>
									</svg>
								</span>
								<span className="hover:text-goldPrime">
									{globalContext?.themesOptionsContent?.email}
								</span>
							</Link>
						</div>
						<div className="flex items-center justify-center gap-x-8">
							<Link href={globalContext?.themesOptionsContent?.facebookLink}>
								<svg
									height="100%"
									className="w-5 h-5"
									fill="#00946a"
									style={{
										fillRule: "evenodd",
										clipRule: "evenodd",
										strokeLinejoin: "round",
										strokeMiterlimit: "2",
									}}
									version="1.1"
									viewBox="0 0 512 512"
									width="100%"
								>
									<path
										d="M512,257.555c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
										style={{fillRule: "nonzero"}}
									/>
								</svg>
							</Link>
							<Link href={globalContext?.themesOptionsContent?.twitterLink}>
								<svg
									height="100%"
									className="w-5 h-5"
									fill="#00946a"
									style={{
										fillRule: "evenodd",
										clipRule: "evenodd",
										strokeLinejoin: "round",
										strokeMiterlimit: "2",
									}}
									version="1.1"
									viewBox="0 0 512 512"
									width="100%"
								>
									<path
										d="M161.014,464.013c193.208,0 298.885,-160.071 298.885,-298.885c0,-4.546 0,-9.072 -0.307,-13.578c20.558,-14.871 38.305,-33.282 52.408,-54.374c-19.171,8.495 -39.51,14.065 -60.334,16.527c21.924,-13.124 38.343,-33.782 46.182,-58.102c-20.619,12.235 -43.18,20.859 -66.703,25.498c-19.862,-21.121 -47.602,-33.112 -76.593,-33.112c-57.682,0 -105.145,47.464 -105.145,105.144c0,8.002 0.914,15.979 2.722,23.773c-84.418,-4.231 -163.18,-44.161 -216.494,-109.752c-27.724,47.726 -13.379,109.576 32.522,140.226c-16.715,-0.495 -33.071,-5.005 -47.677,-13.148l0,1.331c0.014,49.814 35.447,93.111 84.275,102.974c-15.464,4.217 -31.693,4.833 -47.431,1.802c13.727,42.685 53.311,72.108 98.14,72.95c-37.19,29.227 -83.157,45.103 -130.458,45.056c-8.358,-0.016 -16.708,-0.522 -25.006,-1.516c48.034,30.825 103.94,47.18 161.014,47.104"
										style={{fillRule: "nonzero"}}
									/>
								</svg>
							</Link>
							<Link href={globalContext?.themesOptionsContent?.linkedinLink}>
								<svg
									width="100%"
									height="100%"
									fill="#00946a"
									style={{
										fillRule: "evenodd",
										clipRule: "evenodd",
										strokeLinejoin: "round",
										strokeMiterlimit: "2",
									}}
									version="1.1"
									viewBox="0 0 512 512"
									className="w-5 h-5"
								>
									<path
										d="M473.305,-1.353c20.88,0 37.885,16.533 37.885,36.926l0,438.251c0,20.393 -17.005,36.954 -37.885,36.954l-436.459,0c-20.839,0 -37.773,-16.561 -37.773,-36.954l0,-438.251c0,-20.393 16.934,-36.926 37.773,-36.926l436.459,0Zm-37.829,436.389l0,-134.034c0,-65.822 -14.212,-116.427 -91.12,-116.427c-36.955,0 -61.739,20.263 -71.867,39.476l-1.04,0l0,-33.411l-72.811,0l0,244.396l75.866,0l0,-120.878c0,-31.883 6.031,-62.773 45.554,-62.773c38.981,0 39.468,36.461 39.468,64.802l0,118.849l75.95,0Zm-284.489,-244.396l-76.034,0l0,244.396l76.034,0l0,-244.396Zm-37.997,-121.489c-24.395,0 -44.066,19.735 -44.066,44.047c0,24.318 19.671,44.052 44.066,44.052c24.299,0 44.026,-19.734 44.026,-44.052c0,-24.312 -19.727,-44.047 -44.026,-44.047Z"
										style={{fillRule: "nonzero"}}
									/>
								</svg>
							</Link>
						</div>
					</div>
				</motion.div>
				<div className="border-t-[1px] border-goldPrime opacity-30 my-4" />
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6"
				>
					<Paragraph
						content={globalContext?.themesOptionsContent?.copyRightText}
						tailwindStyling="text-center text-xs text-white"
					/>
					<Paragraph
						content={globalContext?.themesOptionsContent?.websiteCreated}
						tailwindStyling="text-center text-xs text-white"
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default Footer;
