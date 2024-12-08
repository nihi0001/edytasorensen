/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  'custom-bg': '#FFFCF5', // baggrundsfarve
		  'custom-pink': '#AA6073', // pink headline
		  'custom-brown': '#433737', // brun brødtekst
		  'custom-black': '#323232', // sort brødtekst
		  'custom-bannerbg': '#F3EEEA', // brun 


		},
		fontFamily: {
		  'playfair': ['"Karla"', 'sans'],  
		  'oxygen': ['"DM Sans"', 'sans'],  
		},
	  },
	},
	plugins: [],
  }
  