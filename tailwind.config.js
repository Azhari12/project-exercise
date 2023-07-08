/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"@based": "#101828",
				"@blue": "#023399",
				"@blue2": "#0058f2",
				"@green": "#2abd79",
				"@red": "#f15b51",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light", "dark"],
	},
};
