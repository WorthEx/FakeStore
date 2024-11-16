/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{vue,html}", "./index.html", './public/index.html', "./src/**/*.{vue,js,ts,jsx,tsx,html}"],
	theme: {
		extend: {
			screens: {
				'fhd': '1900px',
				'qhd': '2550px',
			},
			colors: {
				'lilac-light': '#F4EEFF',
				'lilac': '#DCD6F7',
				'bluish': '#A6B1E1',
				'dark': '#424874'
			}
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
		},
	},
	plugins: [require('tailwindcss-animated')],
}

