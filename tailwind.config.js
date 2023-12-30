/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				gray: "#1f1d2b",
				darkorchid: "#9b51e0",
				silver: "#bcbcbc",
				lightgray: "#d7d7d7",
				"gray-5": "#e0e0e0",
				white: "#fff",
				gainsboro: "#e2e2e2",
				deepskyblue: "#18b2de",
				fuchsia: "#fb37ff",
				"gray-6": "#f2f2f2",
				"gray-3": "#828282",
			},
			spacing: {},
			fontFamily: {
				"heading-text-h2-poppins-48-medium": "Poppins",
			},
			borderRadius: {
				"3xs": "10px",
				xl: "20px",
				"16xl": "35px",
			},
		},
		fontSize: {
			xs: "0.75rem",
			base: "1rem",
			"5xl": "1.5rem",
			"53xl": "4.5rem",
			"29xl": "3rem",
			"21xl": "2.5rem",
			inherit: "inherit",
		},
	},
	corePlugins: {
		preflight: false,
	},
};
