/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		fontFamily: {
			CanelaDeck: ["Canela Deck", "sans-serif"],
			Bitter: ["Bitter", "sans-serif"],
			Inter: ["Inter", "sans-serif"],
		},
		fontSize: {
			xs: ".75rem",
			sm: ".8rem",
			tiny: ".9rem",
			base: "1rem",
			medium: "1.15rem",
			lg: "1.25rem",
			xl: "1.5rem",
			"2xl": "1.75rem",
			"3xl": "1.85rem",
			"4xl": "2rem",
			"5xl": "2.25rem",
			"6xl": "2.5rem",
			"7xl": "3rem",
			"8xl": "4rem",
		},
		colors: {
			// Base colors Variables
			black: "#111",
			grey: "#686868",
			white: "#ffffff",
			pureBlack: "#000",
			darkGrey: "#8f8f8f",
			lightGrey: "#f7f7f7",

			// Main colors
			blue: "#2563eb",
			gold: "#d16415",
			green: {
				default: "#00946a",
				Two: "#003f2d",
				dark: "#012a2d",
				flat: "#04393d",
				bright: "#00c68e",
			},
			greenTwo: "#003f2d",
			darkBlue: "#0d172a",
			goldPrime: "#dfc695",
			flatGreen: "#04393d",
			darkGreen: "#012a2d",
			goldYellow: "#D4AF37",
			brightGreen: "#00c68e",
			flatGreyGreen: "#435254",
			goldPrimeDark: "#d1a855",
			goldPrimeDarker: "#b68b36",
		},
	},
	plugins: [],
};
