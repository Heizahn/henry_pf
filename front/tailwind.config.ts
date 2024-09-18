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
					300: '#F0F0F0',
					500: '#D9D9D9',
					700: '#BFBFBF',
				},
				black: {
					DEFAULT: '#000000',
					300: '#808080',
					500: '#606060',
					700: '#404040',
				},
				blue: {
					DEFAULT: '#1E90FF',
					300: '#1A7FD9',
					500: '#187ACC',
					700: '#1556A3',
				},
				yellow: {
					DEFAULT: '#FFFFE0',
					300: '#FFFFC2',
					500: '#FFFFB0',
					700: '#FFFF99',
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
