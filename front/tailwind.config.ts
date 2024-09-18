import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				// Colores base (ya configurados)
				white: {
					DEFAULT: '#FFFFFF',
					300: '#F7F7F7',
					500: '#FFFFFF',
					700: '#C0C0C0',
				},
				black: {
					DEFAULT: '#000000',
					300: '#333333',
					500: '#000000',
					700: '#999999',
				},
				blue: {
					DEFAULT: '#1E90FF',
					300: '#87CEFA',
					500: '#1E90FF',
					700: '#104E8B',
				},
				yellow: {
					DEFAULT: '#FFFF00',
					300: '#FFFF99',
					500: '#FFFF00',
					700: '#FFFF66',
				},
			},
			// Tipografía
			fontFamily: {
				// Fuente principal
				'sans': ['Roboto Mono', 'sans-serif'],
			},
			// Tamaños de fuente
			fontSize: {
				'h1': ['64px', { fontWeight: 'bold' }],
				'h2': ['40px', { fontWeight: 'bold' }],
				'h3': ['24px', { fontWeight: 'bold' }],
				'h5': ['20px', { fontWeight: 'bold' }],
				'subtitle': ['24px', { fontWeight: 'normal' }],
				'p-bold': ['16px', { fontWeight: 'bold' }],
				'p': ['16px', { fontWeight: 'normal' }],
				'semi-small-bold': ['14px', { fontWeight: 'bold' }],
				'semi-small': ['14px', { fontWeight: 'normal' }],
				'small': ['12px', { fontWeight: 'normal' }],
			},
		},
	},
	plugins: [],
};
export default config;
