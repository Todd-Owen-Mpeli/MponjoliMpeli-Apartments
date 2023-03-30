// Import
import {
	fetchApartmentSlugs,
	fetchApartmentSlugsContent,
} from "@/lib/ApartmentSlugs";
import {motion} from "framer-motion";
import {getThemesOptionsContent} from "../../../lib/themesOptions";
import {
	getMainMenuLinks,
	getHeroMenuLinks,
	getFooterMenuLinks,
	getLocationMenuLinks,
} from "../../../lib/MenuLinks";

// Components
import HeroTwo from "@/components/HeroTwo";
import Footer from "@/components/Footer";
import MetaTag from "@/components/Meta/MetaTag";
import ImageGrid from "@/components/ImageGrid";
import TitleParagraph from "@/components/TitleParagraph";
import Paragraph from "@/components/Elements/Paragraph";

const mbweniSlugs = ({
	seo,
	content,
	pageTitle,
	mainMenuLinks,
	heroMenuLinks,
	footerMenuLinks,
	locationMenuLinks,
	themesOptionsContent,
}: any) => {
	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
		>
			{/* <!--===== META TAG =====--> */}
			<MetaTag title={pageTitle} seo={seo} />

			<main>
				<HeroTwo
					title={content?.heroSection?.title}
					paragraph={content?.heroSection?.paragraph}
					mainMenuLinks={mainMenuLinks?.mainMenuLinks}
					heroMenuLinks={heroMenuLinks?.heroMenuLinks}
					locationMenuLinks={locationMenuLinks?.locationMenuLinks}
					twitterLink={themesOptionsContent?.themesOptions?.twitterLink}
					mbeziContent={themesOptionsContent?.themesOptions?.mbeziContent}
					linkedinLink={themesOptionsContent?.themesOptions?.linkedinLink}
					facebookLink={themesOptionsContent?.themesOptions?.facebookLink}
					instagramLink={themesOptionsContent?.themesOptions?.instagramLink}
					mbweniContent={themesOptionsContent?.themesOptions?.mbweniContent}
					backgroundImage={content?.heroSection?.backgroundImage?.sourceUrl}
				/>

				<TitleParagraph
					title={content?.mainContent?.descriptionContent?.title}
					paragraph={content?.mainContent?.descriptionContent?.paragraph}
				/>

				<section className="py-10 bg-flatGreen overflow-hidden">
					<div className="container mx-auto px-4">
						<div className="py-10 px-8 bg-white rounded-3xl">
							<div className="max-w-7xl mx-auto">
								<div className="flex flex-wrap -m-8">
									<div className="w-full md:w-1/2 p-8">
										<div className="py-9 md:max-w-md">
											<span className="inline-block mb-5 text-sm text-flatGreen font-bold uppercase tracking-widest">
												Pricing
											</span>
											<h2 className="mb-4 text-4xl text-black font-black tracking-tight">
												Unlimited access to all products
											</h2>
											<Paragraph
												content={`<p>Yearly access to all products with ipsum dolor sit amet,
												consectetur adipiscing elit. Suspendisse varius enim in
												eros elementum tristique.</p>`}
												tailwindStyling="mb-8 text-black"
											/>
											<div className="flex flex-wrap -m-2">
												<div className="w-auto p-2">
													<div className="flex flex-wrap px-3 py-2 bg-darkGreen rounded-full">
														<div className="w-auto mr-2 pt-1">
															<svg
																width="12"
																height="12"
																viewBox="0 0 12 12"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
																	fill="#d1a855"
																></path>
															</svg>
														</div>
														<div className="flex-1">
															<p className="text-sm text-white tracking-wider">
																Build CSS grid&ndash;powered layouts visually
															</p>
														</div>
													</div>
												</div>
												<div className="w-auto p-2">
													<div className="flex flex-wrap px-3 py-2 bg-darkGreen rounded-full">
														<div className="w-auto mr-2 pt-1">
															<svg
																width="12"
																height="12"
																viewBox="0 0 12 12"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
																	fill="#d1a855"
																></path>
															</svg>
														</div>
														<div className="flex-1">
															<p className="text-sm text-white tracking-wider">
																Responsive images
															</p>
														</div>
													</div>
												</div>
												<div className="w-auto p-2">
													<div className="flex flex-wrap px-3 py-2 bg-darkGreen rounded-full">
														<div className="w-auto mr-2 pt-1">
															<svg
																width="12"
																height="12"
																viewBox="0 0 12 12"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
																	fill="#d1a855"
																></path>
															</svg>
														</div>
														<div className="flex-1">
															<p className="text-sm text-white tracking-wider">
																Training and onboarding
															</p>
														</div>
													</div>
												</div>
												<div className="w-auto p-2">
													<div className="flex flex-wrap px-3 py-2 bg-darkGreen rounded-full">
														<div className="w-auto mr-2 pt-1">
															<svg
																width="12"
																height="12"
																viewBox="0 0 12 12"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
																	fill="#d1a855"
																></path>
															</svg>
														</div>
														<div className="flex-1">
															<p className="text-sm text-white tracking-wider">
																Design and develop at the same time
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="w-full md:w-1/2 p-8">
										<div className="py-24 px-8 text-center h-full bg-flatGreen rounded-3xl">
											<div className="flex flex-col justify-between h-full">
												<div className="flex-initial mb-10">
													<span className="inline-block mb-3.5 text-goldPrime  font-semibold uppercase">
														All updates for one year
													</span>
													<p className="mb-4 text-5xl md:text-7xl text-goldPrime font-semibold tracking-tight">
														{content?.introInfo?.monthlyPrice}
													</p>
													<p className="text-goldPrime font-semibold">
														{content?.introInfo?.briefInfo}
													</p>
													<p className="text-goldPrime font-semibold">
														{content?.introInfo?.location}
													</p>
												</div>
												<div className="flex-initial">
													<div className="flex flex-wrap justify-center -m-2">
														<div className="w-full p-2">
															<a
																className="block md:max-w-xs mx-auto w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-goldPrime hover:bg-goldPrimeDark focus:ring-4 focus:ring-goldPrimeDark rounded-full"
																href="#"
															>
																Purchase now
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<ImageGrid
					image={content?.imageGrid?.image}
					imageTwo={content?.imageGrid?.imageTwo}
					imageThree={content?.imageGrid?.imageThree}
					imageFour={content?.imageGrid?.imageFour}
					imageFive={content?.imageGrid?.imageFive}
					imageSix={content?.imageGrid?.imageSix}
				/>

				<Footer
					footerMenuLinks={footerMenuLinks?.footerMenuLinks}
					twitterLink={themesOptionsContent?.themesOptions?.twitterLink}
					linkedinLink={themesOptionsContent?.themesOptions?.linkedinLink}
					facebookLink={themesOptionsContent?.themesOptions?.facebookLink}
					instagramLink={themesOptionsContent?.themesOptions?.instagramLink}
				/>
			</main>
		</motion.div>
	);
};

export default mbweniSlugs;

export async function getStaticPaths() {
	const data = await fetchApartmentSlugs();

	const paths = data.map((slugUrl) => ({
		params: {
			slug: slugUrl?.slug as String,
		},
	}));

	return {paths, fallback: false};
}

export async function getStaticProps({params}: any) {
	const response: any = await fetchApartmentSlugsContent(params?.slug);

	const mainMenuLinks: object = await getMainMenuLinks();
	const heroMenuLinks: object = await getHeroMenuLinks();
	const footerMenuLinks: object = await getFooterMenuLinks();
	const locationMenuLinks: object = await getLocationMenuLinks();
	const themesOptionsContent: object = await getThemesOptionsContent();

	return {
		props: {
			mainMenuLinks,
			heroMenuLinks,
			footerMenuLinks,
			locationMenuLinks,
			themesOptionsContent,
			seo: response?.seo,
			content: response?.content,
			pageTitle: response?.pageTitle,
		},
		revalidate: 60,
	};
}
