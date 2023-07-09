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
				"@blue3": "#e0f2fe",
				"@blue4": "#f5faff",
				"@green": "#2abd79",
				"@gree2": "#e8fdf4",
				"@red": "#f15b51",
				"@red2": "#fee4e2",
				"@purple": "#7101ff",
				"@purple2": "#ebe9fe",
				"@yellow": "#fec84b",
				"@orange": "#dc6803",
				"@orange2": "#fefcf8",
				"@gray": "#eaecf5",
				"@choklat": "#a97e4f",
				"@choklat2": "#fff6e1",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light", "dark"],
	},
};
