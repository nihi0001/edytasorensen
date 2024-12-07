/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  'custom-bg': '#FFFCFA', // baggrundsfarve
		  'custom-pink': '#AA6073', // pink headline
		  'custom-brown': '#433737', // brun brødtekst
		  'custom-bannerbg': '#F3EEEA', // brun brødtekst


		},
		fontFamily: {
		  'playfair': ['"Playfair Display"', 'serif'],  
		  'oxygen': ['Montserrat', 'sans-serif'],  
		},
	  },
	},
	plugins: [],
  }
  