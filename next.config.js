/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"mponjolimpeliapartments.local",
			"mydummysite.co.uk",
			"www.w3.org",
		],
	},
};

module.exports = nextConfig;
