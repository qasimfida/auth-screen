/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				checked: "0 0 0 3px rgba(164, 202, 254, 0.45)",
			},
		},
	},
	plugins: [],
};
