import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			//Shadow Personalized
			boxShadow: {
				'inner-black': 'inset 0px 3px 4px rgba(0, 0, 0, 0.6)',
				form: '5px 5px 5px rgba(0, 0, 0, 0.55)',
				fav: '0px 0px 8px rgba(255, 255, 255, 0.90)',
				menu: '4px 6px 4px rgba(0, 0, 0, 0.10)',
			},
			dropShadow: {
				'dark': [
				  '0 1px 1px rgb(0 0 0 / 0.2)',  // sombra más oscura
				  '0 1px 1px rgb(0 0 0 / 0.2)',  // sombra secundaria más oscura
				],
			  },
			colors: {
				// Colores base (ya configurados)
				white: {
					DEFAULT: '#FFFFFF',
					300: '#F0F0F0',
					500: '#D9D9D9',
					700: '#BFBFBF',
				},
				blue: {
					DEFAULT: '#1E90FF',
					300: '#1A7FD9',
					500: '#187ACC',
					700: '#1556A3',
				},
				black: {
					DEFAULT: '#151515',
					300: '#808080',
					500: '#606060',
					700: '#404040',
				},
				yellow: {
					DEFAULT: '#FFFFE0',
					300: '#FFFFC2',
					500: '#FFFFB0',
					700: '#FFFF99',
				},
			},
			backgroundImage: {
				'custom-gradient': 'linear-gradient(180deg, #00C9FF 0%, #92FE9D 100%)',
				"custom-gradient-profile": 'linear-gradient(135deg, #F0F0F0 0%, #D1E8E2 50%, #A3D4E0 100%)',
			},
			// Tipografía
			fontFamily: {
				// Fuente principal
				sans: ['Roboto Mono', 'sans-serif'],
			},
			// Tamaños de fuente
			fontSize: {
				h1: ['64px', { fontWeight: 'bold' }],
				h2: ['40px', { fontWeight: 'bold' }],
				h3: ['24px', { fontWeight: 'bold' }],
				h5: ['20px', { fontWeight: 'bold' }],
				subtitle: ['24px', { fontWeight: 'normal' }],
				pBold: ['16px', { fontWeight: 'bold' }],
				p: ['16px', { fontWeight: 'normal' }],
				semiSmallBold: ['14px', { fontWeight: 'bold' }],
				semiSmall: ['14px', { fontWeight: 'normal' }],
				smallBold: ['12px', { fontWeight: 'bold' }],
				small: ['12px', { fontWeight: 'normal' }],
			},
		},
	},
	plugins: [],
};

export default config;
