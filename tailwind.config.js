/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/theming/themes")["light"],
					primary: "#0fa9cd",
					secondary: "#0c819b",
					accent: "#f28b20",
					neutral: "#fcfbf8",
					"base-100": "#ffffff",
					success: "#4caf50",
					error: "#e53935",
					warning: "#fbc02d",
					info: "#4a7bbf",
				},
			},
		],
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
