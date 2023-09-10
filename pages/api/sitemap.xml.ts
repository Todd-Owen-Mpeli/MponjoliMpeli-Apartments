// Import
import {Readable} from "stream";
import {SitemapStream, streamToPromise} from "sitemap";
import {getAllPagesSlugs} from "@/functions/graphql/Queries/GetAllPagesSlugs";
import {getAllApartmentsContent} from "@/functions/graphql/Queries/GetAllApartmentSlugs";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: any, res: any) => {
	const pagesSlugs = await getAllPagesSlugs();
	const apartmentsSlugs = await getAllApartmentsContent();

	// Pages & Blogs Arrays
	const pagesLinks: any = [];
	const apartmentsLinks: any = [];

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

	// Apartments Locations Dynamic Links
	// apartmentsSlugs?.map((keys: any) => {
	// 	const object = {
	// 		url: `/apartments/${keys?.slug}`,
	// 		changefreq: "monthly",
	// 		lastmod: `${keys?.modified}`,
	// 		priority: 0.8,
	// 	};

	// 	apartmentsLinks.push(object);
	// });

	// Arrays with your all dynamic links
	const allLinks: any = [...pagesLinks, ...apartmentsLinks];

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
