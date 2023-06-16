// Import
import {
	getAllMbweniApartmentSlugs,
	getAllJangwaniApartmentSlugs,
} from "@/functions/GetAllApartmentSlugs";
import {Readable} from "stream";
import {SitemapStream, streamToPromise} from "sitemap";
import {getAllPagesSlugs} from "@/functions/GetAllPagesSlugs";
import {getAllLocationsSlugs} from "@/functions/GetAllLocationsSlugs";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: any, res: any) => {
	const [
		pagesSlugs,
		locationsSlugs,
		mbweniApartmentsSlugs,
		jangwaniApartmentsSlugs,
	] = await Promise.all([
		getAllPagesSlugs(),
		getAllLocationsSlugs(),
		getAllMbweniApartmentSlugs(),
		getAllJangwaniApartmentSlugs(),
	]);

	// Pages & Blogs Arrays
	const pagesLinks: any = [];
	const mbweniLinks: any = [];
	const jangwaniLinks: any = [];
	const locationsLinks: any = [];

	// Pages Dynamic Links
	pagesSlugs?.map((keys: any) => {
		const object = {
			url: `${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		pagesLinks.push(object);
	});

	// Apartment Locations Dynamic Links
	locationsSlugs?.map((keys: any) => {
		const object = {
			url: `/apartments/${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		locationsLinks.push(object);
	});

	// Jangwani Apartment Dynamic Links
	jangwaniApartmentsSlugs?.map((keys: any) => {
		const object = {
			url: `/apartments/jangwani/${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `2023-06-12T14:01:09.000Z`,
			priority: 0.8,
		};

		jangwaniLinks.push(object);
	});

	// Mbweni Apartment Dynamic Links
	mbweniApartmentsSlugs?.map((keys: any) => {
		const object = {
			url: `/apartments/mbweni/${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `2023-06-12T14:01:09.000Z`,
			priority: 0.8,
		};

		mbweniLinks.push(object);
	});

	// Arrays with your all dynamic links
	const allLinks: any = [
		...pagesLinks,
		...jangwaniLinks,
		...mbweniLinks,
		...locationsLinks,
	];

	// Create a stream to write to
	const stream = new SitemapStream({hostname: process.env.SITE_URL});

	req;

	res.writeHead(200, {
		"Content-Type": "application/xml",
	});

	const xmlString = await streamToPromise(
		Readable.from(allLinks).pipe(stream)
	).then((data: any) => data.toString());

	res.end(xmlString);
};
