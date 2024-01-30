import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			fontFamily: { sans: 'var(--font-rubik)' },
			colors: {
				'gray-1000': '#2E2E2E',
				'gray-950': '#4E4E4E',
				'gray-900': '#2C3C3C',
				black: '#0F0F0F',
				primary: '#81E6D9',
				secondary: '#212121'
			}
		}
	},
	plugins: []
};
export default config;
