// Import
import {useRouter} from "next/router";
import {client} from "@/config/apollo";
import type {AppProps} from "next/app";
import {useState, useEffect} from "react";
import {ApolloProvider} from "@apollo/client";

// Global Context Provider
import {IGlobalProps} from "@/types/context";

// Queries Functions
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
} from "@/functions/graphql/Queries/GetAllMenuLinks";
import {getAllBlogsContent} from "@/functions/graphql/Queries/GetAllBlogPostsSlugs";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";
import {getAllApartmentsContent} from "@/functions/graphql/Queries/GetAllApartmentSlugs";

// Styling
import "../styles/globals.scss";

// Components
import Footer from "@/components/Global/Footer";
import GlobalContextProvider from "@/components/context/GlobalContextProvider";
import PostHogContextProvider from "@/components/context/PostHogProviderContext";

export default function App({
	Component,
	pageProps,
	globalProps,
}: AppProps | any) {
	// COOKIES POLICY //
	// PostHog Cookies Policy
	const router: any = useRouter();

	// PAGE LOADING ANIMATION //
	// Page Animation Loader
	function Loading() {
		const [loading, setLoading]: any = useState(false);

		useEffect(() => {
			const handleStart = (url: any) =>
				url !== router.asPath && setLoading(true);
			const handleComplete = (url: any) =>
				url === router.asPath &&
				setTimeout(() => {
					setLoading(false);
				}, 7000);

			router.events.on("routeChangeStart", handleStart);
			router.events.on("routeChangeComplete", handleComplete);
			router.events.on("routeChangeError", handleComplete);

			return () => {
				router.events.off("routeChangeStart", handleStart);
				router.events.off("routeChangeComplete", handleComplete);
				router.events.off("routeChangeError", handleComplete);
			};
		});

		return (
			loading && (
				<div className="spinner-wrapper">
					{/* LEGO SPINNER */}
					<div className="loader">
						<div className="box box0">
							<div></div>
						</div>
						<div className="box box1">
							<div></div>
						</div>
						<div className="box box2">
							<div></div>
						</div>
						<div className="box box3">
							<div></div>
						</div>
						<div className="box box4">
							<div></div>
						</div>
						<div className="box box5">
							<div></div>
						</div>
						<div className="box box6">
							<div></div>
						</div>
						<div className="box box7">
							<div></div>
						</div>
						<div className="ground">
							<div></div>
						</div>
					</div>
				</div>
			)
		);
	}

	return (
		<ApolloProvider client={client}>
			<GlobalContextProvider globalProps={globalProps}>
				{/* Cookie Policy Pop Up */}
				<PostHogContextProvider />
				<Loading />
				<Component {...pageProps} />
				<Footer />
			</GlobalContextProvider>
		</ApolloProvider>
	);
}

App.getInitialProps = async ({Component, ctx}: any) => {
	let pageProps = {};

	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}

	// PUBLIC PAGES //
	/* Fetch all global content
	remaining content simultaneously */
	const [
		blogs,
		mainMenuLinks,
		navbarMenuLinks,
		footerMenuLinks,
		themesOptionsContent,
		apartmentsContent,
	]: any = await Promise.all([
		getAllBlogsContent(),
		getMainMenuLinks(),
		getNavbarMenuLinks(),
		getFooterMenuLinks(),
		getThemesOptionsContent(),
		getAllApartmentsContent(),
	]);

	const globalProps: IGlobalProps = {
		blogs: blogs,
		mainMenuLinks: mainMenuLinks,
		navbarMenuLinks: navbarMenuLinks,
		footerMenuLinks: footerMenuLinks,
		apartmentsContent: apartmentsContent,
		themesOptionsContent: themesOptionsContent,
	};

	return {
		pageProps,
		globalProps,
	};
};
