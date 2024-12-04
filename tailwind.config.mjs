/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  'custom-bg': '#FFFCFA', // baggrundsfarve
		},
		fontFamily: {
		  'old-standard': ['"Old Standard TT"', 'serif'],  // Tilføjer Old Standard TT fonten
		  'another-font': ['""', 'sans-serif'], // 
		},
	  },
	},
	plugins: [],
  }
  