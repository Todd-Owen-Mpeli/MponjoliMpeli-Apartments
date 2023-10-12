import type {Config} from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {},
		colors: {
			// Base colors Variables
			black: "#111",
			grey: "#686868",
			white: "#ffffff",
			pureBlack: "#000",
			darkGrey: "#8f8f8f",
			lightGrey: "#f7f7f7",

			// Main colors
			gold: "#d16415",
			green: {
				default: "#00946a",
				Two: "#003f2d",
				dark: "#012a2d",
				flat: "#04393d",
				bright: "#00c68e",
				darker: "#010f10",
			},
			pinkRed: "#e20031",
			greenTwo: "#003f2d",
			darkBlue: "#0d172a",
			goldPrime: "#dfc695",
			flatGreen: "#04393d",
			darkGreen: "#012a2d",
			goldYellow: "#D4AF37",
			darkPinkRed: "#9a0021",
			brightGreen: "#00c68e",
			flatGreyGreen: "#435254",
			goldPrimeDark: "#d1a855",
			goldPrimeDarker: "#b68b36",
		},
	},
	plugins: [],
};
export default config;
