// Import
import Link from "next/link";
import Image from "next/image";
import {gql} from "@apollo/client";
import {client} from "../config/apollo";

// Components
import MetaTag from "../components/Meta/MetaTag";
import TestComponent from "../components/TestComponent";

export default function Home({seo, content}: any) {
	return (
		<>
			{/* <!--===== META TAG =====--> */}
			<MetaTag title={`MponjoliMpeli`} seo={seo} />

			<main>
				<TestComponent props="Test Component" />
				<Image
					alt=""
					width={500}
					height={500}
					className="w-[50px] h-[50px] mx-auto"
					src="/img/Logos/MponjoliMpeli Apartments Logo Icon.png"
				/>

				<section className="pt-24 pb-32 overflow-hidden bg-gradient-gray2">
					<div className="container px-4 mx-auto">
						<div className="max-w-md mx-auto mb-20">
							<h2 className="mb-4 text-6xl font-semibold text-center text-gray-900 sm:text-7xl">
								Got questions?
							</h2>
							<p className="text-lg text-center text-gray-600">
								Frequently Asked Questions
							</p>
						</div>
						<div className="flex flex-wrap mb-24 -m-6">
							<div className="w-full p-6 md:w-1/2">
								<div className="md:max-w-xl">
									<h2 className="mb-4 font-medium text-gray-900 text-medium">
										Is it really unlimited downloads?
									</h2>
									<p className="text-base text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Sagittis euismod ornare aenean ut justo elit amet. Gravida
										pulvinar ac elementum praesent vel quis accumsan, proin
										rhoncus.
									</p>
								</div>
							</div>
							<div className="w-full p-6 md:w-1/2">
								<div className="md:max-w-xl">
									<h2 className="mb-4 font-medium text-gray-900 text-medium">
										Is it really unlimited downloads?
									</h2>
									<p className="text-base text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Sagittis euismod ornare aenean ut justo elit amet. Gravida
										pulvinar ac elementum praesent vel quis accumsan, proin
										rhoncus.
									</p>
								</div>
							</div>
							<div className="w-full p-6 md:w-1/2">
								<div className="md:max-w-xl">
									<h2 className="mb-4 font-medium text-gray-900 text-medium">
										Do you offer discounts on annual plans?
									</h2>
									<p className="text-base text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Sagittis euismod ornare aenean ut justo elit amet. Gravida
										pulvinar ac elementum praesent vel quis accumsan, proin
										rhoncus.
									</p>
								</div>
							</div>
							<div className="w-full p-6 md:w-1/2">
								<div className="md:max-w-xl">
									<h2 className="mb-4 font-medium text-gray-900 text-medium">
										Do you offer discounts on annual plans?
									</h2>
									<p className="text-base text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Sagittis euismod ornare aenean ut justo elit amet. Gravida
										pulvinar ac elementum praesent vel quis accumsan, proin
										rhoncus.
									</p>
								</div>
							</div>
							<div className="w-full p-6 md:w-1/2">
								<div className="md:max-w-xl">
									<h2 className="mb-4 font-medium text-gray-900 text-medium">
										What kind of file do you offer with the packages?
									</h2>
									<p className="text-base text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Sagittis euismod ornare aenean ut justo elit amet. Gravida
										pulvinar ac elementum praesent vel quis accumsan, proin
										rhoncus.
									</p>
								</div>
							</div>
							<div className="w-full p-6 md:w-1/2">
								<div className="md:max-w-xl">
									<h2 className="mb-4 font-medium text-gray-900 text-medium">
										What kind of file do you offer with the packages?
									</h2>
									<p className="text-base text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Sagittis euismod ornare aenean ut justo elit amet. Gravida
										pulvinar ac elementum praesent vel quis accumsan, proin
										rhoncus.
									</p>
								</div>
							</div>
						</div>
						<a
							className="block mx-auto overflow-hidden text-base font-medium text-gray-900 group max-w-max hover:text-gray-800"
							href="#"
						>
							<p className="mb-1">
								Didn&rsquo;t find the answer? Contact us here
							</p>
							<div className="w-full h-px transition duration-500 ease-in-out transform -translate-x-0 group-hover:translate-x-full bg-gradient-cyan"></div>
						</a>
					</div>
				</section>
			</main>
		</>
	);
}
export async function getStaticProps() {
	const getHomePageContent: any = gql`
		{
			mainContent: pages(where: {id: 6, status: PUBLISH}) {
				edges {
					node {
						seo {
							canonical
							cornerstone
							focuskw
							fullHead
							metaDesc
							metaKeywords
							metaRobotsNofollow
							metaRobotsNoindex
							opengraphAuthor
							opengraphDescription
							opengraphImage {
								mediaItemUrl
							}
							opengraphModifiedTime
							opengraphPublishedTime
							opengraphPublisher
							opengraphSiteName
							opengraphTitle
							opengraphType
							opengraphUrl
							readingTime
							title
							twitterDescription
							twitterTitle
							twitterImage {
								mediaItemUrl
							}
						}
					}
				}
			}
		}
	`;

	const response: any = await client.query({
		query: getHomePageContent,
	});

	return {
		props: {
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
		},
		revalidate: 60,
	};
}
